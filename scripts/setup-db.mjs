import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error(
    "DATABASE_URL is not set.\n" +
      "1. Copy .env.example to .env.local\n" +
      "2. Paste your Neon connection string from https://console.neon.tech\n" +
      "3. Run: npm run db:setup",
  );
  process.exit(1);
}

const sqlPath = join(dirname(fileURLToPath(import.meta.url)), "init-db.sql");
const initSql = readFileSync(sqlPath, "utf8");

/** Strip SQL line comments (-- ...) for simple splitting */
function stripLineComments(sql) {
  return sql.replace(/^\s*--.*$/gm, "").trim();
}

const statements = stripLineComments(initSql)
  .split(";")
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

const sql = neon(databaseUrl);

try {
  for (const statement of statements) {
    await sql.query(statement);
  }
  console.log(
    "Done: contact table and index are ready (or already existed).",
  );
  console.log("  Test the form at http://localhost:3000/contact");
} catch (error) {
  console.error("Failed to set up database:", error);
  process.exit(1);
}
