"use client";
import React from "react";

import Navbar from "@/components/page_visa/Navbar";
import Slide1Opening from "@/components/page_home/Slide1Opening";
import Slide2Goods from "@/components/page_home/Slide2Goods";
import Slide3Media from "@/components/page_home/Slide3Media";
import Slide4CTA from "@/components/page_home/Slide4CTA";
import Slide5CTA from "@/components/page_home/Slide5CTA";
import Slide6History from "@/components/page_home/Slide6History";
import Slide7City from "@/components/page_home/Slide7City";
import Slide8Nature from "@/components/page_home/Slide8Nature";
import Slide9Ancient from "@/components/page_home/Slide9Ancient";
import Slide10Tech from "@/components/page_home/Slide10Tech";
import Slide11Culture from "@/components/page_home/Slide11Culture";
import Slide12Food from "@/components/page_home/Slide12Food";

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
  const transparentSlides = [5, 6, 7, 8, 9, 10, 11, 12]; // 0-based index

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    slideRefs.current[index] = el;
  };

  return (
    <main>
      <div className="w-full fixed top-0 left-0 z-[100]">
        <Navbar
          className="hidden md:flex"
          tab="home"
          transparent={
            visibleSlideIndex !== null &&
            transparentSlides.includes(visibleSlideIndex)
          }
        />
      </div>
      <div className="h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <div ref={setRef(0)}>
          <Slide1Opening />
        </div>
        <div ref={setRef(1)}>
          <Slide2Goods />
        </div>
        <div ref={setRef(2)}>
          <Slide3Media />
        </div>
        <div ref={setRef(3)}>
          <Slide4CTA />
        </div>
        <div ref={setRef(4)}>
          <Slide5CTA />
        </div>
        <div ref={setRef(5)}>
          <Slide6History />
        </div>
        <div ref={setRef(6)}>
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
      </div>
      <div className="w-full fixed bottom-0 left-0 z-[100]">
        <Navbar className="md:hidden block z-[100]" tab="home" />
      </div>
    </main>
  );
}
