import { NextRequest, NextResponse } from "next/server";
import { updateData } from "../../../../../utils/firebase/service";

export async function PUT(request: NextRequest) {
    const req = await request.json();
    const res = await updateData(req);
    return NextResponse.json(res, { status: res.statusCode });
}