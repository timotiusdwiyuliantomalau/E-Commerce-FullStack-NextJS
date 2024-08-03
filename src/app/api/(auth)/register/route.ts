import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "../../../../../utils/firebase/service";
import { getDoc } from "firebase/firestore";

export async function POST(request: NextRequest) {
    const req=await request.json();
    const res=await registerUser(req);
    return NextResponse.json(res,{status:res.statusCode});
}