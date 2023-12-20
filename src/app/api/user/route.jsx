import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { headers } from "../../../../next.config";
import {re} from "prisma/build/child";

const prisma = new PrismaClient();
export async function POST(req, res) {
  try {
    const clientData = await req.json();
    if (clientData instanceof Array) {
      const result = await prisma.users.createMany({
        data: clientData,
      });

      return NextResponse.json({ data: result }, { status: 200 });
    } else {
      const result = await prisma.users.create({
        data: clientData,
      });

      return NextResponse.json({ data: result }, { status: 200 });
    }
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = searchParams.get("id");
    const number = id * 1;
    const result = await prisma.users.delete({
      where: { id: number },
    });

    return NextResponse.json({ data: result }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = searchParams.get("id");
    const number = id * 1;
    const clientData = await req.json();
    const result = await prisma.users.update({
      where: { id: number },
      data: clientData,
    });

    return NextResponse.json({ data: result }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = searchParams.get("id");
    if(id==="" || id===null) {
      const number = id * 1;
      const result = await prisma.users.findUnique({
        where: {id: number},
      });

      return NextResponse.json({data: result}, {status: 200});
    }else{

    }
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
