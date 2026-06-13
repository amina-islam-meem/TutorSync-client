"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center gap-4">
        
        {/* Logo*/}
        <Link href="/" className=" pl-5 text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent"> TutorSync</Link>

        {/* Middle Menu */}
        <div className="hidden md:flex justify-center items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="nav-hover"> Home</Link>

          <Link href="/tutors" className="nav-hover"> Tutors</Link>

          <Link href="/add-tutor" className="nav-hover">  Add Tutor</Link>

          <Link href="/my-tutors" className="nav-hover"> My Tutors </Link>

          <Link href="/my-booked-sessions"className="nav-hover" >My Booked Sessions</Link>
        </div>

        {/* Right side  */}
        <div className="hidden md:flex justify-end items-center gap-4 font-medium">
          <Link href="/login" className="text-gray-700 nav-hover"> Login</Link>

          <Link href="/signup" className="text-gray-700 nav-hover pr-5" > Signup</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden justify-self-end text-gray-700"
          onClick={() => setIsOpen(!isOpen)}  >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-4 py-4 gap-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}> Home</Link>

            <Link href="/tutors" onClick={() => setIsOpen(false)}> Tutors</Link>

            <Link href="/add-tutor" onClick={() => setIsOpen(false)}>Add Tutor</Link>

            <Link href="/my-tutors" onClick={() => setIsOpen(false)}> My Tutors</Link>

            <Link href="/my-booked-sessions" onClick={() => setIsOpen(false)}>  My Booked Sessions</Link>

            <div className="border-t pt-4 flex flex-col gap-3">
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>

              <Link href="/signup" onClick={() => setIsOpen(false)} > Signup</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}