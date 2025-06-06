import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import NavbarTab from "./NavbarTab";
import icon_home from "@/public/icon_home.svg";
import icon_visa from "@/public/icon_visa.svg";
import icon_payment from "@/public/icon_payment.svg";
import icon_transportation from "@/public/icon_transportation.svg";
import icon_internet from "@/public/icon_internet.svg";

const NavbarFolded = ({
  tab,
  transparent = false,
}: {
  tab: string;
  transparent: boolean;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`rounded-full w-[2rem] h-[2rem] flex items-center justify-center ${
            transparent ? "bg-gray-300/30" : "bg-gray-300"
          }`}
        >
          <svg
            className="custom:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="12"
            viewBox="0 0 15 12"
          >
            <path
              d="M1.02002 1.49951H14.02M1.02002 5.99951H14.02M1.02002
          10.4995H14.02"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
              className={` group-hover:stroke-yellow ${
                transparent ? "stroke-white" : "stroke-gray-100"
              }`}
            />
          </svg>
        </div>
      </DialogTrigger>
      <DialogContent
        className="rounded-xl !translate-y-0 md:!translate-x-0 !top-auto !bottom-[4.6rem] md:!bottom-auto md:!top-[5.5rem] md:!left-auto px-3 pt-1 pb-3 w-[92dvw] md:w-[20rem] md:!right-[2rem]"
        hideCloseButton
      >
        <DialogHeader>
          <DialogTitle className="hidden">Navigation Menu</DialogTitle>
          <div className="flex flex-col justify-between items-center">
            <NavbarTab
              icon={
                <Image
                  src={icon_home}
                  alt="home icon"
                  width={15}
                  height={15}
                  className="md:w-[20px] md:h-[20px]"
                />
              }
              name="Home"
              fullWidth
              active={tab === "home"}
              directTo="/"
            />
            <NavbarTab
              icon={
                <Image
                  src={icon_visa}
                  alt="visa icon"
                  width={15}
                  height={15}
                  className="md:w-[20px] md:h-[20px]"
                />
              }
              name="China Visa Checker"
              fullWidth
              active={tab === "visa"}
              directTo="/visa"
            />
            <NavbarTab
              icon={
                <Image
                  src={icon_payment}
                  alt="payment icon"
                  width={15}
                  height={15}
                  className="md:w-[20px] md:h-[20px]"
                />
              }
              fullWidth
              name="Payment"
              active={tab === "payment"}
              directTo="/payment"
            />
            <NavbarTab
              icon={
                <Image
                  src={icon_internet}
                  alt="internet icon"
                  width={15}
                  height={15}
                  className="md:w-[20px] md:h-[20px]"
                />
              }
              fullWidth
              name="Internet"
              active={tab === "internet"}
              directTo="/internet"
            />
            <NavbarTab
              icon={
                <Image
                  src={icon_transportation}
                  alt="transportation icon"
                  width={15}
                  height={15}
                  className="md:w-[20px] md:h-[20px]"
                />
              }
              fullWidth
              name="Transportation"
              active={tab === "transportation"}
              directTo="/transportation"
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NavbarFolded;
