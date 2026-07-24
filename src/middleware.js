import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionCookie =
    request.cookies.get("__Secure-better-auth.session_data") ||
    request.cookies.get("better-auth.session_data");

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/my-booked-sessions",
    "/my-tutors",
    "/add-tutor",
    "/my-favorites",
  ],
};