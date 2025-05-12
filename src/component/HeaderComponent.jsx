import Link from "next/link";
import React from "react";
import { ProfileComponent } from "./ProfileComponent";

export const HeaderComponent = () => {
  return (
    <>
      <div className="flex gap-62 p-2 w-full bg-gray-50 justify-center items-center">
        <div className="">
          <div className="font-bold text-3xl">
            <span className="text-[var(--color-darkblue)]">MY</span>
            <span className="text-[var(--color-pink)]">GAL</span>
            <span className="text-[var(--color-darkblue)]">LER</span>
            <span className="text-[var(--color-yellow)]">Y</span>
          </div>
        </div>

        <div className="font-medium text-[var(--color-darkblue)] flex gap-20 text-xl">
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
