import Jobs from "../../data.json"
import {NextResponse } from "next/server"

export  function  GET() {
    const body =  Jobs;

    return NextResponse.json(body, {status: 200});
}