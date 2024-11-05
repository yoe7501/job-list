import Jobs from "../../data.json"
import { NextRequest, NextResponse } from "next/server"

export async function  GET(request: NextRequest) {
    const body = await Jobs;

    return NextResponse.json(body, {status: 200});
}