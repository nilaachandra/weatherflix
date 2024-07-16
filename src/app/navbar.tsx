import Link from "next/link";
import React from "react";
import { PiFilmSlate } from "react-icons/pi";
const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <Link href={'/'} className="flex items-center font-bold gap-1">
        <PiFilmSlate size={36}/>
        <h1 className="text-xl">WeatherFlix</h1>
      </Link>
      <a href="" className="">
        ⭐ <span className="underline">on Github</span>
      </a>
    </header>
  );
};

export default Navbar;
