"use client";

import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import illu_bucketList from "@/public/illu_bucketList.png";
import illu_bucketList_after from "@/public/illu_bucketList_after.png";
import background_decoration from "@/public/background_decoration.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Goods, Goods_mobile } from "./Slide2Goods";
import { Slide3MediaPhone } from "./Slide3MediaPhone";

const IntroSection = () => {
  // Declare refs for each section
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  // Declare useScroll for each ref
  const { scrollYProgress: scrollYProgress0 } = useScroll({
    target: ref3,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["-0.1 start", "end start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref3,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: ref4,
    offset: ["start start", "end start"],
  });

  const opacity_0 = useTransform(scrollYProgress4, [0.6, 0.8], [1, 0]);
  const opacity_1 = useTransform(scrollYProgress1, [-0.1, 0, 1], [1, 1, 0]);

  const opacity_2 = useTransform(
    scrollYProgress2,
    [0, 0.3, 0.8, 1],
    [0, 1, 1, 0]
  );
  const opacity_2_pic = useTransform(
    scrollYProgress2,
    [0.3, 0.5, 0.8, 1],
    [0, 1, 1, 0]
  );

  const opacity_3 = useTransform(
    scrollYProgress3,
    [0, 0.2, 0.85, 1],
    [0, 1, 1, 0]
  );
  const opacity_3_pic = useTransform(
    scrollYProgress3,
    [0.2, 0.4, 0.85, 1],
    [0, 1, 1, 0]
  );

  const opacity_4 = useTransform(
    scrollYProgress4,
    [0, 0.2, 0.6, 1],
    [0, 1, 1, 0]
  );
  const opacity_4_pic = useTransform(
    scrollYProgress4,
    [0.2, 0.4, 0.6, 1],
    [0, 1, 1, 0]
  );

  return (
    <div ref={ref0} className="w-full">
      <motion.div
        initial={{ opacity: 1 }}
        style={{ opacity: opacity_0 }}
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
              <div className="w-[50dvw] h-full ml-[5dvw] flex flex-col justify-center items-center pb-[8rem]">
                <div className="text-[7.5dvw] font-bold text-white font-pt-sans-narrow">
                  CHINA...SHALL I?
                </div>
                <div className="text-[1.5dvw] font-[400] text-white w-[45dvw] text-left relative">
                  <motion.div
                    initial={{ opacity: 1 }}
                    style={{ opacity: opacity_1 }}
                    className="w-full absolute top-0 left-0"
                  >
                    Things related to China sounds trendy, no matter it&apos;s
                    RedNote or travelling. But... shall I?
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    style={{ opacity: opacity_2 }}
                    className="w-full absolute top-0 left-0"
                  >
                    You have probably bought goods from China at some point -
                    these days they&apos;re not just made in China, but designed
                    there too.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    style={{
                      opacity: opacity_3,
                    }}
                    className="w-full absolute top-0 left-0"
                  >
                    And you&apos;ve probably heard news about China, from the
                    traditional outlets, social media or through others - be it
                    technology or politics.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    style={{ opacity: opacity_4 }}
                    className="w-full absolute top-0 left-0"
                  >
                    But beyond all these, what is China really like?
                    <br />
                    You&apos;ve seen made in China, now it&apos;s time to see
                    China for yourself.
                  </motion.div>
                </div>
              </div>
              <div className="w-[40dvw] h-fit relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ opacity: opacity_1 }}
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
                  style={{ opacity: opacity_2_pic }}
                  className="w-full h-fit absolute top-1/2 -translate-y-1/2 left-0"
                >
                  <div className="w-[40dvw] h-[85dvh]">
                    <Goods />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{
                    opacity: opacity_3_pic,
                  }}
                  className="w-full h-fit absolute top-1/2 -translate-y-1/2 left-0"
                >
                  <Slide3MediaPhone scrollYProgress={scrollYProgress0} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ opacity: opacity_4_pic }}
                  className="w-full h-fit pl-[3rem] absolute top-1/2 -translate-y-1/2 left-0"
                >
                  <Image
                    src={illu_bucketList_after}
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
                    style={{ opacity: opacity_1 }}
                    className="absolute top-0 w-[70dvw] left-1/2 -translate-x-1/2"
                  >
                    From RedNote to DeepSeek, China&apos;s part of today&apos;s
                    trends. But when it comes to visiting... shall I?
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    style={{ opacity: opacity_2 }}
                    className="absolute top-0 w-[70dvw] left-1/2 -translate-x-1/2"
                  >
                    You have probably bought goods from China at some point -
                    these days they&apos;re not just made in China, but designed
                    there too.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    style={{
                      opacity: opacity_3,
                    }}
                    className="absolute top-0 w-[70dvw] left-1/2 -translate-x-1/2"
                  >
                    And you&apos;ve probably heard news about China, from the
                    traditional outlets, social media or through others - be it
                    technology or politics.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    style={{ opacity: opacity_4 }}
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
                  style={{ opacity: opacity_1 }}
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
                  style={{ opacity: opacity_2_pic }}
                  className="w-fit h-fit absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <div className="w-[70dvw] h-[40dvh]">
                    <Goods_mobile />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{
                    opacity: opacity_3_pic,
                  }}
                  className="w-[75vw] h-fit absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <Slide3MediaPhone scrollYProgress={scrollYProgress0} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ opacity: opacity_4_pic }}
                  className="w-fit h-fit absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <Image
                    src={illu_bucketList_after}
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
      <SnapScrollSection className="h-[100vh]" ref={ref1}></SnapScrollSection>
      <SnapScrollSection className="h-[200vh]" ref={ref2}></SnapScrollSection>
      <SnapScrollSection className="h-[300vh]" ref={ref3}></SnapScrollSection>
      <SnapScrollSection className="h-[300vh]" ref={ref4}></SnapScrollSection>
    </div>
  );
};

export default IntroSection;
