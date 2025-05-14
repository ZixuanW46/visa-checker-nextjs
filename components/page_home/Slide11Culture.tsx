import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import culture_full from "@/public/culture_full.png";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import { useRef } from "react";

const Slide11Culture = () => {
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
          src={culture_full}
          alt="cultural scene"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute w-full top-[50%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[15dvw] md:text-[8dvw] font-extrabold text-center text-white z-10 font-helvitica">
          <motion.div style={{ y }}>
            <span className="md:hidden">
              Cultural
              <span className="block mt-[-1.6rem]">Immersion</span>
            </span>
            <span className="hidden md:inline">Cultural Immersion</span>
          </motion.div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide11Culture;
