import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function FavoritesPage() {
  const requestHeaders = await headers();

  const session = await auth.api.getSession({
    headers: requestHeaders,
  });

  if (!session?.user) {
    return redirect("/login");
  }

  const { token } = await auth.api.getToken({
    headers: requestHeaders,
  });

  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist/${session.user.id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  }
);

const data = await res.json();

const wishlist = Array.isArray(data) ? data : [];

  

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

      {wishlist.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {wishlist.map((item) => {
            const tutor = item.tutorDetails;
            if (!tutor) return null;

            return (
              <div key={item._id} className="border p-4 rounded-lg">
                <img
                  src={tutor.photoURL}
                  alt={tutor.name}
                  className="h-40 w-full object-cover mb-3"
                />
                <h2 className="text-xl font-bold">{tutor.name}</h2>
                <p>{tutor.subject}</p>
                <p>${tutor.hourlyFee}/hr</p>

                <Link
                  href={`/tutors/${tutor._id}`}
                  className="text-indigo-600 underline"
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}