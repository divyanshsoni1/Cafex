import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from environment variables.");
}

const client = postgres(process.env.DATABASE_URL, { 
  max: 1, 
  idle_timeout: 20,
  connect_timeout: 10 
});

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const result = await client`SELECT current_database()`;
console.log(result);

export const db = drizzle(client, { schema });