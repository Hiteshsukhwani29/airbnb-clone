import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky z-10 bg-white shadow-md grid grid-cols-3 p-5 md:px-10 items-center">
      <div className="relative flex items-center h-8">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          className="cursor-pointer"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center p-1 md:border-2 rounded-full md:shadow-xs">
        <input type="text" placeholder="Start your search" className="text-zinc-800 placeholder-zinc-800 text-sm bg-translate focus:outline-none pl-5 flex-grow" />
        <SearchIcon className="bg-red-400 text-white h-8 p-2 rounded-full cursor-pointer hidden md:inline-flex ml-2" />
      </div>
    </header>
  );
}

export default Header;
