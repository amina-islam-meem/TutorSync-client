import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! Page not found.
      </p>

      <Link href="/"className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition">Go Back Home</Link>
    </div>
  );
}