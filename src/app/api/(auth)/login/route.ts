import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "../../../../../utils/firebase/service";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await loginUser(req);
  return NextResponse.json(res);
}
