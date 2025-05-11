import React from "react";

export const HeaderContentComponent = () => {
  return (
    <>
      <div className="w-full bg-white h-130  flex gap-10 justify-center items-center">
        <div className=" w-[300px] h-[450px] ">
          <img
            className="h-[450px] rounded-[20px] bg-cover"
            src="https://i.pinimg.com/736x/69/ee/3a/69ee3a614610b1e43f532c1871fe9a65.jpg"
            alt=""
          />
        </div>

        <div className="w-[600px] h-[450px]  flex flex-col ">
          <div className="flex gap-10">
            <div className=" w-[300px] h-[165px]  ">
              <img
                className="w-[300px] h-[165px] rounded-[20px] bg-cover"
                src="https://i.pinimg.com/736x/bf/86/ef/bf86eff58117bbe35a2ceb3cfb946826.jpg"
                alt=""
              />
            </div>
            <div className=" w-[300px] h-[165px] rounded-[20px] ">
              <img
                className="w-[300px] h-[165px] rounded-[20px]  bg-cover"
                src="https://i.pinimg.com/736x/fc/7f/41/fc7f41da34089041ac243181042e6ccb.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" w-[600px] h-[250px] mt-8">
            <img
              className="w-[600px] h-[250px] rounded-[20px] bg-cover"
              src="https://i.pinimg.com/736x/32/38/15/323815f47617e17e2c169b4fc5ddd09e.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" w-[300px] h-[450px]">
          <div className="w-[300px] h-[250px] ">
            <img
              className="w-[300px] h-[250px] rounded-[20px] bg-cover"
              src="https://i.pinimg.com/736x/4c/99/44/4c994491fd78e2b08b93bb8e3e3ab1c6.jpg"
              alt=""
            />
          </div>
          <div className="w-[300px] h-[165px] mt-8">
            <img
              className="w-[300px] h-[165px] rounded-[20px] bg-cover"
              src="https://i.pinimg.com/736x/dd/1c/ff/dd1cff06e41bbe14fd715dd01edff398.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
