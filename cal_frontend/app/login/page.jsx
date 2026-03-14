"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // ✅ ADD THIS HERE
    localStorage.setItem("user", JSON.stringify(data.user));

    // redirect
    router.push("/");
  }

  return (

    <div className="p-0">
            <Navigation/>

      <h1 className="text-2xl mb-4">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />

        <button className="bg-blue-500 text-white p-2">
          Login
        </button>

      </form>
    </div>
  );
}