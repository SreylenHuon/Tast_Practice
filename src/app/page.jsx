import Image from "next/image";
import { HeaderComponent } from "../component/HeaderComponent";
import { ProfileComponent } from "../component/ProfileComponent";
import { HeaderContentComponent } from "../component/HeaderContentComponent";
import { CardComponent } from "../component/CardComponent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeaderContentComponent />
      <div className="">
        <div className=" 2xl:p-10 2xl:pl-24 text-3xl  flex gap-2 font-bold  md:pl-6 md:p-10  lg:pl-10">
          {" "}
          <img src="/assets/heart.svg" alt="" />
          <span className="color-pink"> Romatic</span>{" "}
          <span className="color-teal"> Memories</span>
        </div>
        <div className=" 2xl:flex 2xl:gap-11 justify-center items-center 2xl:flex-wrap md:flex md:gap-5 md:flex-wrap    lg:flex lg:flex-wrap lg:gap-10">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </>
  );
}
