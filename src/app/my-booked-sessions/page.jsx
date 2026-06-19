"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { CancelBookingAlert } from "@/app/components/CancelBookingAlert";

export default function MyBookedSessions() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session } = authClient.useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (!userEmail) return;

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load bookings");
        setLoading(false);
      });
  }, [userEmail]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50  min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className=" color-gradient text-3xl font-bold text-center mb-12">
          My Booked Sessions
        </h2>

        {bookings.length === 0 ? (
          <div className="text-center bg-white  p-10 rounded-xl shadow-md">
            No bookings yet.
          </div>
        ) : (
          <div className="overflow-x-auto bg-white   rounded-xl shadow-md">

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
                    className="border-b hover:bg-gray-50  transition"
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
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          booking.bookStatus === "cancelled"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {booking.bookStatus}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      {booking.bookStatus !== "cancelled" && (
                        <CancelBookingAlert
                          bookingId={booking._id}
                          tutorName={booking.tutorName}
                          onSuccess={(id) =>
                            setBookings((prev) =>
                              prev.map((b) =>
                                b._id === id
                                  ? { ...b, bookStatus: "cancelled" }
                                  : b
                              )
                            )
                          }
                        />
                      )}
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