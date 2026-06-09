import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

/**
 * Lazily-created Neon serverless SQL client (HTTP — ideal for Vercel functions).
 * The connection string for the `hellcoreclub-database` Neon project
 * (green-shadow-07592369) must be provided via the DATABASE_URL env var.
 *
 * Created lazily so the app can build without the env var present.
 */
let client: NeonQueryFunction<false, false> | null = null;

export function getSql(): NeonQueryFunction<false, false> {
  if (!client) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set.");
    }
    client = neon(connectionString);
  }
  return client;
}

let schemaReady: Promise<void> | null = null;

/** Lazily ensures the `leads` table exists (idempotent). */
export function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    const sql = getSql();
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id          BIGSERIAL PRIMARY KEY,
          nome        TEXT NOT NULL,
          email       TEXT NOT NULL,
          whatsapp    TEXT NOT NULL,
          kick_nick   TEXT NOT NULL,
          instagram   TEXT NOT NULL,
          politica_aceita_em TIMESTAMPTZ,
          created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;
      await sql`
        ALTER TABLE leads
        ADD COLUMN IF NOT EXISTS politica_aceita_em TIMESTAMPTZ;
      `;
      await sql`
        CREATE UNIQUE INDEX IF NOT EXISTS leads_email_unique
        ON leads (lower(email));
      `;
    })().catch((err) => {
      schemaReady = null;
      throw err;
    });
  }
  return schemaReady;
}
