"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import paymentHero from "@/public/payment_hero.png";
import paymentHeroMobile from "@/public/payment_hero_mobile.png";
import reddit from "@/public/reddit.png";
import facebook from "@/public/facebook.png";
import insta from "@/public/insta.png";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const paymentHeroRef = useRef<HTMLImageElement>(null);
  const [heroSize, setHeroSize] = useState(0);
  const [iconSize, setIconSize] = useState(0);
  const [imgDivHeight, setImgDivHeight] = useState(0);

  const measureHero = () => {
    if (paymentHeroRef.current) {
      const { width, height } = paymentHeroRef.current.getBoundingClientRect();
      setImgDivHeight(height);
      const smallerDimension = Math.min(width, height);
      const newIconSize = smallerDimension / 11;
      setHeroSize(smallerDimension);
      setIconSize(newIconSize);
      console.log("Rendered image size:", { smallerDimension });
      console.log("Icon size:", { newIconSize });
      console.log("Hero size:", { size: smallerDimension - newIconSize });
    }
  };

  useEffect(() => {
    // Measure on window resize
    window.addEventListener("resize", measureHero);
    return () => window.removeEventListener("resize", measureHero);
  }, []);

  useEffect(() => {
    console.log("State updated - Hero size:", heroSize);
    console.log("State updated - Icon size:", iconSize);
  }, [heroSize, iconSize]);

  return (
    <div className="w-full min-w-[20rem]">
      <div className="w-full md:hidden">
        <Image
          src={paymentHeroMobile}
          alt="payment hero"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full max-w-[80rem] mx-auto flex justify-center lg:px-[5rem] md:px-8 px-3 mt-[3rem]">
        <div className="w-[100%] md:w-[45%] md:min-w-[20rem] flex flex-col gap-5 md:pr-5">
          <div className="flex gap-1 font-bold md:text-sm text-xs">
            <p>Home</p>
            <p>/</p>
            <p>Payment</p>
          </div>
          <div className="flex flex-col gap-[0.1rem] mb-[0.8rem]">
            <div className="text-[2.5rem] ssmPlus:text-[4rem] font-bold">
              PAYMENT
            </div>
            <div className="text-2xl ssmPlus:text-4xl font-bold">IN CHINA</div>
          </div>
          <div className="flex flex-col gap-[1rem] md:text-sm text-xs font-normal leading-5 md:max-w-[25rem]">
            <p>
              Figuring out payments is probably your biggest worry when
              traveling. China has gone almost entirely cashless in the past
              decade. While the way people pay in China might be different from
              what you&apos;re used to back home, don&apos;t worry - with a bit
              of preparation, you&apos;ll have no trouble getting around.
            </p>
            <p>
              In this page, you&apos;ll find everything you need to know about
              how to pay in China.
            </p>
          </div>
          <div className="w-full flex justify-start mt-5 gap-[10%]">
            <Button className="text-xs md:text-sm rounded-full hover:bg-gray-100">
              Overview
            </Button>
            <Button className="text-xs md:text-sm rounded-full bg-logo text-black hover:bg-logo/80 hover:text-white">
              Learn the Details
            </Button>
          </div>
        </div>
        <div className="w-[55%] h-[33rem] md:flex hidden relative">
          <Image
            ref={paymentHeroRef}
            src={paymentHero}
            alt="payment hero"
            className="w-full h-full object-contain object-right"
            onLoad={measureHero}
          />
          <Image
            src={reddit}
            alt="reddit"
            className="object-contain absolute"
            style={{
              right: `${heroSize - iconSize}px`,
              bottom: `${(imgDivHeight - heroSize) / 2}px`,
              width: iconSize,
              height: iconSize,
            }}
          />
          <Image
            src={facebook}
            alt="facebook"
            className="object-contain absolute bottom-0"
            style={{
              right: `${heroSize - iconSize}px`,
              bottom: `${(imgDivHeight - heroSize) / 2 + 1.3 * iconSize}px`,
              width: iconSize,
              height: iconSize,
            }}
          />
          <Image
            src={insta}
            alt="insta"
            className="object-contain absolute bottom-0"
            style={{
              right: `${heroSize - iconSize}px`,
              bottom: `${(imgDivHeight - heroSize) / 2 + 2 * 1.3 * iconSize}px`,
              width: iconSize,
              height: iconSize,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
