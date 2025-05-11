import Link from "next/link";
import React from "react";
import { ProfileComponent } from "./ProfileComponent";

export const HeaderComponent = () => {
  return (
    <>
      <div className="flex gap-60 p-2 w-full bg-gray-50 justify-center items-center">
        <div className="">
          <div className="font-bold text-[32px]">
            <span className="text-[#183B4E]">MY</span>
            <span className="text-amber-950">GAL</span>
            <span className="text-[#183B4E]">LER</span>
            <span className="text-yellow-700">Y</span>
          </div>
        </div>

        <div className="font-medium text-[#183B4E] flex gap-20 text-[20px]">
          <Link rel="stylesheet" href="#">
            Romantic Dates
          </Link>
          <Link rel="stylesheet" href="#">
            About Athor
          </Link>
        </div>
        <div className="flex ">
          <ProfileComponent />
        </div>
      </div>
    </>
  );
};
