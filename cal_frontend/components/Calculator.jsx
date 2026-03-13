"use client";
import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("add");
  const [res, setRes] = useState(null);

  async function submit(e) {
    e.preventDefault();

    const resp = await fetch("https://calculator-fullstack-yjlz.onrender.com/calc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        a: Number(a),
        b: Number(b),
        op: op,
      }),
    });

    const data = await resp.json();
    setRes(data.result ?? data.error);
  }

  return (
    <div className="h-[90vh] flex items-center justify-center bg-linear-to-br from-purple-500 via-blue-500 to-indigo-600 p-4">

      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 text-white space-y-5"
      >
        <h1 className="text-3xl font-bold text-center">Glass Calculator</h1>

        <input
          className="w-full bg-white/20 border border-white/30 rounded-xl p-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="First number"
        />

        <input
          className="w-full bg-white/20 border border-white/30 rounded-xl p-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Second number"
        />

        <select
          className="w-full bg-white/20 border border-white/30 rounded-xl p-3 text-white focus:outline-none"
          value={op}
          onChange={(e) => setOp(e.target.value)}
        >
          <option className="text-black" value="add">Addition (+)</option>
          <option className="text-black" value="sub">Subtraction (-)</option>
          <option className="text-black" value="mul">Multiply (*)</option>
          <option className="text-black" value="div">Divide (/)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-white/30 hover:bg-white/40 border border-white/40 py-3 rounded-xl font-semibold transition"
        >
          Calculate
        </button>

        <div className="text-center text-xl font-semibold">
          Result: {res !== null ? res : "-"}
        </div>

      </form>

    </div>
  );
}