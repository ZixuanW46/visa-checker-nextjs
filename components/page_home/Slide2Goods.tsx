import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import background_decoration from "@/public/background_decoration.png";
import good_1 from "@/public/chinese_good_1.png";
import good_2 from "@/public/chinese_good_2.png";
import good_3 from "@/public/chinese_good_3.png";
import good_4 from "@/public/chinese_good_4.png";
import good_5 from "@/public/chinese_good_5.png";
import good_6 from "@/public/chinese_good_6.png";
import { PT_Sans_Narrow } from "next/font/google";

const pt_sans_narrow = PT_Sans_Narrow({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Slide2Goods = () => {
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
                You have probably bought goods from China at some point - these
                days they&apos;re not just made in China, but designed there
                too.
              </div>
            </div>
            <div className="w-[40dvw] h-full">
              <Goods />
            </div>
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
                You have probably bought goods from China at some point - these
                days they&apos;re not just made in China, but designed there
                too.
              </div>
            </div>
            <div className="w-[70dvw] h-[40dvh]">
              <Goods_mobile />
            </div>
          </div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide2Goods;

const Goods = () => {
  return (
    <div className="w-full h-full flex gap-x-3">
      <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
        <Image
          src={good_1}
          alt="good_1"
          className="object-contain max-h-[30%] w-auto"
        />
        <Image
          src={good_2}
          alt="good_2"
          className="object-contain max-h-[20%] w-auto"
        />
        <Image
          src={good_3}
          alt="good_3"
          className="object-contain max-h-[25%]  w-auto"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
        <Image
          src={good_4}
          alt="good_4"
          className="object-contain max-h-[16%] w-auto"
        />
        <Image
          src={good_5}
          alt="good_5"
          className="object-contain max-h-[36%] w-auto"
        />
        <Image
          src={good_6}
          alt="good_6"
          className="object-contain max-h-[10%] w-auto"
        />
      </div>
    </div>
  );
};

const Goods_mobile = () => {
  return (
    <div className="w-full h-full flex gap-x-3">
      <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
        <Image
          src={good_1}
          alt="good_1"
          className="object-contain max-h-[30%] max-w-[25dvw] w-auto"
        />
        <Image
          src={good_2}
          alt="good_2"
          className="object-contain max-h-[20%] w-auto"
        />
        <Image
          src={good_3}
          alt="good_3"
          className="object-contain max-h-[25%]  w-auto"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
        <Image
          src={good_4}
          alt="good_4"
          className="object-contain max-h-[16%] w-auto"
        />
        <Image
          src={good_5}
          alt="good_5"
          className="object-contain max-h-[36%] w-auto"
        />
        <Image
          src={good_6}
          alt="good_6"
          className="object-contain max-h-[10%] w-auto"
        />
      </div>
    </div>
  );
};
