import React from "react";
import InputPanel from "@/components/InputPanel";

const page = () => {
  return (
    <>
      <div className="flex flex-1 px-8 pb-5 w-full max-h-[calc(100vh-5rem)]">
        <InputPanel />
        <div className="bg-gray-200 rounded-lg w-full h-full"></div>
      </div>
    </>
  );
};

export default page;
