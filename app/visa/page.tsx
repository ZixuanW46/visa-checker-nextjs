import React, { Suspense } from "react";
import InputPanel from "@/components/InputPanel";
import ContentBox from "@/components/ContentBox";

const Page = () => {
  return (
    <>
      <div className="flex flex-1 px-8 pb-5 w-full max-h-[calc(100vh-5rem)] gap-4">
        <Suspense fallback={<div>Loading input panel...</div>}>
          <InputPanel />
        </Suspense>
        <Suspense fallback={<div>Loading content...</div>}>
          <ContentBox />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
