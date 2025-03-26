import { SnapScrollSection } from "./SnapScrollSection";
import Image from "next/image";
import illu_bucketList from "@/public/illu_bucketList.png";
import background_decoration from "@/public/background_decoration.png";
import { PT_Sans_Narrow } from "next/font/google";

const pt_sans_narrow = PT_Sans_Narrow({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Slide1Opening = () => {
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-[5rem] flex-shrink-0 min-h-[5rem] bg-white hidden md:block"></div>
      <div className="w-full flex-1 md:pt-2 md:pb-8 md:px-8">
        <div className="w-full h-full bg-logo md:rounded-[30px] relative">
          <Image
            src={background_decoration}
            alt="background_decoration"
            className="absolute top-1/2 left-0 w-full object-cover opacity-100 -translate-y-1/2"
          />
          <div className="w-full h-full hidden md:flex justify-center items-center z-10 relative p-2">
            <div className="w-[55dvw] h-full flex flex-col justify-center items-center">
              <div
                className={`text-[7.5dvw] font-bold text-white ${pt_sans_narrow.className}`}
              >
                CHINA...SHALL I?
              </div>
              <div className="text-[1.5dvw] font-[400] text-white max-w-[45dvw] text-left">
                Things related to China sounds trendy, no matter it&apos;s
                RedNote or travelling. But... shall I?
              </div>
            </div>
            <Image
              src={illu_bucketList}
              alt="travel bucket list"
              className="w-2/5 max-h-[75dvh] object-contain object-right p-5 mt-[7%]"
            />
          </div>
          <div
            className="w-full h-full md:hidden flex flex-col justify-start gap-y-5
           items-center z-10 relative pt-[23dvh]"
          >
            <div className="w-full h-[20dvh] flex flex-col justify-center items-center mb-[2dvh]">
              <div
                className={`text-[12dvw] font-bold text-white ${pt_sans_narrow.className}`}
              >
                CHINA...SHALL I?
              </div>
              <div className="text-[2.5vw] font-[400] text-white max-w-[70dvw] text-left">
                From RedNote to DeepSeek, China&apos;s part of today&apos;s
                trends. But when it comes to visiting... shall I?
              </div>
            </div>
            <Image
              src={illu_bucketList}
              alt="travel bucket list"
              className="max-w-[70dvw] max-h-[40dvh] object-contain "
            />
          </div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide1Opening;
