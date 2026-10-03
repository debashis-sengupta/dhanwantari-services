import fs from "node:fs";
import path from "node:path";

/**
 * Lightweight SQLite persistence for contact-form enquiries.
 *
 * Uses Node's built-in `node:sqlite` (Node 22+). Insurance products themselves
 * live as Markdown files in /content/insurances, so the database only stores
 * customer enquiries. If the SQLite module is unavailable the helpers degrade
 * gracefully instead of breaking the build.
 */

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "app.sqlite");

type SqliteDb = {
  exec: (sql: string) => void;
  prepare: (sql: string) => {
    run: (...params: unknown[]) => unknown;
    all: (...params: unknown[]) => unknown[];
  };
};

let db: SqliteDb | null = null;
let initialized = false;

function getDb(): SqliteDb | null {
  if (initialized) return db;
  initialized = true;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { DatabaseSync } = require("node:sqlite");
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    db = new DatabaseSync(DB_PATH) as SqliteDb;
    db.exec(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        category TEXT,
        subject TEXT,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
    `);
  } catch (err) {
    console.warn("[db] SQLite unavailable, enquiries will not be persisted:", err);
    db = null;
  }
  return db;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  category?: string;
  subject?: string;
  message: string;
}

export function saveContactMessage(msg: ContactMessage): boolean {
  const conn = getDb();
  if (!conn) return false;
  conn
    .prepare(
      `INSERT INTO contact_messages (name, email, phone, category, subject, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
    .run(
      msg.name,
      msg.email,
      msg.phone ?? null,
      msg.category ?? null,
      msg.subject ?? null,
      msg.message,
    );
  return true;
}

export function listContactMessages(limit = 100): Array<Record<string, unknown>> {
  const conn = getDb();
  if (!conn) return [];
  return conn
    .prepare(
      `SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT ?`,
    )
    .all(limit) as Array<Record<string, unknown>>;
}
