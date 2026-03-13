import Link from "next/link";
import Image from "next/image";

export default function  AdminNavi () {
  return (
    <header>
      <div className="bg-blue-500 text-white p-5 flex justify-between items-center">
        <Link href="/"> 
        <Image
          src="/next.svg"
          width={150}
          height={500}
          alt="picture of the next"
          alt="lawvriksh.com"          
        /></Link>

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