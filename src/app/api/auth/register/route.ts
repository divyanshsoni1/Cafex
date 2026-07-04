import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Check if email is already taken using indexed lookup
    const [existingUser] = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser) {
      return NextResponse.json({ error: "Email is already registered" }, { status: 409 });
    }

    // 2. Hash password. 
    // WARNING: Use salt rounds = 10. Higher numbers dramatically slow down the event loop under heavy load.
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create the new user record
    const [newUser] = await db
      .insert(users)
      .values({
        name: name || null,
        email: email.toLowerCase().trim(),
        password: hashedPassword,
      })
      .returning({
        id: users.id,
        email: users.email,
      });

    return NextResponse.json({ 
      success: true, 
      message: "User registered successfully",
      user: newUser 
    }, { status: 201 });

  } catch (error) {
    console.error("REGISTRATION_API_ERROR:", error);
    return NextResponse.json({ error: "Internal processing throttling" }, { status: 500 });
  }
}