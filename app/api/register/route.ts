import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { registerSchema } from "@/app/schemas/register";
import bcrypt from "bcryptjs";
import { z } from "zod";
import jwt from "jsonwebtoken";

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

    // Create JSON web token for login persistence
    // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    //   expiresIn: "7d",
    // });

    const response = NextResponse.json(
      { id: user.id, email: user.email },
      { status: 201 }
    );

    // response.cookies.set("auth_token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "lax",
    //   path: "/",
    //   maxAge: 60 * 60 * 24 * 7, // 7 days
    // });

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error }, { status: 400 });
    }
    console.log(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
