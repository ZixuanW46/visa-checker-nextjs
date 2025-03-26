import { SnapScrollSection } from "./SnapScrollSection";
import Image from "next/image";
import drone_delivery_full from "@/public/drone_delivery_full.jpeg";
import drone_delivery_part from "@/public/drone_delivery_part.png";

const Slide10Tech = () => {
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src={drone_delivery_full}
          alt="drone delivery"
          className="w-full h-full object-cover object-[46%_43%] md:object-[50%_50%]"
        />
        <Image
          src={drone_delivery_part}
          alt="drone delivery"
          className="w-full h-full object-cover object-[46%_43%] md:object-[50%_50%] absolute bottom-0 left-0 z-20"
        />
        <div className="absolute w-full top-[43%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10">
          <span className="md:hidden">
            The 2050
            <span className="block mt-[-1.6rem]">Experience</span>
          </span>
          <span className="hidden md:inline">The 2050 Experience</span>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide10Tech;
