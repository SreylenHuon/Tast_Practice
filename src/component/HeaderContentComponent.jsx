import React from "react";

export const HeaderContentComponent = () => {
  return (
    <>
      <div className="2xl:w-full bg-white 2xl:h-130  2xl:gap-4 flex  justify-center items-center md:w-full md:h-70 md:p-6  md:flex   md:gap-2 md:mt-10 lg:w-full lg:h-102  lg:flex lg:gap-2.5 lg:p-10 ">
        <div className=" 2xl:w-82 2xl:h-120 md:w-50 md:h-70 lg:w-58 lg:h-104 lg:mt-4 ">
          <img
            className="2xl:w-82 2xl:h-120 2xl:rounded-3xl 2xl:mt-2 md:w-60 md:h-72 md:rounded-2xl lg:w-58 lg:h-102 bg-cover"
            src="https://i.pinimg.com/736x/69/ee/3a/69ee3a614610b1e43f532c1871fe9a65.jpg"
            alt=""
          />
        </div>

        <div className=" flex flex-col 2xl:w-164 2xl:h-116 2xl:mt-3 md:w-90 md:h-70 lg:w-118 lg:h-100 ">
          <div className="flex 2xl:w-164 2xl:h-50 2xl:gap-4 md:w-90 md:h-25 md:mb-3 md:gap-2 lg:w-116 lg:h-40  ">
            <div>
              <img
                className="2xl:w-82 2xl:h-50 2xl:rounded-3xl md:rounded-2xl md:w-60 md:h-30 lg:w-58 lg:h-40 bg-cover "
                src="https://i.pinimg.com/736x/2f/ca/8e/2fca8efe432a61dbee2350e4406d1f56.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className=" 2xl:w-82 2xl:h-50 2xl:rounded-3xl md:w-60 md:h-30 md:rounded-2xl lg:w-58 lg:h-40 bg-cover"
                src="https://i.pinimg.com/736x/fc/7f/41/fc7f41da34089041ac243181042e6ccb.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="  2xl:mt-5.5  md:mt-4  ">
            <img
              className="2xl:w-164 2xl:h-66 2xl:rounded-3xl md:w-120 md:h-40 md:rounded-2xl lg:w-116 lg:h-60 lg:mt-[-18px] bg-cover "
              src="https://i.pinimg.com/736x/32/38/15/323815f47617e17e2c169b4fc5ddd09e.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" 2xl:w-82 2xl:h-116 md:w-50 md:h-70 lg:w-58 lg:h-100 ">
          <div className="">
            <img
              className="2xl:w-82 2xl:h-66 2xl:rounded-3xl md:w-60 md:h-40 md:rounded-2xl lg:w-58 lg:h-60 bg-cover"
              src="https://i.pinimg.com/736x/4c/99/44/4c994491fd78e2b08b93bb8e3e3ab1c6.jpg"
              alt=""
            />
          </div>
          <div className=" 2xl:mt-4 md:mt-2">
            <img
              className="2xl:w-82 2xl:h-50 2xl:rounded-3xl md:w-58 md:h-30 md:rounded-2xl lg:w-58 lg:h-40 lg:mt-2.5 bg-cover "
              src="https://i.pinimg.com/736x/dd/1c/ff/dd1cff06e41bbe14fd715dd01edff398.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
