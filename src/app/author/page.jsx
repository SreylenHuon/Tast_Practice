import {
  AuthorCardComponent,
  AuthorCardOneComponent,
} from "@/component/AuthorCardOneComponent";
import { AuthorCardThreeComponent } from "@/component/AuthorCardThreeComponent";
import {
  AuthorCardsComponent,
  AuthorCardTwoComponent,
} from "@/component/AuthorCardTwoComponent";
import React from "react";

export const AuthorPage = () => {
  return (
    <>
      <div className="p-25 flex flex-col gap-10">
        <AuthorCardOneComponent />
        <AuthorCardTwoComponent />
        <AuthorCardThreeComponent />
      </div>
    </>
  );
};
export default AuthorPage;
