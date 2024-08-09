import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest,res:NextResponse) {
  const req = await request.json();
  NextResponse.redirect(`http://localhost:3000/shipping/${req.id}`);
}
