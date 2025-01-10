import React, { Suspense } from "react";
import InputPanel from "@/components/page_visa/InputPanel";
import ContentBox from "@/components/page_visa/ContentBox";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import ModifyInputButton from "@/components/page_visa/ModifyInputButton";
import UserInstructionAlert from "@/components/page_visa/UserInstructionAlert";

const Page = () => {
  return (
    <>
      <UserInstructionAlert />
      <div className="flex flex-1 md:px-8 md:pb-5 w-full md:max-h-[min(1000px,calc(100vh-5rem))] gap-4 relative">
        <div className="hidden custom:block flex-grow-[2] flex-shrink-[3] max-w-[270px]">
          <Suspense fallback={<InputPanelSkeleton />}>
            <InputPanel foldable={false} />
          </Suspense>
        </div>

        <div className="custom:hidden md:absolute md:block hidden right-[3.6rem] top-[2.3rem] z-10">
          <Sheet modal={false}>
            <SheetTrigger asChild>
              <ModifyInputButton />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="p-0 bg-white h-full sm:max-w-[450px]"
            >
              <SheetTitle className="sr-only">Input Panel</SheetTitle>
              <Suspense fallback={<InputPanelSkeleton />}>
                <InputPanel foldable={true} />
              </Suspense>
            </SheetContent>
          </Sheet>
        </div>

        <Suspense fallback={<ContentBoxSkeleton />}>
          <ContentBox />
        </Suspense>
      </div>
    </>
  );
};

export default Page;

const InputPanelSkeleton = () => (
  <div className="w-[400px] space-y-4 p-6 border-2 rounded-xl overflow-hidden animate-pulse">
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[60px] bg-gray-300 rounded-xl"></div>
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[120px] bg-gray-300 rounded-xl"></div>
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[60px] bg-gray-300 rounded-xl"></div>
    <div className="h-10 bg-gray-300 rounded-xl w-full mt-6"></div>
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[60px] bg-gray-300 rounded-xl"></div>
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[120px] bg-gray-300 rounded-xl"></div>
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[60px] bg-gray-300 rounded-xl"></div>
    <div className="h-10 bg-gray-300 rounded-xl w-full mt-6"></div>
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[60px] bg-gray-300 rounded-xl"></div>
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[120px] bg-gray-300 rounded-xl"></div>
    <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
    <div className="h-[60px] bg-gray-300 rounded-xl"></div>
    <div className="h-10 bg-gray-300 rounded-xl w-full mt-6"></div>
  </div>
);

const ContentBoxSkeleton = () => (
  <div className="flex-1 border-2 rounded-xl p-6 flex gap-4 animate-pulse">
    <div className="h-1/2  rounded-xl w-2/5 mb-4 overflow-hidden flex flex-col gap-4">
      <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
      <div className="h-[60px] bg-gray-300 rounded-xl"></div>
      <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
      <div className="h-[120px] bg-gray-300 rounded-xl"></div>
      <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
      <div className="h-[60px] bg-gray-300 rounded-xl"></div>
    </div>
    <div className="flex-1 h-full flex flex-col gap-4">
      <div className="h-2/3 bg-gray-300 rounded-xl w-full"></div>
      <div className="h-1/3 rounded-xl w-full flex gap-4">
        <div className="h-full rounded-xl w-1/2 flex flex-col gap-4 overflow-hidden">
          <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
          <div className="h-[60px] bg-gray-300 rounded-xl"></div>
          <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
          <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
          <div className="h-[60px] bg-gray-300 rounded-xl"></div>
          <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
        </div>
        <div className="h-full rounded-xl w-1/2 flex flex-col gap-4 overflow-hidden">
          <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
          <div className="h-[60px] bg-gray-300 rounded-xl"></div>
          <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
          <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
          <div className="h-[60px] bg-gray-300 rounded-xl"></div>
          <div className="h-[20px] bg-gray-300 rounded-xl w-[50%]"></div>
        </div>
      </div>
    </div>
  </div>
);
