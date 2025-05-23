import React from "react";

export const ProfileComponent = () => {
  return (
    <>
      <div className="flex gap-5 bg-gray-100 rounded-[10px]  w-full p-2 ">
        <div className="w-[50px]  h-[50px] ">
          <img
            className="rounded-full   "
            src="https://i.pinimg.com/736x/d1/d2/62/d1d26223924b568b296a32a529b37b36.jpg"
            alt="profile img"
          />
        </div>
        <span className="flex flex-col color-teal ">
          <p className="color-teal font-bold text-lg md:text-sm md:font-medium lg:font-semibold 2xl:font-bold">
            Monter
          </p>
          <p className="color-darkblue text-sm md:text-[12px] lg:text-[13px] 2xl:text-sm ">
            Either being happy or sad you decide.
          </p>
        </span>
      </div>
    </>
  );
};
