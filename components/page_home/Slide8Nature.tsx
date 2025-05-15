import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import zhangjiajie_full from "@/public/zhangjiajie_full.jpg";
import zhangjiajie_part from "@/public/zhangjiajie_part.png";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import { useRef } from "react";

const Slide8Nature = () => {
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
          <motion.div style={{ y }}>
            <span className="md:hidden">
              Natural
              <span className="block mt-[-1.6rem]">Wonders</span>
            </span>
            <span className="hidden md:inline">Natural Wonders</span>
          </motion.div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide8Nature;
