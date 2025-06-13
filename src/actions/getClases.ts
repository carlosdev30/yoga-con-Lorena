import { sql } from "@/lib/db";

export async function getClases() {
  const result = await sql`SELECT * FROM clases`;
  return result;
}
