#!/usr/bin/env node

import { execSync } from "child_process";

const MIN_SCORE = Number(process.env.MIN_SCORE || 8);
const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const OPENAI_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_KEY) {
    console.error("❌ Missing OPENAI_API_KEY");
    process.exit(1);
}

function safeExec(cmd) {
    try {
        return execSync(cmd, { encoding: "utf8" });
    } catch {
        return "";
    }
}

function getGitDiff() {
    try {
        try {
            execSync("git fetch origin main --quiet", { stdio: "ignore" });
        } catch {
            // ignore fetch errors
        }

        const hasOriginMain = !!safeExec("git rev-parse --verify origin/main").trim();
        const base = hasOriginMain ? "origin/main" : "HEAD~1";
        const diff = safeExec(`git diff --no-color ${base}...HEAD`);
        return diff || "";
    } catch (err) {
        console.error("❌ Failed to get git diff:", err.message || err);
        return "";
    }
}

function buildPrompt(diff) {
    const MAX = 120_000;
    let truncated = diff;
    let note = "";
    if (diff.length > MAX) {
        truncated = diff.slice(0, MAX);
        note = "\n\nNOTE: diff truncated to first 120k chars due to token limits.\n\n";
    }

    return `You are a strict senior software engineer performing a CI code review. Analyze ONLY the following git diff:${note}\n\n\`\`\`diff\n${truncated}\n\`\`\`\n\nReturn a structured markdown report with:\n\n## Issues\nFor each issue:\n- Severity: Critical / High / Medium / Low\n- File + line (if possible)\n- Explanation\n- Fix (code snippet)\n\n## Score\nGive a score out of 10.\n\n## Verdict\nPASS if score >= 8\nFAIL if score < 8\n\nBe strict. Do not be polite.`;
}

async function callOpenAI(prompt) {
    let fetchFn = globalThis.fetch;
    if (!fetchFn) {
        try {
            const mod = await import("node-fetch");
            fetchFn = mod.default ?? mod;
        } catch {
            console.error("❌ No fetch available. Install node-fetch or run Node 18+");
            process.exit(1);
        }
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);

    const res = await fetchFn("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        signal: controller.signal,
        headers: {
            "Authorization": `Bearer ${OPENAI_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: MODEL,
            messages: [
                { role: "system", content: "You are a strict code reviewer." },
                { role: "user", content: prompt },
            ],
            temperature: 0.2,
        }),
    }).catch((err) => {
        console.error("❌ OpenAI request failed:", err.message || err);
        process.exit(1);
    });

    clearTimeout(timeout);

    if (!res.ok) {
        console.error("❌ OpenAI API error:", await res.text());
        process.exit(1);
    }

    const data = await res.json();
    if (!data?.choices?.length || !data.choices[0].message?.content) {
        console.error("❌ Unexpected OpenAI response shape", JSON.stringify(data));
        process.exit(1);
    }
    return data.choices[0].message.content;
}

function extractScore(text) {
    const m = text.match(/score[^\d\n]*([0-9]+(?:\.[0-9]+)?)(?:\s*\/\s*10)?/i);
    return m ? parseFloat(m[1]) : null;
}

(async () => {
    console.log("🔍 Running AI Code Review...\n");
    const diff = getGitDiff();
    if (!diff.trim()) {
        console.log("✅ No changes detected.");
        process.exit(0);
    }

    const prompt = buildPrompt(diff);
    const review = await callOpenAI(prompt);

    console.log("📋 AI Review Result:\n");
    console.log(review);

    const score = extractScore(review);
    if (score === null) {
        console.warn("⚠️ Could not extract score. Set FAIL_ON_NO_SCORE=true to fail CI.");
        if (process.env.FAIL_ON_NO_SCORE === "true") process.exit(1);
        process.exit(0);
    }

    console.log(`\n🎯 Score: ${score}/10`);
    if (score < MIN_SCORE) {
        console.error("❌ Code quality below threshold. Failing CI.");
        process.exit(1);
    }
    console.log("✅ Code quality acceptable.");
    process.exit(0);
})();
