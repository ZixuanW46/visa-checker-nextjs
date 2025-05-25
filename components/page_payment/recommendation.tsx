import Image from "next/image";
import alipay_in_use from "@/public/alipay_in_use.png";
import cash_in_use from "@/public/cash_in_use.png";
import card_in_use from "@/public/card_in_use.png";
import alipay_in_use_mobile from "@/public/alipay_in_use_mobile.png";
import cash_in_use_mobile from "@/public/cash_in_use_mobile.png";
import card_in_use_mobile from "@/public/card_in_use_mobile.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Recommendation = () => {
  return (
    <div className="w-full min-w-[20rem] max-w-[80rem] mx-auto flex flex-col justify-center lg:px-[5rem] md:px-8 px-3 mt-[4rem] md:mt-[3rem]">
      <div className="w-full flex flex-col pb-[1.5rem] text-center md:text-left">
        <p className="md:text-3xl text-2xl font-bold">Our General</p>
        <p
          className="md:text-3xl text-2xl font-bold"
          style={{
            background: "linear-gradient(90deg, #E95245 0%, #FD8613 35.35%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Recommendation
        </p>
      </div>
      <div className="w-full hidden md:flex items-center gap-[10px] p-[10px] rounded-[20px] bg-[#E6E6E6]">
        <div
          className="w-[calc(1/3*(100%-20px))] aspect-[0.86] flex-shrink-0 rounded-[20px] bg-white overflow-hidden"
          style={{
            backgroundImage: `url(${alipay_in_use.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full text-white text-sm lg:text-base font-semibold ml-[15%] mt-[70%] lg:mt-[75%] font-manrope">
            <p className="leading-[1.3]">
              Set up both
              <br />
              Alipay and
              <br />
              WeChat Pay for
              <br />
              seamless payments
              <br />
              across China.
            </p>
          </div>
        </div>
        <div
          className="w-[calc(1/3*(100%-20px))] aspect-[0.86] flex-shrink-0 rounded-[20px] bg-white overflow-hidden"
          style={{
            backgroundImage: `url(${cash_in_use.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-sm lg:text-base font-semibold mt-[70%] lg:mt-[75%] font-manrope">
            <p className="leading-[1.3] w-fit mx-auto">
              Carry a small amount of
              <br />
              cash (200-1000 RMB) for
              <br />
              emergencies,{" "}
              <span className="text-[#878787]">
                but expect
                <br />
                to rely on digital wallets for
                <br />
                most transactions.{" "}
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[calc(1/3*(100%-20px))] aspect-[0.86] flex-shrink-0 rounded-[20px] bg-white overflow-hidden"
          style={{
            backgroundImage: `url(${card_in_use.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-sm lg:text-base font-semibold mt-[76%] lg:mt-[81%] font-manrope">
            <p className="leading-[1.3] w-fit mx-auto">
              Cards should be used as a
              <br />
              backup,{" "}
              <span className="text-[#878787]">
                primarily for
                <br />
                international travel or high-
                <br />
                end venues.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100vw] min-w-[20rem] flex flex-col md:hidden bg-[#F3F3F3] -mx-3 mt-[1rem] pt-[4rem] pb-[8rem]">
        <Carousel className="w-full">
          <CarouselContent className="ml-3">
            <CarouselItem className="basis-2/3 xs:basis-1/2">
              <div
                className="w-[90%] aspect-[1] flex-shrink-0 rounded-[20px] bg-white overflow-hidden"
                style={{
                  backgroundImage: `url(${alipay_in_use_mobile.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p className="w-[90%] text-xs font-bold mt-[1rem] text-center">
                Set up both Alipay and WeChat Pay for seamless payments across
                China.
              </p>
            </CarouselItem>
            <CarouselItem className="basis-2/3 xs:basis-1/2">
              <div
                className="w-[90%] aspect-[1] flex-shrink-0 rounded-[20px] bg-white overflow-hidden"
                style={{
                  backgroundImage: `url(${cash_in_use_mobile.src})`,
                  backgroundSize: "95%",
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p className="w-[90%] max-w-[18rem] text-xs font-bold mt-[1rem] text-center">
                Carry a small amount of cash (200-1000 RMB) for emergencies,{" "}
                <span className="text-[#878787]">
                  but expect to rely on digital wallets for most transactions.
                </span>
              </p>
            </CarouselItem>
            <CarouselItem className="basis-2/3 xs:basis-1/2">
              <div
                className="w-[90%] aspect-[1] flex-shrink-0 rounded-[20px] bg-white overflow-hidden"
                style={{
                  backgroundImage: `url(${card_in_use_mobile.src})`,
                  backgroundSize: "100% 60%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p className="w-[90%] text-xs font-bold mt-[1rem] text-center">
                Cards should be used as a backup,{" "}
                <span className="text-[#878787]">
                  primarily for international travel or high-end venues.
                </span>
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-auto -bottom-[5.5rem] left-auto right-[calc(7%+4rem)] border-0 [&_svg]:size-5" />
          <CarouselNext className="absolute top-auto -bottom-[5.5rem] left-auto right-[7%] border-0 [&_svg]:size-5" />
        </Carousel>
      </div>
      <div className="text-xs md:text-sm font-normal mt-[2rem] md:mt-[1.5rem]">
        For detailed information about payment methods, including helpful tips
        and step-by-step guides on setting up Alipay and WeChat Pay, please
        refer to the section below.
      </div>
    </div>
  );
};

export default Recommendation;
