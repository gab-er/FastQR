"use client";

import { NextRequest, NextResponse } from "next/server";
import { useSession } from "next-auth/react";

const protectedRoutes = [""];

export default async function middleware(req: NextRequest) {
  const { data: session } = useSession();

  // Get current url
  const { pathname } = req.nextUrl;

  // Check session
  const isProtected = protectedRoutes.some((route) => {
    pathname.startsWith(route);
  });

  // If already logged in, block access to login and registration pages
  if (isProtected && session) {
    return NextResponse.redirect(new URL("/login"));
  }

  return NextResponse.next();
}
