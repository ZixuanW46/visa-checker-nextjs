import Slide1Opening from "@/components/page_home/Slide_1_opening";
import Slide6History from "@/components/page_home/Slide_6_history";
import Navbar from "@/components/page_visa/Navbar";
import Slide2Goods from "@/components/page_home/Slide_2_goods";
import Slide3Media from "@/components/page_home/Slide_3_media";
import Slide4CTA from "@/components/page_home/Slide_4_CTA";
import Slide5CTA from "@/components/page_home/Slide_5_CTA";
export default function Home() {
  return (
    <main>
      <div className="w-full fixed top-0 left-0 z-[100]">
        <Navbar className="hidden md:flex" tab="home" />
      </div>
      <div className="h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth ">
        <Slide1Opening />
        <Slide2Goods />
        <Slide3Media />
        <Slide4CTA />
        <Slide5CTA />
        <Slide6History />
        <Slide1Opening />
      </div>
      <div className="w-full fixed bottom-0 left-0 z-[100]">
        <Navbar className="md:hidden block z-[100]" tab="home" />
      </div>
    </main>
  );
}
