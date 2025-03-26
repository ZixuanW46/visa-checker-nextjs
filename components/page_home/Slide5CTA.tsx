import SnapScrollSection from "@/components/page_home/SnapScrollSection";
import Image from "next/image";
import lock from "@/public/lock.svg";

const Slide5CTA = () => {
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-[5rem] flex-shrink-0 min-h-[5rem] bg-white hidden md:block"></div>
      <div className="w-full flex-1 flex flex-col items-center justify-center md:pt-2 md:pb-8 md:px-8">
        <Image src={lock} alt="lock" className="w-[12dvw] md:w-[8dvw]" />
        <div
          className="text-[9dvw] md:text-[7dvw] font-extrabold text-center mt-[2dvh]"
          style={{
            background:
              "linear-gradient(90deg, #304139 6.41%, #4DBDBD 50.42%, #FD8613 94.44%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          See what you&apos;ll
          <br />
          unlock
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide5CTA;
