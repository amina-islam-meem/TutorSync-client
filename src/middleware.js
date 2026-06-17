import { NextResponse } from "next/server";

export function middleware(request) {
  const cookies = request.cookies.getAll();

  //  Check if any better-auth session cookie exists
  const hasSession = cookies.some((cookie) =>
    cookie.name.startsWith("better-auth.session")
  );

  if (!hasSession) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/my-booked-sessions",
    "/my-tutors",
    "/tutors/:path+",
    "/add-tutor",
  ],
};