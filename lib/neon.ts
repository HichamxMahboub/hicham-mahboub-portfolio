import { neon } from "@neondatabase/serverless";

export function getDatabaseUrl() {
    return (
        process.env.DATABASE_URL?.trim() ||
        process.env.NEON_DATABASE_URL?.trim() ||
        null
    );
}

const databaseUrl = getDatabaseUrl();

export const hasNeonDatabase = Boolean(databaseUrl);
export const sql = databaseUrl ? neon(databaseUrl) : null;
