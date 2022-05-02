import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        className="cursor-pointer"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
      />
      <div className="absolute w-full top-1/2 text-center">
          <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
          <button className="px-10 py-4 shadow-md rounded-full bg-white text-purple-500 my-3 font-bold hover:shadow-lg active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner;
