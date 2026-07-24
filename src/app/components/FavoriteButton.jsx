"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function FavoriteButton({ tutorId, token }) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    if (token) checkWishlist();
  }, [tutorId, token]);

  const checkWishlist = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist/check/${tutorId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setIsInWishlist(data.isInWishlist);
  };

  const handleToggleFavorite = async () => {
    if (!token) {
      toast.error("No token found");
      return;
    }

    if (isInWishlist) {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist/${tutorId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsInWishlist(false);
      toast.success("Removed from favorites");
    } else {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ tutorId }),
        }
      );

      setIsInWishlist(true);
      toast.success("Added to favorites");
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold flex-1 ${
        isInWishlist
          ? "bg-red-500 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      {isInWishlist ? (
        <>
          <FaHeart /> Remove Favorite
        </>
      ) : (
        <>
          <FaRegHeart /> Add to Favorites
        </>
      )}
    </button>
  );
}