import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const referrerCode = url.searchParams.get("ref");

  if (referrerCode) {
    const response = NextResponse.next();
    response.cookies.set("referrerCode", referrerCode, { path: "/" });

    return response;
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: [
    "/affiliate/:path*",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
