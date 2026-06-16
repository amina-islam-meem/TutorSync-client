import Link from "next/link";

export const metadata = {
  title: "Tutors | TutorSync",
};

async function getTutors(search, startDate, endDate) {
  const query = new URLSearchParams();

  if (search) query.append("search", search);
  if (startDate) query.append("startDate", startDate);
  if (endDate) query.append("endDate", endDate);

  const res = await fetch(
    `http://localhost:7000/tutors?${query.toString()}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function TutorsPage(props) {
  const searchParams = await props.searchParams;

  const search = searchParams?.search || "";
  const startDate = searchParams?.startDate || "";
  const endDate = searchParams?.endDate || "";

  const tutors = await getTutors(search, startDate, endDate);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          All Tutors
        </h2>

        <form className="flex flex-wrap gap-4 justify-center mb-10">

          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search by tutor name..."
            className="border px-4 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
          />

          <input
            type="date"
            name="startDate"
            defaultValue={startDate}
            className="border px-4 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
          />

          <input
            type="date"
            name="endDate"
            defaultValue={endDate}
            className="border px-4 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Apply Filter
          </button>

        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={tutor.photoURL}
                alt={tutor.name}
                className="w-full h-40 rounded mx-auto object-contain"
              />

              <h3 className="text-xl font-semibold text-center mt-4 dark:text-white">
                {tutor.name}
              </h3>

              <p className="text-center text-gray-500 dark:text-gray-300">
                {tutor.subject}
              </p>

              <p className="text-center text-indigo-600 font-semibold mt-2">
                ${tutor.hourlyFee}/hr
              </p>

              <div className="text-center mt-4">
                <Link
                  href={`/tutors/${tutor._id}`}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
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