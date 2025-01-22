import React, { Suspense } from "react";
import InputPanel from "@/components/page_visa/InputPanel";
import ContentBox from "@/components/page_visa/ContentBox";
import { VisaPageSkeleton } from "@/components/page_visa/Skeletons";

import UserInstructionAlert from "@/components/page_visa/UserInstructionAlert";

const Page = () => {
  return (
    <>
      <UserInstructionAlert />
      <div className="flex flex-1 md:px-8 md:pb-5 w-full md:max-h-[min(1000px,calc(100vh-5rem))] gap-6 relative">
        <Suspense fallback={<VisaPageSkeleton />}>
          <div className="hidden custom:block flex-grow-[2] flex-shrink-[3] max-w-[270px]">
            <InputPanel foldable={false} />
          </div>

          <ContentBox />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
