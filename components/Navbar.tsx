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
}

const inter = Inter({
  subsets: ["latin"],
});

const Navbar = ({ tab = "home" }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center px-8 h-20 w-full flex-shrink-0">
      <div className="flex gap-3 min-w-56 items-center">
        <Image src={capyLogo} alt="capy logo" width={25} height={25} />
        <p
          className={`text-2xl font-extrabold pt-1 text-logo ${inter.className}`}
        >
          CAPY <span className="font-medium text-black">China 101</span>
        </p>
      </div>
      <div className="hidden custom:flex gap-10">
        <NavbarTab
          icon={
            <Image src={icon_home} alt="home icon" width={20} height={20} />
          }
          name="Home"
          active={tab === "home"}
        />
        <NavbarTab
          icon={
            <Image src={icon_visa} alt="visa icon" width={20} height={20} />
          }
          name="Visa"
          active={tab === "visa"}
        />
        <NavbarTab
          icon={
            <Image
              src={icon_payment}
              alt="payment icon"
              width={20}
              height={20}
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
              width={20}
              height={20}
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
              width={20}
              height={20}
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
