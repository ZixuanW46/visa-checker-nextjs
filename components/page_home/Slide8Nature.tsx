import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import zhangjiajie_full from "@/public/zhangjiajie_full.jpg";
import zhangjiajie_part from "@/public/zhangjiajie_part.png";

const Slide8Nature = () => {
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src={zhangjiajie_full}
          alt="zhangjiajie"
          className="w-full h-full object-cover object-[50%_22%] md:object-[50%_30%]"
          loading="eager"
        />
        <Image
          src={zhangjiajie_part}
          alt="zhangjiajie"
          className="w-full h-full object-cover object-[50%_22%] md:object-[50%_30%] absolute bottom-0 left-0 z-20"
          loading="eager"
        />
        <div className="absolute w-full top-[22%] md:top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10 font-helvitica">
          <span className="md:hidden">
            Natural
            <span className="block mt-[-1.6rem]">Wonders</span>
          </span>
          <span className="hidden md:inline">Natural Wonders</span>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide8Nature;
