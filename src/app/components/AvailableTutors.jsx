import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function TutorsPage() {
  const res = await fetch("http://localhost:7000/available-tutors");

  if (!res.ok) {
    return <div>Failed to load tutors</div>;
  }

  const tutors = await res.json();
  

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Available Tutors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white  rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
            >
              <img
                src={tutor.photoURL || "/img/default.jpg"}
                alt={tutor.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />

              <h3 className="text-xl font-semibold text-center mt-4">
                {tutor.name}
              </h3>

              <p className="text-center text-gray-500">
                {tutor.subject}
              </p>

              <p className="text-center text-indigo-600 font-bold mt-2">
                ${tutor.hourlyFee}/hr
              </p>

              <div className="text-center mt-4">
                <Link
                  href={`/tutors/${tutor._id}`}
                  className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Book Session
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}