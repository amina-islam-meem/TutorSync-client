"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function MyTutors() {
  const [tutors, setTutors] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [editingTutor, setEditingTutor] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  useEffect(() => {
    if (!userId) return;

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
      })
      .catch(() => {
        toast.error("Failed to load tutors");
        
      });
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      toast.success("Tutor deleted ");
      setTutors((prev) => prev.filter((t) => t._id !== id));
      setConfirmDelete(null);

    } catch {
      toast.error("Delete failed ");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!editingTutor) return;

    const formData = new FormData(e.target);
    const updatedTutor = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${editingTutor._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedTutor),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      toast.success("Tutor updated ");

      setTutors((prev) =>
        prev.map((t) =>
          t._id === editingTutor._id
            ? { ...t, ...updatedTutor }
            : t
        )
      );

      setEditingTutor(null);

    } catch {
      toast.error("Update failed ");
    }
  };

  

  if (!userId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Please login to view your tutors.
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="color-gradient text-3xl font-bold text-center mb-12">
          My Tutors
        </h2>

        {tutors.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow-md text-center">
            <p className="text-gray-600 text-lg">
              You haven’t added any tutors yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white  rounded-xl shadow-md">

            <table className="min-w-full text-left">
              <thead className="bg-blue-400 text-white">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Subject</th>
                  <th className="px-6 py-3">Fee</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {tutors.map((tutor) => (
                  <tr key={tutor._id} className="border-b">
                    <td className="px-6 py-4">{tutor.name}</td>
                    <td className="px-6 py-4">{tutor.subject}</td>
                    <td className="px-6 py-4">${tutor.hourlyFee}</td>
                    <td className="px-6 py-4 text-center space-x-3">

                      <button
                        onClick={() => setEditingTutor(tutor)}
                        className="bg-gradient text-white px-4 py-2 rounded-lg"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => setConfirmDelete(tutor)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

        {/* Update Modal */}
        {editingTutor && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl w-full max-w-md">

              <h3 className="color-gradient text-xl font-bold mb-4">
                Update Tutor
              </h3>

              <form onSubmit={handleUpdate} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  defaultValue={editingTutor.name}
                  className="input-style"
                />

                <input
                  type="text"
                  name="subject"
                  defaultValue={editingTutor.subject}
                  className="input-style"
                />

                <input
                  type="number"
                  name="hourlyFee"
                  defaultValue={editingTutor.hourlyFee}
                  className="input-style"
                />

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingTutor(null)}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                  >
                    Save
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}

        {/*  Delete Confirmation Modal */}
        {confirmDelete && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white  p-8 rounded-xl w-full max-w-sm text-center">

              <h3 className="text-lg font-semibold mb-4">
                Delete this tutor?
              </h3>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleDelete(confirmDelete._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Yes
                </button>

                <button
                  onClick={() => setConfirmDelete(null)}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  No
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}