import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import food_full from "@/public/food_full.png";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import { useRef } from "react";

const Slide12Food = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["16vh", "0vh", "16vh"]);

  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-full relative" ref={ref}>
        <Image
          src={food_full}
          alt="food"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute w-full top-[50%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10 font-helvitica">
          <motion.div style={{ y }}>
            <span className="md:hidden">
              Feasts
              <span className="block mt-[-1.6rem]">of Flavor</span>
            </span>
            <span className="hidden md:inline">Feasts of Flavor</span>
          </motion.div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide12Food;
