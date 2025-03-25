import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(request: NextRequest) {
  try {
    // Get all historical queries
    const queries = await prisma.userQuery.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });

    return NextResponse.json({ queries });
  } catch (error) {
    console.error("Error in queries API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch historical queries" },
      { status: 500 }
    );
  }
}
