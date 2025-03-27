import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import background_decoration from "@/public/background_decoration.png";
import final_cta_1 from "@/public/final_CTA_1.svg";
import final_cta_2 from "@/public/final_CTA_2.svg";
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
            loading="eager"
          />
          <div className="w-full h-full hidden md:flex justify-center items-center z-10 relative p-2 overflow-hidden">
            <div className="w-fit h-full flex flex-col justify-center items-center">
              <div
                className={`text-[9dvw] font-bold text-white ${pt_sans_narrow.className} relative`}
              >
                CHINA...SHALL I?
                <Image
                  src={final_cta_1}
                  alt="scribble"
                  className="absolute top-0 right-0 w-[50%] h-full"
                  loading="eager"
                />
                <Image
                  src={final_cta_2}
                  alt="scribble"
                  className="absolute right-[-5%] top-[75%] w-[40%] h-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <div
            className="w-full h-full md:hidden flex flex-col justify-start gap-y-5
           items-center z-10 relative pt-[28dvh] overflow-hidden"
          >
            <div className="w-fit h-fit flex flex-col justify-center items-center">
              <div
                className={`flex flex-col text-[18dvw] font-bold text-white ${pt_sans_narrow.className} relative`}
              >
                <span className="">CHINA...</span>
                <span className="block">SHALL I?</span>
                <Image
                  src={final_cta_1}
                  alt="final_cta_1"
                  className="absolute bottom-0 right-0 w-[100%] h-[50%]"
                  loading="eager"
                />
                <Image
                  src={final_cta_2}
                  alt="scribble"
                  className="absolute right-[-5%] top-[95%] w-[90%] h-[50%]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide1Opening;
