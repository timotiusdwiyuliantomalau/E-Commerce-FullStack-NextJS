import { NextResponse } from "next/server";
import { deleteById } from "../../../../../utils/firebase/service";

export async function DELETE(request: Request) {
    const req=await request.json();
    const res=await deleteById(req);
    return NextResponse.json(res, { status: res.statusCode });
}