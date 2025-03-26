import Image from "next/image";
import comingSoon from "@/public/comingSoon.png";

const UnderDevelopment = () => {
  return (
    <div className="w-full h-[calc(100vh-5rem)] min-h-[33rem] max-h-[60rem] flex justify-center items-center">
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4">
        <div className="w-[24rem] h-[2.5rem] text-[2rem] font-bold leading-[36px] bg-gradient-to-r from-[#304139] via-[#4DBDBD] to-[#FD8613] bg-clip-text text-transparent">
          This page is on its way...
        </div>
        <div className="w-[24rem] font-normal text-sm leading-[20px] ">
          We&apos;re working hard to bring you this exciting new feature! The
          content is ready, but as beginner developers, we&apos;re taking a bit
          more time to perfect the implementation
        </div>
        <div className="w-[24rem] font-normal text-sm leading-[20px]">
          <span className="font-bold">Expected launch:</span> within a week! 🚀
        </div>
        <div className="w-[24rem] font-bold text-sm leading-[20px] mb-3">
          Leave your email and we&apos;ll notify you when it&apos;s ready!
        </div>
        <div className="w-[24rem] h-[4.5rem] p-[10px] bg-white rounded-[40px] border border-[#B2B2B2] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15)] flex items-center justify-between">
          <div className="w-[4.9rem] h-[2.3rem] flex flex-col justify-between">
            <div className="text-[10px] font-semibold">Enter your name</div>
            <div className="text-sm font-medium text-gray-200">Name</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center">
        <Image
          src={comingSoon}
          alt="coming soon"
          className="w-5/6 pb-10 object-contain"
        />
      </div>
    </div>
  );
};

export default UnderDevelopment;
