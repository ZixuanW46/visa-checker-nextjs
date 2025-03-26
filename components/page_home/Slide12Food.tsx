import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import food_full from "@/public/food_full.png";

const Slide12Food = () => {
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src={food_full}
          alt="food"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute w-full top-[50%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10">
          <span className="md:hidden">
            Feasts
            <span className="block mt-[-1.6rem]">of Flavor</span>
          </span>
          <span className="hidden md:inline">Feasts of Flavor</span>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide12Food;
