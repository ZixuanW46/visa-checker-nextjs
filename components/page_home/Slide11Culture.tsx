import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import culture_full from "@/public/culture_full.png";

const Slide11Culture = () => {
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src={culture_full}
          alt="cultural scene"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute w-full top-[50%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10">
          <span className="md:hidden">
            Cultural
            <span className="block mt-[-1.6rem]">Immersion</span>
          </span>
          <span className="hidden md:inline">Cultural Immersion</span>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide11Culture;
