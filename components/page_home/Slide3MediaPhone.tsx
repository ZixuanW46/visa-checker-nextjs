"use client";

import Image from "next/image";
import phone_frame from "@/public/phone_frame.png";
import news from "@/public/news.png";
import { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

interface Slide3MediaPhoneProps {
  scrollYProgress: MotionValue<number>;
}

const Slide3MediaPhone = ({ scrollYProgress }: Slide3MediaPhoneProps) => {
  const phoneFrameRef = useRef<HTMLImageElement>(null);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Transform scroll progress to x position
  const x = useTransform(
    scrollYProgress,
    [0.45, 0.65, 0.85], // input range
    [0, -frameSize.width * 1.036, -frameSize.width * 1.036 * 2] // output range
  );

  const updateFrameSize = () => {
    if (phoneFrameRef.current) {
      const img = phoneFrameRef.current;
      const containerWidth = img.clientWidth;
      const containerHeight = img.clientHeight;
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;

      // Calculate the actual displayed dimensions
      const aspectRatio = naturalWidth / naturalHeight;
      let width, height;

      if (containerHeight * aspectRatio > containerWidth) {
        // Height constrained
        width = containerWidth;
        height = containerWidth / aspectRatio;
      } else {
        // Width constrained
        height = containerHeight;
        width = containerHeight * aspectRatio;
      }

      setFrameSize({
        width,
        height,
      });
    }
  };

  useEffect(() => {
    if (imageLoaded) {
      updateFrameSize();
    }

    window.addEventListener("resize", updateFrameSize);
    return () => window.removeEventListener("resize", updateFrameSize);
  }, [imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative md:max-h-[75dvh] w-fit mx-auto">
      {/* Phone frame overlay - Must be first in DOM order for correct measurement */}
      <Image
        ref={phoneFrameRef}
        src={phone_frame}
        alt="Phone Frame"
        className="w-[60dvw] md:w-[25dvw] md:max-h-[75dvh] object-contain relative z-10"
        onLoad={handleImageLoad}
        loading="eager"
      />

      {/* The screenshot that will be clipped */}
      <div
        className="absolute w-full h-full flex justify-start overflow-hidden left-[50%] translate-x-[-49.8%] top-[1px] p-[2px] "
        style={{
          width: `${frameSize.width * 0.981}px`,
          height: `${frameSize.height * 0.994}px`,
          borderRadius: "12.9%",
          zIndex: 5,
        }}
      >
        <motion.div className="w-[314.5%] h-full flex-shrink-0" style={{ x }}>
          <Image
            src={news}
            alt="News"
            className="object-cover w-full h-full"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  );
};

export { Slide3MediaPhone };
