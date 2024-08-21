import { NextRequest, NextResponse } from "next/server";
import { updateCart } from "../../../../../utils/firebase/service";

export async function PUT(request: NextRequest) {
    const req = await request.json();
    const res = await updateCart(req);
    return NextResponse.json(res, { status: res.statusCode });
}