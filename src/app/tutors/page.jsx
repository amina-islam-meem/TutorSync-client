"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function TutorsPage() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:7000/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load tutors ");
        setLoading(false);
      });
  }, []);

  
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12  bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
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