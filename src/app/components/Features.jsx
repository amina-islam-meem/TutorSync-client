"use client";

import { BookOpen, Users, Clock, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Users size={40} />,
      title: "Expert Tutors",
      description:
        "Connect with highly qualified and verified tutors from different subjects.",
    },
    {
      icon: <Clock size={40} />,
      title: "Flexible Scheduling",
      description:
        "Book sessions according to your preferred time and availability.",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Wide Subject Coverage",
      description:
        "Mathematics, Science, English, ICT and many more subjects available.",
    },
    {
      icon: <Award size={40} />,
      title: "Quality Learning",
      description:
        "Get personalized learning experience to boost your academic success.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-indigo-600">Features</span>
        </h2>

        <p className="text-gray-600 mb-12">
          Discover what makes TutorSync the best learning platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white  p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-200"
            >
              <div className="flex justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h4 className="font-semibold text-lg mb-3 group-hover:text-indigo-600 transition">
                {feature.title}
              </h4>

              <p className="text-gray-600  text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}