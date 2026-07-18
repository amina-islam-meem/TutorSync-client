"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navClass = (path) =>
  `${pathname === path ? "nav-active" : "nav-hover"} font-medium`;

 const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50  bg-white/80 backdrop-blur-md shadow-sm border-b ">
      <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center gap-4">
        
        {/* Logo*/}
        <Link href="/" className=" pl-5 text-2xl font-extrabold color-gradient bg-clip-text text-transparent"> TutorSync</Link>

        {/* Middle Menu */}
        <div className="hidden md:flex justify-center items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className={navClass("/")}> Home</Link>

          <Link href="/tutors" className={navClass("/tutors")}> Tutors</Link>

          <Link href="/add-tutor" className={navClass("/add-tutor")}>  Add Tutor</Link>

          <Link href="/my-tutors" className={navClass("/my-tutors")}> My Tutors </Link>

          <Link href="/my-booked-sessions"className={navClass("/my-booked-sessions")} >My Booked Sessions</Link>
          <Link href="/my-favorites" className={navClass("/my-favorites")}> Favorites</Link>
        </div>

  {/* Right side */}
  <div className="hidden md:flex justify-end items-center gap-4 font-medium">

    {user ? (
      <div className="flex items-center gap-4">

        {/* Profile */}
        <div className="flex items-center gap-2">
  {user?.image ? (
    <img
      src={user.image}
      alt={user.displayName}
      className="w-8 h-8 rounded-full"
    />
  ) : (
    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
      {user?.name?.charAt(0).toUpperCase()}
    </div>
  )}

  <span className="font-medium text-gray-700">
    {user?.name}
  </span>
</div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:opacity-90 transition"
        >
          Logout
        </button>

      </div>
    ) : (
      <>
        <Link href="/login" className={`${navClass("/login")} text-gray-700`}>Login</Link>
        <Link href="/signup"className={`${navClass("/signup")} text-gray-700 pr-5`}> Signup</Link>
      </>
    )}

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
            <Link href="/my-favorites" onClick={() => setIsOpen(false)}> Favorites</Link>

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