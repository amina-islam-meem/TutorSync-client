import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand Section */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            TutorSync
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Connecting students with the best tutors worldwide. Learn smarter.
            Grow faster.
          </p>
        </div>

        {/* Tutor Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Tutor Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tutors" className="hover:text-white transition">
                Find Tutors
              </Link>
            </li>
            <li>
              <Link href="/add-tutor" className="hover:text-white transition">
                Become a Tutor
              </Link>
            </li>
            <li>
              <Link
                href="/my-booked-sessions"
                className="hover:text-white transition"
              >
                Book a Session
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-white transition">
                Student Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tutors" className="hover:text-white transition">
                Tutors
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-white transition">
                Register
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <Mail size={16} /> support@tutorsync.com
          </p>

          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500 px-4">
        © {new Date().getFullYear()} TutorSync. All rights reserved.
      </div>
    </footer>
  );
}