"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
    }
  }, []);

  async function handleLogout() {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.ok) {
      localStorage.removeItem("user");
      setLoggedIn(false);
      router.push("/login");
    }
  }

  return (
    <header>
      <div className="bg-red-500 text-white p-5 flex justify-between items-center">

        <Link href="/">
          <Image
            src="/next.svg"
            width={150}
            height={50}
            alt="picture of the next"
          />
        </Link>

        <ul className="flex gap-6 items-center">

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          {loggedIn ? (
            <>
              <li>
                <Link href="/admin">Admin</Link>
              </li>

              <li>
                <Link href="/admin/profile">Profile</Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="bg-black px-3 py-1 rounded hover:bg-gray-800"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>

              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}

        </ul>
      </div>
    </header>
  );
}