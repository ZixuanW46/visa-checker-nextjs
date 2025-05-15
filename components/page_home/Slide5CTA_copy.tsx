import SnapScrollSection from "@/components/page_home/SnapScroll";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

const Slide5CTA = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll Progress:", latest);
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9, 1.2],
    ["0vh", "0vh", "0vh", "0vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.5, 0.85], [1, 0]);
  const background = useTransform(
    scrollYProgress,
    [0.5, 1],
    [
      "#4DBAB9",
      "linear-gradient(90deg, #304139 6.41%, #4DBDBD 50.42%, #FD8613 94.44%)",
    ]
  );

  const webkitBackgroundClip = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["text", "text"]
  );

  const backgroundClip = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["text", "text"]
  );

  const webkitTextFillColor = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["transparent", "transparent"]
  );

  return (
    <SnapScrollSection
      ref={ref}
      className="flex flex-col h-[130vh] md:h-[calc(130vh+5rem)]"
    >
      <div className="w-full h-[5rem] flex-shrink-0 min-h-[5rem] bg-white hidden md:block"></div>
      <motion.div
        style={{ y }}
        className="w-full sticky top-[30dvh] h-[65dvh] flex flex-col items-center justify-start md:pt-2 md:pb-8 md:px-8"
      >
        <motion.svg
          className="w-[12dvw] md:w-[8dvw] h-auto"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity }}
        >
          <motion.path
            style={{ pathLength }}
            d="M23.3333 33.3334V23.3334C23.3333 18.9131 25.0892 14.6739 28.2148 11.5483C31.3404 8.4227 35.5796 6.66675 39.9999 6.66675C44.4202 6.66675 48.6594 8.4227 51.785 11.5483C54.9106 14.6739 56.6666 18.9131 56.6666 23.3334V33.3334"
            stroke="#4DBAB9"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.0001 56.6667C41.841 56.6667 43.3334 55.1743 43.3334 53.3333C43.3334 51.4924 41.841 50 40.0001 50C38.1591 50 36.6667 51.4924 36.6667 53.3333C36.6667 55.1743 38.1591 56.6667 40.0001 56.6667Z"
            stroke="#4DBAB9"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M63.3333 33.3333H16.6667C12.9848 33.3333 10 36.318 10 39.9999V66.6666C10 70.3485 12.9848 73.3333 16.6667 73.3333H63.3333C67.0152 73.3333 70 70.3485 70 66.6666V39.9999C70 36.318 67.0152 33.3333 63.3333 33.3333Z"
            stroke="#4DBAB9"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        <motion.div
          className="text-[9dvw] md:text-[7dvw] font-extrabold text-center mt-[2dvh]"
          style={{
            background,
            WebkitBackgroundClip: webkitBackgroundClip,
            backgroundClip: backgroundClip,
            WebkitTextFillColor: webkitTextFillColor,
          }}
        >
          See what you&apos;ll
          <br />
          unlock
        </motion.div>
      </motion.div>
      <div className="w-full h-[90vh] bg-white"></div>
    </SnapScrollSection>
  );
};

export default Slide5CTA;
