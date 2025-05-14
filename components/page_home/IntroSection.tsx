"use client";

import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import illu_bucketList from "@/public/illu_bucketList.png";
import background_decoration from "@/public/background_decoration.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Goods, Goods_mobile } from "./Slide2Goods";
import { Slide3MediaPhone } from "./Slide3MediaPhone";

interface IntroSectionProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

const IntroSection = ({ containerRef }: IntroSectionProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const [pageVisible, setPageVisible] = useState(1);
  const [previousPage, setPreviousPage] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (0 <= latest && latest < 1 / 12) {
      setPreviousPage(pageVisible);
      setPageVisible(1);
    } else if (1 / 12 < latest && latest < 3 / 12) {
      setPreviousPage(pageVisible);
      setPageVisible(2);
    } else if (3 / 12 < latest && latest < 5 / 12) {
      setPreviousPage(pageVisible);
      setPageVisible(3);
    } else if (5 / 12 < latest && latest < 7 / 12) {
      setPreviousPage(pageVisible);
      setPageVisible(3);
    } else if (7 / 12 < latest && latest < 9 / 12) {
      setPreviousPage(pageVisible);
      setPageVisible(3);
    } else if (9 / 12 < latest && latest < 11 / 12) {
      setPreviousPage(pageVisible);
      setPageVisible(4);
    } else if (11 / 12 < latest && latest <= 1) {
      setPreviousPage(pageVisible);
      setPageVisible(5);
    }
  });

  const easeOutTransition = {
    duration: 1,
    ease: "easeOut",
  };

  const easeInTransition = ({
    pageNumber,
    word = true,
  }: {
    pageNumber: number;
    word?: boolean;
  }) => {
    return {
      duration: 1,
      ease: "easeOut",
      delay: pageVisible === pageNumber ? (word ? 1 : 2) : 0,
    };
  };

  const getTransition = ({
    pageNumber,
    word = true,
  }: {
    pageNumber: number;
    word?: boolean;
  }) => {
    const isScrollingDown = pageVisible > previousPage;
    return isScrollingDown
      ? easeInTransition({ pageNumber, word })
      : easeOutTransition;
  };

  return (
    <div ref={targetRef} className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: pageVisible === 5 ? 0 : 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-[100dvh] fixed top-0"
      >
        <div className="w-full h-full md:px-8 md:pt-[5.5rem] md:pb-[2rem]">
          <div className="w-full h-[100dvh] md:h-[calc(100dvh-7.5rem)] bg-logo md:rounded-[30px] relative">
            <Image
              src={background_decoration}
              alt="background_decoration"
              className="absolute top-1/2 left-0 w-full object-cover opacity-100 -translate-y-1/2"
              loading="eager"
            />
            <div className="w-full h-full hidden md:flex justify-center items-center z-10 relative p-2">
              <div className="w-[55dvw] h-full flex flex-col justify-center items-center pb-[8rem]">
                <div className="text-[7.5dvw] font-bold text-white font-pt-sans-narrow">
                  CHINA...SHALL I?
                </div>
                <div className="text-[1.5dvw] font-[400] text-white w-[45dvw] text-left relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pageVisible === 1 ? 1 : 0 }}
                    transition={getTransition({ pageNumber: 1 })}
                    className="w-full absolute top-0 left-0"
                  >
                    Things related to China sounds trendy, no matter it&apos;s
                    RedNote or travelling. But... shall I?
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pageVisible === 2 ? 1 : 0 }}
                    transition={getTransition({ pageNumber: 2 })}
                    className="w-full absolute top-0 left-0"
                  >
                    You have probably bought goods from China at some point -
                    these days they&apos;re not just made in China, but designed
                    there too.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pageVisible === 3 ? 1 : 0 }}
                    transition={getTransition({ pageNumber: 3 })}
                    className="w-full absolute top-0 left-0"
                  >
                    And you&apos;ve probably heard news about China, from the
                    traditional outlets, social media or through others - be it
                    technology or politics.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pageVisible === 4 ? 1 : 0 }}
                    transition={getTransition({ pageNumber: 4 })}
                    className="w-full absolute top-0 left-0"
                  >
                    But beyond all these, what is China really like?
                    <br />
                    You&apos;ve seen made in China, now it&apos;s time to see
                    China for yourself.
                  </motion.div>
                </div>
              </div>
              <div className="w-[45dvw] h-fit relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pageVisible === 1 ? 1 : 0 }}
                  transition={getTransition({ pageNumber: 1, word: false })}
                  className="w-full h-fit pl-[3rem] absolute top-1/2 -translate-y-1/2 left-0"
                >
                  <Image
                    src={illu_bucketList}
                    alt="travel bucket list"
                    className="w-[35dvw] max-h-[75dvh] object-contain object-center pt-[5%]"
                    loading="eager"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pageVisible === 2 ? 1 : 0 }}
                  transition={getTransition({ pageNumber: 2, word: false })}
                  className="w-full h-fit absolute top-1/2 -translate-y-1/2 left-0"
                >
                  <div className="w-[40dvw] h-[85dvh]">
                    <Goods />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pageVisible === 3 ? 1 : 0 }}
                  transition={getTransition({ pageNumber: 3, word: false })}
                  className="w-full h-fit absolute top-1/2 -translate-y-1/2 left-0"
                >
                  <Slide3MediaPhone scrollYProgress={scrollYProgress} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pageVisible === 4 ? 1 : 0 }}
                  transition={getTransition({ pageNumber: 4, word: false })}
                  className="w-full h-fit pl-[3rem] absolute top-1/2 -translate-y-1/2 left-0"
                >
                  <Image
                    src={illu_bucketList}
                    alt="travel bucket list"
                    className="w-[35dvw] max-h-[75dvh] object-contain object-center pt-[5%]"
                    loading="eager"
                  />
                </motion.div>
              </div>
            </div>
            <div
              className="w-full h-full md:hidden flex flex-col justify-start gap-y-5
           items-center z-10 relative pt-[17dvh]"
            >
              <div className="w-full h-[20dvh] flex flex-col justify-start items-center mb-[2dvh]">
                <div className="text-[12dvw] font-bold text-white font-pt-sans-narrow">
                  CHINA...SHALL I?
                </div>
                <div className="text-[3.3vw] font-[400] text-white max-w-[70dvw] text-center relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pageVisible === 1 ? 1 : 0 }}
                    transition={getTransition({ pageNumber: 1 })}
                    className="absolute top-0 w-[70dvw] left-1/2 -translate-x-1/2"
                  >
                    From RedNote to DeepSeek, China&apos;s part of today&apos;s
                    trends. But when it comes to visiting... shall I?
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pageVisible === 2 ? 1 : 0 }}
                    transition={getTransition({ pageNumber: 2 })}
                    className="absolute top-0 w-[70dvw] left-1/2 -translate-x-1/2"
                  >
                    You have probably bought goods from China at some point -
                    these days they&apos;re not just made in China, but designed
                    there too.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pageVisible === 3 ? 1 : 0 }}
                    transition={getTransition({ pageNumber: 3 })}
                    className="absolute top-0 w-[70dvw] left-1/2 -translate-x-1/2"
                  >
                    And you&apos;ve probably heard news about China, from the
                    traditional outlets, social media or through others - be it
                    technology or politics.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pageVisible === 4 ? 1 : 0 }}
                    transition={getTransition({ pageNumber: 4 })}
                    className="absolute top-0 w-[70dvw] left-1/2 -translate-x-1/2"
                  >
                    But beyond all these, what is China really like?
                    <br />
                    You&apos;ve seen made in China, now it&apos;s time to see
                    China for yourself.
                  </motion.div>
                </div>
              </div>
              <div className="w-full h-fit relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pageVisible === 1 ? 1 : 0 }}
                  transition={getTransition({ pageNumber: 1, word: false })}
                  className="w-fit h-fit absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <Image
                    src={illu_bucketList}
                    alt="travel bucket list"
                    className="max-w-[70dvw] max-h-[40dvh] object-contain "
                    loading="eager"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pageVisible === 2 ? 1 : 0 }}
                  transition={getTransition({ pageNumber: 2, word: false })}
                  className="w-fit h-fit absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <div className="w-[70dvw] h-[40dvh]">
                    <Goods_mobile />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pageVisible === 3 ? 1 : 0 }}
                  transition={getTransition({ pageNumber: 3, word: false })}
                  className="w-fit h-fit absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <Slide3MediaPhone scrollYProgress={scrollYProgress} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pageVisible === 4 ? 1 : 0 }}
                  transition={getTransition({ pageNumber: 4, word: false })}
                  className="w-fit h-fit absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <Image
                    src={illu_bucketList}
                    alt="travel bucket list"
                    className="max-w-[70dvw] max-h-[40dvh] object-contain "
                    loading="eager"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <SnapScrollSection></SnapScrollSection>
      <SnapScrollSection></SnapScrollSection>
      <SnapScrollSection></SnapScrollSection>
      <SnapScrollSection></SnapScrollSection>
      <SnapScrollSection></SnapScrollSection>
      <SnapScrollSection></SnapScrollSection>
    </div>
  );
};

export default IntroSection;
