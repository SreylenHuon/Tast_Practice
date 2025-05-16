import Link from "next/link";
import React from "react";
import { ProfileComponent } from "./ProfileComponent";

export const HeaderComponent = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:w-full    lg:gap-18 2xl:gap-56 p-4 w-full bg-gray-50 
                       lg:w-12/12 2xl:w-full mx-auto "
      >
        {/* Logo Section */}
        <div className="text-center md:text-left ">
          <div className="font-bold text-3xl md:text-lg lg:text-3xl 2xl:text-4xl">
            <span className="color-darkblue">MY</span>
            <span className="color-pink">GAL</span>
            <span className="color-darkblue">LER</span>
            <span className="color-yellow">Y</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className=" color-darkblue flex flex-col md:flex-row  md:gap-5  md:text-[15px] text-center  lg:text-xl lg:gap-8  2xl:text-xl 2xl:gap-18 ">
          <Link href="#">Romantic Dates</Link>
          <Link href="#">About Author</Link>
        </div>

        {/* Profile Component */}
        <div className="mt-2 md:mt-0">
          <ProfileComponent />
        </div>
      </div>
    </>
  );
};
