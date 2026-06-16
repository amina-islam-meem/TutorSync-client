import { notFound } from "next/navigation";
import Link from "next/link";

export default async function TutorDetailsPage(props) {
  const params = await props.params;
  const id = params.id;

  if (!id) return notFound();

  const res = await fetch(
    `http://localhost:7000/tutors/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const tutor = await res.json();

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <img
            src={tutor.photoURL}
            alt={tutor.name}
            className="w-full h-[350px] object-cover rounded-2xl shadow-md"
          />

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              {tutor.name}
            </h2>

            <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm mb-4">
              {tutor.subject}
            </span>

            <p className="text-indigo-600 text-xl font-semibold mb-6">
              ${tutor.hourlyFee}/hr
            </p>

            <div className="space-y-2 text-gray-700">
              <p><strong>Available Days:</strong> {tutor.availableDays}</p>
              <p><strong>Time Slot:</strong> {tutor.timeSlot}</p>
              <p><strong>Location:</strong> {tutor.location}</p>
              <p><strong>Teaching Mode:</strong> {tutor.teachingMode}</p>
              <p><strong>Experience:</strong> {tutor.experience}</p>
            </div>

            <Link href={`/booked-sessions/${tutor._id}`}
                 className="mt-6 inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg">Book Session</Link>
          </div>

        </div>

      </div>
    </section>
  );
}