import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import great_wall_full from "@/public/great_wall_full.jpg";
import great_wall_part from "@/public/great_wall_part.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Slide6History = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.43, 0.57, 1],
    ["16vh", "0vh", "0vh", "16vh"]
  );

  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-full relative" ref={ref}>
        <Image
          src={great_wall_full}
          alt="great wall"
          className="w-full h-full object-cover object-[50%_48.5%] md:object-[50%_51%]"
          loading="eager"
        />
        <Image
          src={great_wall_part}
          alt="great wall"
          className="w-full h-full object-cover object-[50%_48.5%] md:object-[50%_51%] absolute bottom-0 left-0 z-20"
          loading="eager"
        />
        <div className="absolute w-full top-[48.5%] md:top-[51%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10 font-helvitica">
          <motion.div style={{ y }}>
            <span className="md:hidden">
              History
              <span className="block mt-[-1.6rem]">Unveiled</span>
            </span>
            <span className="hidden md:inline">History Unveiled</span>
          </motion.div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide6History;
