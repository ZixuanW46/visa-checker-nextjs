import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import shanghai_full from "@/public/shanghai_full.png";
import shanghai_part from "@/public/shanghai_part.png";

const Slide7City = () => {
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src={shanghai_full}
          alt="shanghai"
          className="w-full h-full object-cover object-[50%_28%] md:object-[50%_35%]"
          loading="eager"
        />
        <Image
          src={shanghai_part}
          alt="shanghai"
          className="w-full h-full object-cover object-[50%_28%] md:object-[50%_35%] absolute bottom-0 left-0 z-20"
          loading="eager"
        />
        <div className="absolute w-full top-[28%] md:top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10 font-helvitica">
          <span className="md:hidden">
            Futuristic
            <span className="block mt-[-1.6rem]">Horizons</span>
          </span>
          <span className="hidden md:inline">Futuristic Horizons</span>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide7City;
