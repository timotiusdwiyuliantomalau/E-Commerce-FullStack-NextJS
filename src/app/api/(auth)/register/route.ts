import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "../../../../../utils/firebase/service";

export async function POST(request: NextRequest) {
    const req=await request.json();
    const res=await registerUser(req);
    return NextResponse.json(res);
}