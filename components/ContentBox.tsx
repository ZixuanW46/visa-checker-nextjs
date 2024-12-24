import React from "react";
import { VisaPolicyContainer } from "./VisaPolicyCard";

const ContentBox = () => {
  return (
    <div className="bg-gray-300 rounded-[2rem] w-full h-full flex gap-4 p-8">
      <div className="flex flex-col gap-4 w-2/5 max-w-[27rem] overflow-y-auto max-h-[calc(100vh-7rem)]">
        <VisaPolicyContainer />
      </div>
    </div>
  );
};

export default ContentBox;
