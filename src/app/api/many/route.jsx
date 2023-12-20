import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req, res) {
  try {
      const result = await prisma.users.findMany({
      });
      return NextResponse.json({data: result}, {status: 200});
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
