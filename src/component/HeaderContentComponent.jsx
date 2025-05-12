import React from "react";

export const HeaderContentComponent = () => {
  return (
    <>
      <div className="w-full bg-white h-130  gap-4 flex  justify-center items-center">
        <div className=" w-82 h-120">
          <img
            className="w-82 h-120 rounded-3xl mt-2 bg-cover"
            src="https://i.pinimg.com/736x/69/ee/3a/69ee3a614610b1e43f532c1871fe9a65.jpg"
            alt=""
          />
        </div>

        <div className=" flex flex-col w-164 h-116 ">
          <div className="flex w-164 h-50 gap-4">
            <div className="">
              <img
                className="w-82 h-50 rounded-3xl bg-cover"
                src="https://i.pinimg.com/736x/2f/ca/8e/2fca8efe432a61dbee2350e4406d1f56.jpg"
                alt=""
              />
            </div>
            <div className="">
              <img
                className=" w-82 h-50 rounded-3xl  bg-cover"
                src="https://i.pinimg.com/736x/fc/7f/41/fc7f41da34089041ac243181042e6ccb.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="  mt-4">
            <img
              className="w-164 h-66 rounded-3xl bg-cover"
              src="https://i.pinimg.com/736x/32/38/15/323815f47617e17e2c169b4fc5ddd09e.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" w-82 h-116">
          <div className="">
            <img
              className="w-82  h-66 rounded-3xl bg-cover"
              src="https://i.pinimg.com/736x/4c/99/44/4c994491fd78e2b08b93bb8e3e3ab1c6.jpg"
              alt=""
            />
          </div>
          <div className=" mt-4">
            <img
              className="w-82  h-50 rounded-3xl bg-cover"
              src="https://i.pinimg.com/736x/dd/1c/ff/dd1cff06e41bbe14fd715dd01edff398.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
