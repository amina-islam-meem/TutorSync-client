"use client";

import { ShieldCheck, CalendarDays, DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified Tutors",
      description: "All tutors are verified professionals with proven expertise.",
      icon: <ShieldCheck size={40} />,
    },
    {
      title: "Flexible Scheduling",
      description: "Book sessions anytime that fits your schedule.",
      icon: <CalendarDays size={40} />,
    },
    {
      title: "Affordable Learning",
      description: "High-quality education at a reasonable price.",
      icon: <DollarSign size={40} />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">
        Why Choose <span className="text-indigo-600">TutorSync?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white  p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
          >
            <div className="flex justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            <h4 className="font-semibold text-xl mb-4 group-hover:text-indigo-600 transition">
              {feature.title}
            </h4>

            <p className="text-gray-600  text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}