import { hasNeonDatabase, sql } from "@/lib/neon";
import type {
    ProjectItem,
    Skill,
    ExperienceItem,
    EducationItem,
} from "@/types";
import {
    projects as fallbackProjects,
    projectCategories,
} from "@/data/projects";
import {
    skills as fallbackSkills,
    experience as fallbackExperience,
    education as fallbackEducation,
} from "@/data/skills";

export type PortfolioContent = {
    projects: ProjectItem[];
    skills: Skill[];
    experience: ExperienceItem[];
    education: EducationItem[];
};

type ProjectRow = {
    id: number;
    title: string;
    slug: string | null;
    shortDescription: string;
    category: ProjectItem["category"];
    themeKey: string | null;
    bgColor: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    problem: string;
    solution: string;
    result: string;
    keyFeatures: string[];
    learned: string;
    techStack: string[];
    screenshots: string[];
    nextImprovements: string[] | null;
    statusItems: ProjectItem["statusItems"] | null;
    liveLink: string | null;
    githubLink: string | null;
};

function toProjectItem(row: ProjectRow): ProjectItem {
    return {
        id: row.id,
        title: row.title,
        slug: row.slug ?? undefined,
        shortDescription: row.shortDescription,
        category: row.category,
        themeKey: row.themeKey ?? undefined,
        bgColor: row.bgColor,
        imageSrc: row.imageSrc,
        imageAlt: row.imageAlt,
        description: row.description,
        problem: row.problem,
        solution: row.solution,
        result: row.result,
        keyFeatures: row.keyFeatures ?? [],
        learned: row.learned,
        techStack: row.techStack ?? [],
        screenshots: row.screenshots ?? [],
        nextImprovements: row.nextImprovements ?? [],
        statusItems: row.statusItems ?? [],
        liveLink: row.liveLink ?? undefined,
        githubLink: row.githubLink ?? undefined,
    };
}

async function fetchProjectsFromDb(): Promise<ProjectItem[]> {
    if (!sql || !hasNeonDatabase) {
        return fallbackProjects;
    }

    try {
        const rows = (await sql`
      select
        id,
        title,
        slug,
        short_description as "shortDescription",
        category,
        theme_key as "themeKey",
        bg_color as "bgColor",
        image_src as "imageSrc",
        image_alt as "imageAlt",
        description,
        problem,
        solution,
        result,
        key_features as "keyFeatures",
        learned,
        tech_stack as "techStack",
        screenshots,
        next_improvements as "nextImprovements",
        status_items as "statusItems",
        live_link as "liveLink",
        github_link as "githubLink"
      from projects
      order by id asc
    `) as ProjectRow[];

        return rows.map(toProjectItem);
    } catch (error) {
        console.warn("Falling back to local project data:", error);
        return fallbackProjects;
    }
}

export async function getProjects() {
    return fetchProjectsFromDb();
}

export async function getFeaturedProjects(limit = 3) {
    const items = await fetchProjectsFromDb();
    const smartSim = items.find((project) => project.slug === "smartsim-analytics");

    if (!smartSim) {
        return items.slice(0, limit);
    }

    return [smartSim, ...items.filter((project) => project.slug !== "smartsim-analytics")].slice(0, limit);
}

export async function getProjectById(id: number) {
    const items = await fetchProjectsFromDb();
    return items.find((project) => project.id === id) ?? null;
}

export function getProjectCategories() {
    return [...projectCategories];
}

export function getSkills() {
    return fallbackSkills;
}

export function getExperience() {
    return fallbackExperience;
}

export function getEducation() {
    return fallbackEducation;
}
