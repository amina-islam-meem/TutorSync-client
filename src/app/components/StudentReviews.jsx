"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

export default function StudentReviews() {
  const reviews = [
    {
      name: "Meem",
      image: '/review/user1.jpg',
      review:
        "TutorSync helped me improve my math grades significantly. The tutors are very supportive!",
    },
    {
      name: "Pervej",
      image: '/review/user2.jpg',
      review:
        "Very flexible booking system and amazing tutors. Highly recommended!",
    },
    {
      name: "Sarim",
      image: '/review/user3.jpg',
      review:
        "Affordable pricing and excellent teaching quality. I love this platform!",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12">
        What Our <span className="text-indigo-600">Students Say</span>
      </h2>

      <div className="max-w-4xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                
                {/* Avatar */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />

                {/* Stars */}
                <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 italic mb-6">
                  "{item.review}"
                </p>

                {/* Name */}
                <h4 className="font-semibold text-indigo-600">
                  – {item.name}
                </h4>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}