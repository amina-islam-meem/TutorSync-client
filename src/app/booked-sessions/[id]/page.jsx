import { notFound } from "next/navigation";
import BookSessionClient from "./BookSessionClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function BookSessionPage({ params }) {
  const { id } = await params;

  const requestHeaders = await headers();

  const session = await auth.api.getSession({
    headers: requestHeaders,
  });

  if (!session?.user) return notFound();

  const { token } = await auth.api.getToken({
    headers: requestHeaders,
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  const tutor = await res.json();

  return <BookSessionClient tutor={tutor} />;
}