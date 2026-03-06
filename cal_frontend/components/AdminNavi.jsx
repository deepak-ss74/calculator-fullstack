import Link from "next/link";

export default function  AdminNavi () {
  return (
    <header>
      <div className="bg-blue-500 text-white p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My LOGO</h1>

        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};