import React from "react";

export const CardComponent = () => {
  return (
    <>
      <article className="2xl:w-75   flex flex-col gap-5 md:w-56 lg:w-70">
        <img
          className="w-[352px] h-[263px] rounded-[30px]"
          src="https://i.pinimg.com/736x/57/3e/b6/573eb677974787904ef0ac83c1af4511.jpg"
          alt=""
        />
        <div className="color-teal flex justify-between ">
          <p className="font-bold text-xl">Switzerland</p>
          <p className="text-[12px] flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.5"
              height="11.5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                stroke="#309898"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
                stroke="#309898"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Jun 26, 2025
          </p>
        </div>
        <div className="color-darkblue text-lg">
          This picture was taken in Europe. I went there last month with my
          special person. It was such a romantic date.
        </div>
        <button className="color-red ml-45 text-sm flex justify-center items-center gap-2">
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="#cb0404"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
            ></path>
          </svg>
        </button>
      </article>
    </>
  );
};
