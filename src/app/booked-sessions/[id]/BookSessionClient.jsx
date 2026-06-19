"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function BookSessionClient({ tutor }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const { data: session } = authClient.useSession();
  const userEmail = session?.user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userEmail) {
      toast.error("Please login first");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);
    const booking = Object.fromEntries(formData.entries());

    booking.tutorId = tutor._id;
    booking.tutorName = tutor.name;
    booking.studentEmail = userEmail;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message );
        setLoading(false);
        return;
      }

      toast.success(data.message );
      router.push("/my-booked-sessions");

    } catch (error) {
      toast.error();
    }

    setLoading(false);
  };

  return (
    <section className="py-20 bg-gray-50  min-h-screen">
      <div className="max-w-3xl mx-auto bg-white  p-10 rounded-2xl shadow-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Book Session with {tutor.name}
        </h2>

        {/* Slot Info */}
        <p className="text-center text-indigo-600 font-semibold mb-4">
          Available Slots: {tutor.totalSlot}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Student Name */}
          <div>
            <label className="block mb-2 font-medium">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

        {/* Tutor ID */}
          <div>
            <label className="block mb-2 font-medium">
              Tutor ID
            </label>
            <input
              type="text"
              value={tutor._id}
              readOnly
              className="w-full border rounded-lg px-4 py-3 bg-gray-100"
            />
          </div>

          {/* Tutor Name */}
          <div>
            <label className="block mb-2 font-medium">
              Tutor
            </label>
            <input
              type="text"
              value={tutor.name}
              readOnly
              className="w-full border rounded-lg px-4 py-3 bg-gray-100"
            />
          </div>

          {/* Student Email */}
          <div>
            <label className="block mb-2 font-medium">
              Student Email
            </label>
            <input
              type="text"
              value={userEmail || ""}
              readOnly
              className="w-full border rounded-lg px-4 py-3 bg-gray-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || tutor.totalSlot <= 0}
            className="w-full bg-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </button>

        </form>
      </div>
    </section>
  );
}