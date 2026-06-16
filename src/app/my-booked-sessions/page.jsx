"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function MyBookedSessions() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session } = authClient.useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:7000/bookings/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load bookings ");
        setLoading(false);
      });
  }, [userEmail]);

  const handleCancel = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:7000/bookings/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      toast.success("Booking cancelled ");

      setBookings((prev) =>
        prev.filter((booking) => booking._id !== id)
      );

    } catch {
      toast.error("Cancel failed ");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!userEmail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Please login to see your bookings.
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12 color-gradient">
          My Booked Sessions
        </h2>

        {bookings.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-xl shadow-md">
            <p className="text-gray-600 text-lg">
              You haven't booked any sessions yet.
            </p>
            <p className="text-gray-500 mt-2">
              Browse tutors and book your first session today!
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">

            <table className="min-w-full text-left border-collapse">
              <thead className="bg-blue-400 text-white">
                <tr>
                  <th className="px-6 py-3">Tutor Name</th>
                  <th className="px-6 py-3">Student Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      {booking.tutorName}
                    </td>

                    <td className="px-6 py-4">
                      {booking.studentName}
                    </td>

                    <td className="px-6 py-4">
                      {booking.studentEmail}
                    </td>

                    <td className="px-6 py-4">
                      <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        {booking.bookStatus}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleCancel(booking._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>
    </section>
  );
}