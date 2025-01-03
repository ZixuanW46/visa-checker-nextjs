import React from "react";
import Image from "next/image";
import capyLogo from "@/public/capy_logo.svg";
import NavbarTab from "./NavbarTab";
import icon_home from "@/public/icon_home.svg";
import icon_visa from "@/public/icon_visa.svg";
import icon_payment from "@/public/icon_payment.svg";
import icon_transportation from "@/public/icon_transportation.svg";
import icon_internet from "@/public/icon_internet.svg";
import NavbarUser from "./NavbarUser";
import { Inter } from "next/font/google";

interface NavbarProps {
  tab?: "home" | "visa" | "payment" | "internet" | "transportation";
  className?: string;
}

const inter = Inter({
  subsets: ["latin"],
});

const Navbar = ({ className, tab = "home" }: NavbarProps) => {
  return (
    <div
      className={`flex justify-between items-center px-3 md:px-8 h-[4rem] md:h-20 w-full flex-shrink-0 border-t md:border-t-0 border-gray-200 ${className}`}
    >
      <div className="flex gap-3 md:min-w-56 items-center">
        <Image
          src={capyLogo}
          alt="capy logo"
          width={22}
          height={22}
          className="md:w-[25px] md:h-[25px]"
        />
        <p
          className={`text-lg md:text-2xl font-extrabold pt-1 text-logo ${inter.className}`}
        >
          <span className="hidden md:inline">CAPY</span>{" "}
          <span className="font-medium text-black">China 101</span>
        </p>
      </div>
      <div className="flex md:hidden custom:flex gap-2 md:gap-3">
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
          active={tab === "home"}
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
          name="Visa"
          active={tab === "visa"}
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
          name="Payment"
          active={tab === "payment"}
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
          name="Internet"
          active={tab === "internet"}
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
          name="Transportation"
          active={tab === "transportation"}
        />
      </div>
      <NavbarUser />
    </div>
  );
};

export default Navbar;
