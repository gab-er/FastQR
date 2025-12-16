import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { registerSchema } from "@/app/schemas/register";
import bcrypt from "bcryptjs";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerSchema.parse(body); // Validate again
    const { email, password } = parsed;

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // Return error if email already exists
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { id: user.id, email: user.email },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
