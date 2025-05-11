import React from "react";

export const ProfileComponent = () => {
  return (
    <>
      <div className="flex gap-5 bg-gray-100 rounded-[10px]  w-full p-2 ">
        <div className="w-[50px]  h-[50px] ">
          <img
            className="rounded-full width  "
            src="https://i.pinimg.com/736x/d1/d2/62/d1d26223924b568b296a32a529b37b36.jpg"
            alt="profile img"
          />
        </div>
        <span className="flex flex-col text-[12px]">
          <p className="text-[#309898] font-bold text-[16px]">Monter</p>
          <p className="text-[#183B4E] text-[14px]">
            Either being happy or sad you decide.
          </p>
        </span>
      </div>
    </>
  );
};
