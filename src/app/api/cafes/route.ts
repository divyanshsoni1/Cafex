import { NextResponse } from "next/server";
import { db } from "@/db"; // Path to your db instance client
import { cafes } from "@/db/schema"; // Import your cafes table schema

export async function GET() {
  try {
    const allCafes = await db.select().from(cafes);

    return NextResponse.json({ success: true, data: allCafes }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch cafes:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}