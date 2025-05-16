import { RomaticCardComponent } from "@/component/RomaticCardComponent";
import React from "react";

const RomaticPage = () => {
  return (
    <>
      <div className="p-26 py-6">
        <div className="text-3xl font-bold mb-4 color-teal">
          My <span className="color-red">Dating </span>Schedule
        </div>
        <RomaticCardComponent />
      </div>
    </>
  );
};

export default RomaticPage;
