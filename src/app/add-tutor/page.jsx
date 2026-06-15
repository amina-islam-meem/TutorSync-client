"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddTutorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const tutorData = Object.fromEntries(formData.entries());

    // ✅ Add user info manually (replace later with real auth)
    const tutor = {
      ...tutorData,
      userEmail: "demo@gmail.com", // replace with logged user
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:7000/tutors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tutor),
      });

      if (!res.ok) {
        toast.error("Failed to add tutor ❌");
        setLoading(false);
        return;
      }

      toast.success("Tutor added successfully ✅");
      router.push("/tutors");
    } catch (error) {
      toast.error("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">
          Add Tutor
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          {/* Tutor Name */}
          <div>
            <label className="block mb-2 font-medium">
              Tutor Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="input-style"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-2 font-medium">
              Photo URL (imgbb)
            </label>
            <input
              type="text"
              name="photoURL"
              required
              placeholder="Paste image link"
              className="input-style"
            />
          </div>

          {/* Subject Dropdown */}
          <div>
            <label className="block mb-2 font-medium">
              Subject / Category
            </label>
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
            <label className="block mb-2 font-medium">
              Teaching Mode
            </label>
            <select name="teachingMode" required className="input-style">
              <option value="">Select Mode</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Both</option>
            </select>
          </div>

          {/* Available Days */}
          <div>
            <label className="block mb-2 font-medium">
              Available Days
            </label>
            <input
              type="text"
              name="availableDays"
              placeholder="Sun - Thu"
              required
              className="input-style"
            />
          </div>

          {/* Available Time Slot */}
          <div>
            <label className="block mb-2 font-medium">
              Available Time Slot
            </label>
            <input
              type="text"
              name="timeSlot"
              placeholder="5:00 PM - 8:00 PM"
              required
              className="input-style"
            />
          </div>

          {/* Hourly Fee */}
          <div>
            <label className="block mb-2 font-medium">
              Hourly Fee ($)
            </label>
            <input
              type="number"
              name="hourlyFee"
              required
              className="input-style"
            />
          </div>

          {/* Total Slot */}
          <div>
            <label className="block mb-2 font-medium">
              Total Slots
            </label>
            <input
              type="number"
              name="totalSlot"
              required
              className="input-style"
            />
          </div>

          {/* Session Start Date */}
          <div>
            <label className="block mb-2 font-medium">
              Session Start Date
            </label>
            <input
              type="date"
              name="startDate"
              required
              className="input-style"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">
              Location (Area/City)
            </label>
            <input
              type="text"
              name="location"
              required
              className="input-style"
            />
          </div>

          {/* Institution & Experience */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Institution & Experience
            </label>
            <textarea
              name="experience"
              rows="3"
              required
              className="input-style"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}