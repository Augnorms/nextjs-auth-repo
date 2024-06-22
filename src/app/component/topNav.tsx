"use client"

import Link from "next/link"
import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Topnav() {
const router = useRouter();

function getLetter(idx:number) {
  switch (idx) {
    case 0:
      return "H";
    case 1:
      return "O";
    case 2:
      return "M";
    case 3:
      return "E";
    case 4:
      return "=";  
    case 5:
      return <img src="/home.svg" alt="home"/>  
  }
}

const Handleclick = (e: MouseEvent<HTMLDivElement>) => {
   const id = e.currentTarget.id

    if(id === "5"){
      router.push("/")
    }
};

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-8 shadow flex justify-between">

      <div className="text-xl font-bold cursor-pointer hover:scale-125">
        <span className="text-red-600 text-xl">L</span>ogo
      </div>

      <div className="flex gap-2">
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <div
              className="
                    w-10 h-10 rounded-full 
                    border shadow-md
                    flex justify-center items-center
                    cursor-pointer
                    hover:scale-125
                    "
              key={idx + 1}
              id={`${idx}`}
            onClick={Handleclick}
            >
              <h1 className="text-cyan-400 font-bold">
                {getLetter(idx)}
              </h1>
            </div>
          ))}
      </div>

      <div className="flex gap-2">
        <Link href={"/view/register"}>
          <button className="w-fit shadow-lg p-2 rounded hover:scale-125 text-[dodgerblue]">
            Register
          </button> 
        </Link>

       <Link href={"/view/login"}>
        <button className="w-fit shadow-lg p-2 rounded hover:scale-125 text-[lime]">
          Login
        </button> 
       </Link> 
      </div>

    </div>
  );
}
