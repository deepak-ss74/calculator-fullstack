import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    console.log("Register request:", email, password);

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}