import React from "react";
import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuAlt1Icon, UserCircleIcon } from "@heroicons/react/solid";

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
      <div className="flex items-center p-1 md:border-2 rounded-full hover:shadow-sm">
        <input type="text" placeholder="Start your search" className="text-zinc-800 placeholder-zinc-800 text-sm bg-translate focus:outline-none pl-5 flex-grow" />
        <SearchIcon className="bg-red-400 text-white h-8 p-2 rounded-full cursor-pointer hidden md:inline-flex ml-2" />
      </div>
      <div className="hidden md:flex md:items-center md:justify-end">
      <div className="p-3 hover:bg-gray-50 hover:rounded-full text-sm mx-1">Become a host</div>
      <GlobeAltIcon className="h-8 p-2 hover:bg-gray-50 hover:rounded-full mx-1"/> 
      <div className="flex hover:shadow-md rounded-full py-1 px-3 md:border-2 ml-1">         
      <MenuAlt1Icon className="h-8 p-2"/>          
      <UserCircleIcon className="h-8 p-2"/>          
      </div>
      </div>
    </header>
  );
}

export default Header;
