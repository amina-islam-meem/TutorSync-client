"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function AddTutorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const tutor = Object.fromEntries(formData.entries());
    tutor.userId = userId;

    try {
      const res = await fetch("http://localhost:7000/tutors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tutor),
      });

      if (!res.ok) {
        toast.error("Failed to add tutor ");
        setLoading(false);
        return;
      }

      toast.success("Tutor added successfully ");
      e.target.reset();
      router.push("/tutors");

    } catch (error) {
      toast.error("Something went wrong ");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 bg-gray-50  min-h-screen">
      <div className="max-w-4xl mx-auto bg-white  p-10 rounded-2xl shadow-md">
        <h2 className=" color-gradient text-3xl font-bold text-center mb-8">
          Add Tutor
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          {/* Tutor Name */}
          <div>
            <label className="block mb-2 font-medium">Tutor Name</label>
            <input type="text" name="name" required className="input-style" />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-2 font-medium">Photo URL</label>
            <input type="text" name="photoURL" required className="input-style" />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 font-medium">Subject</label>
            <select name="subject" required className="input-style">
              <option value="">Select Subject</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>
              <option>ICT</option>
            </select>
          </div>

          {/* Teaching Mode */}
          <div>
            <label className="block mb-2 font-medium">Teaching Mode</label>
            <select name="teachingMode" required className="input-style">
              <option value="">Select Mode</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Both</option>
            </select>
          </div>

          {/* Available Days */}
          <div>
            <label className="block mb-2 font-medium">Available Days</label>
            <input type="text" name="availableDays" required className="input-style"placeholder="Sun-Fri" />
          </div>

          {/* Time Slot */}
          <div>
            <label className="block mb-2 font-medium">Time Slot</label>
            <input type="text" name="timeSlot" required className="input-style" placeholder="4:00 PM - 6:00 PM"/>
          </div>

          {/* Hourly Fee */}
          <div>
            <label className="block mb-2 font-medium">Hourly Fee</label>
            <input type="number" name="hourlyFee" required className="input-style" placeholder="40" />
          </div>

          {/* Total Slot */}
          <div>
            <label className="block mb-2 font-medium">Total Slot</label>
            <input type="number" name="totalSlot" required className="input-style" placeholder="3"/>
          </div>

          {/* Start Date */}
          <div>
            <label className="block mb-2 font-medium">Start Date</label>
            <input type="date" name="startDate" required className="input-style" />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">Location</label>
            <input type="text" name="location" required className="input-style" placeholder="Cumilla"/>
          </div>

          {/* Experience */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Institution & Experience</label>
            <textarea name="experience" rows="3" required className="input-style" placeholder="Institution name"></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}