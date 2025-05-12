import Image from "next/image";
import { HeaderComponent } from "../component/HeaderComponent";
import { ProfileComponent } from "../component/ProfileComponent";
import { HeaderContentComponent } from "../component/HeaderContentComponent";
import { CardComponent } from "../component/CardComponent";

export default function Home() {
  return (
    <>
      <HeaderContentComponent />
      <div className="">
        <div className=" p-10 pl-24 text-3xl  flex gap-2 font-bold ">
          {" "}
          <img src="/assets/heart.svg" alt="" />
          <span className="text-[var(--color-pink)]"> Romatic</span>{" "}
          <span className="text-[var(--color-teal)]"> Memories</span>
        </div>
        <div className=" flex gap-11 justify-center items-center flex-wrap">
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
