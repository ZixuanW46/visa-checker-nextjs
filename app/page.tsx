"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/page_visa/Navbar";
import Slide5CTA from "@/components/page_home/Slide5CTA_copy";
import Slide6History from "@/components/page_home/Slide6History";
import Slide7City from "@/components/page_home/Slide7City";
import Slide8Nature from "@/components/page_home/Slide8Nature";
import Slide9Ancient from "@/components/page_home/Slide9Ancient";
import Slide10Tech from "@/components/page_home/Slide10Tech";
import Slide11Culture from "@/components/page_home/Slide11Culture";
import Slide12Food from "@/components/page_home/Slide12Food";
import Slide13FinalCTA from "@/components/page_home/Slide13FinalCTA";
import IntroSection from "@/components/page_home/IntroSection_copy";

export default function Home() {
  const [visibleSlideIndex, setVisibleSlideIndex] = React.useState<
    number | null
  >(null);
  const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            setVisibleSlideIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all slides
    slideRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Define which slides should have transparent navbar (by their index)
  const transparentSlides = [6, 7, 8, 9, 10, 11, 12]; // 0-based index

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    slideRefs.current[index] = el;
  };

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add snap classes to html tag when landing page mounts
    document.documentElement.classList.add("snap-mandatory", "scroll-smooth");

    // Remove snap classes when landing page unmounts
    return () => {
      document.documentElement.classList.remove(
        "snap-mandatory",
        "scroll-smooth"
      );
    };
  }, []);

  return (
    <main className="" ref={ref}>
      <div className="w-full sticky top-0 left-0 z-[50]">
        <Navbar
          className="hidden md:flex"
          tab="home"
          transparent={
            visibleSlideIndex !== null &&
            transparentSlides.includes(visibleSlideIndex)
          }
        />
      </div>
      <IntroSection />

      <div ref={setRef(5)}>
        <Slide5CTA />
      </div>

      <div ref={setRef(6)}>
        <Slide6History />
      </div>
      <div ref={setRef(7)}>
        <Slide7City />
      </div>
      <div ref={setRef(8)}>
        <Slide8Nature />
      </div>
      <div ref={setRef(9)}>
        <Slide9Ancient />
      </div>
      <div ref={setRef(10)}>
        <Slide10Tech />
      </div>
      <div ref={setRef(11)}>
        <Slide11Culture />
      </div>
      <div ref={setRef(12)}>
        <Slide12Food />
      </div>

      <div ref={setRef(13)}>
        <Slide13FinalCTA />
      </div>

      <div className="w-full fixed bottom-0 left-0 z-[100]">
        <Navbar className="md:hidden block z-[100]" tab="home" />
      </div>
    </main>
  );
}
