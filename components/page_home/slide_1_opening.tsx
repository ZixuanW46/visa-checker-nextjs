import { SnapScrollSection } from "./snapScrollSection";
import Image from "next/image";
import illu_bucketList from "@/public/illu_bucketList.png";
import background_decoration from "@/public/background_decoration.png";
import { PT_Sans_Narrow } from "next/font/google";

const pt_sans_narrow = PT_Sans_Narrow({
  weight: ["400", "700"],
});

const Slide1Opening = () => {
  return (
    <SnapScrollSection className="flex flex-col">
      <div className="w-full h-[5rem] bg-white hidden md:block"></div>
      <div className="w-full h-full md:pt-2 md:pb-8 md:px-8">
        <div className="w-full h-full bg-logo md:rounded-[30px] relative">
          <Image
            src={background_decoration}
            alt="background_decoration"
            className="absolute top-0 left-0 w-full h-full object-contain opacity-100 "
          />
          <div className="w-full h-full flex justify-center items-center z-10 relative">
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
              <div
                className={`text-[5.3rem] font-bold text-white ${pt_sans_narrow.className}`}
              >
                CHINA...SHALL I?
              </div>
              <div className="text-2xl font-[400] text-white max-w-[500px] text-center">
                Not sure if China is for you? You might be surprised.
              </div>
            </div>
            <Image
              src={illu_bucketList}
              alt="travel bucket list"
              className="w-2/5 h-full object-contain object-right"
            />
          </div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide1Opening;
