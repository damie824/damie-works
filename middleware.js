import { NextResponse } from "next/server";

export async function middleware(req) {
  let path = req.nextUrl.pathname;

  if (
    path.startsWith("/api") &&
    req.headers.get("apikey") != process.env.APISECRET
  ) {
    if (!path.startsWith("/api/auth")) {
      return NextResponse.json(
        { message: "API key not found." },
        { status: 500 }
      );
    }
  }

  NextResponse.next();
}
