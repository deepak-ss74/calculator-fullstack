import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  // find user in database
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 401 }
    );
  }

  if (user.password !== password) {
    return NextResponse.json(
      { message: "Invalid password" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
    user: user.email,
  });

  // create login cookie
  response.cookies.set("auth", "true", {
    httpOnly: true,
    path: "/",
  });

  return response;
}