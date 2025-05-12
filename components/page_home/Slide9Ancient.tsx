import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import forbidden_city_full from "@/public/forbidden_city_full.jpg";
import forbidden_city_part from "@/public/forbidden_city_part.png";

const Slide9Ancient = () => {
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src={forbidden_city_full}
          alt="forbidden city"
          className="w-full h-full object-cover object-[50%_27.5%] md:object-[50%_30%]"
          loading="eager"
        />
        <Image
          src={forbidden_city_part}
          alt="forbidden city"
          className="w-full h-full object-cover object-[50%_27.5%] md:object-[50%_30%] absolute bottom-0 left-0 z-20"
          loading="eager"
        />
        <div className="absolute w-full top-[27.5%] md:top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10 font-helvitica">
          <span className="md:hidden">
            Ancient
            <span className="block mt-[-1.6rem]">Echoes</span>
          </span>
          <span className="hidden md:inline">Ancient Echoes</span>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide9Ancient;
