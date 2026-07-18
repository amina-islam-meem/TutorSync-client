"use client";
import FavoriteButton from "./FavoriteButton";

export default function FavoritesWrapper({ tutorId, token }) {
  return <FavoriteButton tutorId={tutorId} token={token} />;
}