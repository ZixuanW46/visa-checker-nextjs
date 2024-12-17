import React from "react";
import InputPanel from "@/components/InputPanel";
import ContentBox from "@/components/ContentBox";
const page = () => {
  return (
    <>
      <div className="flex flex-1 px-8 pb-5 w-full max-h-[calc(100vh-5rem)] gap-4">
        <InputPanel />
        <ContentBox />
      </div>
    </>
  );
};

export default page;
