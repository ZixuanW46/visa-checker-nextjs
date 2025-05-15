import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import drone_delivery_full from "@/public/drone_delivery_full.jpeg";
import drone_delivery_part from "@/public/drone_delivery_part.png";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import { useRef } from "react";

const Slide10Tech = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
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
          src={drone_delivery_full}
          alt="drone delivery"
          className="w-full h-full object-cover object-[46%_43%] md:object-[50%_50%]"
          loading="eager"
        />
        <Image
          src={drone_delivery_part}
          alt="drone delivery"
          className="w-full h-full object-cover object-[46%_43%] md:object-[50%_50%] absolute bottom-0 left-0 z-20"
          loading="eager"
        />
        <div className="absolute w-full top-[43%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10 font-helvitica">
          <motion.div style={{ y }}>
            <span className="md:hidden">
              The 2050
              <span className="block mt-[-1.6rem]">Experience</span>
            </span>
            <span className="hidden md:inline">The 2050 Experience</span>
          </motion.div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide10Tech;
