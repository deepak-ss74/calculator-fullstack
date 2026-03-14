"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-4 w-80"
      >
        <h2 className="text-xl font-semibold text-center">Register</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
        />

        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
          Register
        </button>
      </form>
    </div>
  );
}