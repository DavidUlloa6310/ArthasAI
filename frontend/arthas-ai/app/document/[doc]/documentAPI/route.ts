import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json({
    message: "Document API GET",
    randomNumber: Math.random(),
    requestParams: request.body,
  });
}
