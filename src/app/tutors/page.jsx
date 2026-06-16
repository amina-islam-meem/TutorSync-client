import Link from "next/link";

export const metadata = {
  title: "Tutors | TutorSync",
};

async function getTutors() {
  const res = await fetch("http://localhost:7000/tutors", {
    cache: "no-store",
  });
  return res.json();
}

export default async function TutorsPage() {
  const tutors = await getTutors();

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient bg-clip-text text-transparent">
          All Tutors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={tutor.photoURL}
                alt={tutor.name}
                className="w-full h-40 rounded mx-auto object-contain"
              />

              <h3 className="text-xl font-semibold text-center mt-4">
                {tutor.name}
              </h3>

              <p className="text-center text-gray-500">
                {tutor.subject}
              </p>

              <p className="text-center text-indigo-600 font-semibold mt-2">
                ${tutor.hourlyFee}/hr
              </p>

              <div className="text-center mt-4">
                <Link
                  href={`/tutors/${tutor._id}`}
                  className="bg-gradient text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
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