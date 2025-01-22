import Slide1Opening from "@/components/page_home/slide_1_opening";
import Slide6History from "@/components/page_home/slide_6_history";
import Navbar from "@/components/page_visa/Navbar";
export default function Home() {
  return (
    <main>
      <div className="w-full fixed top-0 left-0 z-[100]">
        <Navbar className="hidden md:flex" tab="home" />
      </div>
      <div className="h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth ">
        <Slide1Opening />
        <Slide1Opening />
        <Slide1Opening />
        <Slide6History />
        <Slide1Opening />
        <Slide1Opening />
      </div>
      <div className="w-full fixed bottom-0 left-0 z-[100]">
        <Navbar className="md:hidden block z-[100]" tab="home" />
      </div>
    </main>
  );
}
