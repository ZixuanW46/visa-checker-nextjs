"use client";

import SnapScrollSection from "./SnapScrollSection";
import Image from "next/image";
import phone_frame from "@/public/phone_frame.png";
import background_decoration from "@/public/background_decoration.png";
import { PT_Sans_Narrow } from "next/font/google";
import news_1 from "@/public/news_1.png";
import { useEffect, useRef, useState } from "react";
const pt_sans_narrow = PT_Sans_Narrow({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Slide3Media = () => {
  const phoneFrameRef = useRef<HTMLImageElement>(null);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
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

    updateFrameSize();
    window.addEventListener("resize", updateFrameSize);

    return () => window.removeEventListener("resize", updateFrameSize);
  }, []);

  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-[5rem] flex-shrink-0 min-h-[5rem] bg-white hidden md:block"></div>
      <div className="w-full flex-1 md:pt-2 md:pb-8 md:px-8">
        <div className="w-full h-full bg-logo md:rounded-[30px] relative">
          <Image
            src={background_decoration}
            alt="background_decoration"
            className="absolute top-1/2 left-0 w-full object-cover opacity-100 -translate-y-1/2"
          />
          <div className="w-full h-full hidden md:flex items-center z-10 relative p-2">
            <div className="w-[55dvw] h-full flex flex-col justify-center items-center">
              <div
                className={`text-[7.5dvw] font-bold text-white ${pt_sans_narrow.className}`}
              >
                CHINA...SHALL I?
              </div>
              <div className="text-[1.5dvw] font-[400] text-white max-w-[45dvw] text-left">
                And you&apos;ve probably heard news about China, from the
                traditional outlets, social media or through others - be it
                technology or politics.
              </div>
            </div>
            <div className="relative max-h-[75dvh] w-fit mx-auto">
              {/* Phone frame overlay - Must be first in DOM order for correct measurement */}
              <Image
                ref={phoneFrameRef}
                src={phone_frame}
                alt="Phone Frame"
                className="w-[25dvw] max-h-[75dvh] object-contain relative z-10"
              />

              {/* The screenshot that will be clipped */}
              <div
                className="absolute overflow-hidden left-[50%] translate-x-[-50%] top-0 p-[2px]"
                style={{
                  width: `${frameSize.width}px`,
                  height: `${frameSize.height}px`,
                  borderRadius: "14%",
                  zIndex: 5,
                }}
              >
                <Image
                  src={news_1}
                  alt="News"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
          <div
            className="w-full h-full md:hidden flex flex-col justify-start gap-y-5
           items-center z-10 relative pt-[23dvh]"
          >
            <div className="w-full h-[20dvh] flex flex-col justify-center items-center mb-[2dvh]">
              <div
                className={`text-[12dvw] font-bold text-white ${pt_sans_narrow.className}`}
              >
                CHINA...SHALL I?
              </div>
              <div className="text-[2.5vw] font-[400] text-white max-w-[70dvw] text-left">
                And you&apos;ve probably heard news about China, from the
                traditional outlets, social media or through others - be it
                technology or politics.
              </div>
            </div>
            <div className="relative w-fit mx-auto">
              {/* Phone frame overlay - mobile */}
              <Image
                src={phone_frame}
                alt="phone frame"
                className="relative z-10 w-[60dvw] object-contain"
              />

              {/* The screenshot that will be clipped - mobile */}
              <div
                className="absolute overflow-hidden"
                style={{
                  width: "99%", // Width relative to phone frame
                  height: "99%", // Height relative to phone frame
                  position: "absolute",
                  top: "2px", // Position relative to phone frame
                  left: "2px", // Position relative to phone frame
                  borderRadius: "15%", // Phone screen rounded corners (15% of phone frame width)
                  zIndex: 5,
                }}
              >
                <Image
                  src={news_1}
                  alt="App Screenshot"
                  className="object-contain w-full h-full"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide3Media;
