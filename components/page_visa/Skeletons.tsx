const InputPanelSkeleton = () => (
  <div className="flex-[2] space-y-4 p-6 border-2 rounded-xl overflow-hidden animate-pulse">
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
  <div className="flex-[5] border-2 rounded-xl p-6 flex gap-4 animate-pulse">
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

const VisaPageSkeleton = () => (
  <div className="flex w-full gap-4">
    <InputPanelSkeleton />
    <ContentBoxSkeleton />
  </div>
);

export { InputPanelSkeleton, ContentBoxSkeleton, VisaPageSkeleton };
