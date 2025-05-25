"use client";

import Image from "next/image";
import comingSoon from "@/public/comingSoon.png";
import comingSoon_bg from "@/public/comingSoon_bg.png";
import comingSoon_top from "@/public/comingSoon_top.png";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { addToWaitlist } from "@/app/actions/waitlist";
import dynamic from "next/dynamic";

// Dynamically import react-confetti to avoid SSR issues
const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

const UnderDevelopment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      const result = await addToWaitlist({ name, email });
      console.log("Submitted to waitlist:", result);
      // Show confetti on success
      setShowConfetti(true);
      // Hide confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000);
      // Clear the form after successful submission
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting to waitlist:", error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100dvh-5rem)] md:min-h-[33rem] flex justify-center items-center max-w-[80rem] mx-auto">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.3}
        />
      )}
      <div className="w-full md:w-[60%] max-w-[35rem] h-full flex flex-col justify-start md:justify-center items-center gap-4">
        <div className="w-[100%] min-h-[15rem] h-[40%] md:hidden items-center justify-center relative mb-[1rem] ssmPlus:mb-[7vh]">
          <Image
            src={comingSoon_bg}
            alt="coming soon"
            className="w-full h-full object-cover object-[center_95%] absolute inset-0"
            loading="eager"
          />
          <Image
            src={comingSoon_top}
            alt="coming soon"
            className="w-full h-full py-4 object-contain absolute inset-0"
            loading="eager"
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-3 justify-start items-center px-3 md:px-0">
          <div className="w-[95%] ssmPlus:w-[24rem] text-[clamp(1.5rem,7.3dvw,2rem)] h-[2.5rem] font-bold leading-[36px] bg-gradient-to-r from-[#304139] via-[#4DBDBD] to-[#FD8613] bg-clip-text text-transparent">
            This page is on its way...
          </div>
          <div className="w-[95%] ssmPlus:w-[24rem] font-normal text-sm leading-[20px] ">
            We&apos;re working hard to bring you this exciting new feature! The
            content is ready, but as beginner developers, we&apos;re taking a
            bit more time to perfect the implementation.
          </div>
          <div className="w-[95%] ssmPlus:w-[24rem] font-normal text-sm leading-[20px]">
            <span className="font-bold">Expected launch:</span> this June! 🚀
          </div>
          <div className="w-[95%] ssmPlus:w-[24rem] font-bold text-sm leading-[20px] mb-3">
            Leave your email and we&apos;ll notify you when it&apos;s ready!
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[95%] ssmPlus:w-[24rem] h-[4.9rem] p-[10px] bg-white rounded-[40px] border border-[#B2B2B2] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15)] flex items-center justify-between"
          >
            <div className="w-full h-full flex justify-between items-center pl-[1rem]">
              <div className="w-[5.2rem] h-full flex flex-col justify-center">
                <div className="text-[10px] font-semibold">Enter your name</div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="text-xs font-medium text-gray-200 bg-transparent border-none outline-none pt-[0.3rem]"
                  required
                />
              </div>
              <div className="w-[1px] h-[60%] bg-gray-300 mr-[2px]"></div>
              <div className="w-[5.2rem] h-full flex flex-col justify-center">
                <div className="text-[10px] font-semibold">
                  Enter your email
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="text-xs font-medium text-gray-200 bg-transparent border-none outline-none pt-[0.3rem]"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="default"
                className="w-[24%] ssmPlus:w-[5.5rem] h-full rounded-full text-[0.6rem] ssmPlus:text-[0.8rem] bg-[#304139] text-white ml-[1rem]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Notify Me!"}
              </Button>
            </div>
          </form>

          <div className="w-[24rem] h-[1.5rem] pt-[1rem] font-normal text-sm leading-[20px] text-red">
            {hasError &&
              "Sorry, there seem to be some errors... Please try again later."}
          </div>
          <div className="text-gray-200 text-xs font-light w-[95%] ssmPlus:w-[24rem] hidden md:block">
            © 2025 Capy Guide All rights reserved
          </div>
        </div>
      </div>
      <div className="w-[40%] h-full md:flex items-center justify-end pr-8 hidden">
        <Image
          src={comingSoon}
          alt="coming soon"
          className="w-full pb-10 object-contain"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default UnderDevelopment;
