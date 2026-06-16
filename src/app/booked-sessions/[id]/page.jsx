import { notFound } from "next/navigation";
import BookSessionClient from "./BookSessionClient";

export default async function BookSessionPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:7000/tutors/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();
  }

  const tutor = await res.json();

  return <BookSessionClient tutor={tutor} />;
}