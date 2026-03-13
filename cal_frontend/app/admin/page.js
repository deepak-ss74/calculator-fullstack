"use client";

import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export default function Home1() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  setTimeout(() => {
      setLiked(false);
    }, 100);
  
  // load saved likes
  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes) {
      setLikes(Number(savedLikes));
    }
  }, []);

  function handleClick() {
    let newLikes;

    if (!liked) {
      newLikes = likes + 1;
    } else {
      newLikes = likes - 1;
    }

    setLiked(!liked);
    setLikes(newLikes);
    localStorage.setItem("likes", newLikes);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <FaHeart
          color={liked ? "red" : "gray"}
          size={liked ? 30 : 24}
          style={{ transition: "0.2s" }}
        />

        <span>{likes}</span>
      </button>
    </div>
  );
}