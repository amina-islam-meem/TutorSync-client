import { notFound } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { use } from "react";


const TutorDetailsPage = async (props) => {
  // ✅ unwrap params using React.use()
  const { id } = use(props.params);

  if (!id) return notFound();

  // ✅ unwrap headers
  const requestHeaders = await headers();

  const session = await auth.api.getSession({
    headers: requestHeaders,
  });

  if (!session?.user) return notFound();

  const { token } = await auth.api.getToken({
    headers: requestHeaders,
  });

  const res = await fetch(
    `http://localhost:7000/tutors/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  const tutor = await res.json();
  return (
    <section className="py-20 bg-gray-50 min-h-screen ">
      <div className="max-w-5xl mx-auto bg-white  p-10 rounded-2xl shadow-xl">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <img
            src={tutor.photoURL}
            alt={tutor.name}
            className="w-full h-80 object-cover rounded-2xl shadow-md"
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
                 className="mt-6 inline-block bg-gradient text-white px-6 py-3 rounded-lg">Book Session</Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TutorDetailsPage;