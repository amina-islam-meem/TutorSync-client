"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function Banner() {
  return (
    <Swiper
      navigation
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Autoplay]}
      className="h-[500px]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="bg-[url('/img/banner1.jpg')] bg-cover bg-center h-full flex items-center justify-center text-white">
          <div className="text-center bg-black/50 p-8 rounded-lg">
            <h2 className="text-4xl font-bold">
              Find Expert Tutors Instantly
            </h2>
            <p className="mt-4">Learn from the best in every subject.</p>
            <Link
              href="/tutors"
              className="mt-6 inline-block bg-indigo-600 px-6 py-3 rounded-lg"
            >
              Browse Tutors
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
       <div  className=" bg-[url('/img/banner2.jpg')] bg-cover bg-center h-full flex items-center justify-center text-white">
          <div className="text-center bg-black/50 p-8 rounded-lg">
            <h2 className="text-4xl font-bold">
              Flexible Learning Schedule
            </h2>
            <p className="mt-4">Book sessions at your convenience.</p>
            <Link
              href="/tutors"
              className="mt-6 inline-block bg-indigo-600 px-6 py-3 rounded-lg"
            >
              Find Tutor
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="bg-[url('/img/banner3.jpg')] bg-cover bg-center h-full flex items-center justify-center text-white">
          <div className="text-center bg-black/50 p-8 rounded-lg">
            <h2 className="text-4xl font-bold">
              Boost Your Academic Success
            </h2>
            <p className="mt-4">Start learning today with TutorSync.</p>
            <Link
              href="/tutors"
              className="mt-6 inline-block bg-indigo-600 px-6 py-3 rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}