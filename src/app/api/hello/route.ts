import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // write some code here to get data from db
  return NextResponse.json({
    id: 1,
    name: "Minsuk",
  });
}
