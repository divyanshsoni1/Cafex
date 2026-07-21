import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { cafes } from "@/db/schema";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    // Validate cafe ID
    if (!id || typeof id !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid cafe ID",
        },
        { status: 400 }
      );
    }

    // Fetch cafe by ID
    const cafe = await db
      .select()
      .from(cafes)
      .where(eq(cafes.id, id))
      .limit(1);

    // Cafe not found
    if (cafe.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Cafe not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: cafe[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch cafe:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}