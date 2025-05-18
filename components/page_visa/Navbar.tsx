import Image from "next/image";
import capyLogo from "@/public/capy_logo.svg";
import capyLogoWhite from "@/public/capy_logo_white.svg";
import NavbarTab from "./NavbarTab";
import icon_home from "@/public/icon_home.svg";
import icon_visa from "@/public/icon_visa.svg";
import icon_payment from "@/public/icon_payment.svg";
import icon_transportation from "@/public/icon_transportation.svg";
import icon_internet from "@/public/icon_internet.svg";
import NavbarFolded from "./NavbarFolded";
import { futura } from "@/app/fonts";

interface NavbarProps {
  tab?: "home" | "visa" | "payment" | "internet" | "transportation";
  className?: string;
  transparent?: boolean;
}

const Navbar = ({
  className,
  tab = "home",
  transparent = false,
}: NavbarProps) => {
  return (
    <div
      className={`flex ${
        transparent ? "bg-transparent" : "bg-white"
      } justify-between items-center px-3 md:px-8 h-[4rem] md:h-20 w-full flex-shrink-0 border-t md:border-t-0 border-gray-300 ${className}`}
    >
      <div className="flex gap-3 md:min-w-56 items-center">
        <Image
          src={transparent ? capyLogoWhite : capyLogo}
          alt="capy logo"
          width={22}
          height={22}
          className="md:w-[25px] md:h-[25px]"
        />
        <p
          className={`${
            transparent ? "text-white" : "text-logo"
          } text-lg md:text-2xl pt-1 ${futura.className}`}
        >
          <span className="font-bold hidden md:inline">CAPY</span>{" "}
          <span
            className={`${
              transparent ? "text-white" : "text-black"
            } font-medium`}
          >
            China 101
          </span>
        </p>
      </div>
      <div className="hidden custom:flex gap-2 md:gap-3">
        <NavbarTab
          icon={
            <Image
              src={icon_home}
              alt="home icon"
              width={15}
              height={15}
              className={`md:w-[20px] md:h-[20px] ${
                transparent ? "brightness-0 invert" : ""
              }`}
            />
          }
          name="Home"
          active={tab === "home"}
          directTo="/"
          transparent={transparent}
        />
        <NavbarTab
          icon={
            <Image
              src={icon_visa}
              alt="visa icon"
              width={15}
              height={15}
              className={`md:w-[20px] md:h-[20px] ${
                transparent ? "brightness-0 invert" : ""
              }`}
            />
          }
          name="Visa"
          active={tab === "visa"}
          directTo="/visa"
          transparent={transparent}
        />
        <NavbarTab
          icon={
            <Image
              src={icon_payment}
              alt="payment icon"
              width={15}
              height={15}
              className={`md:w-[20px] md:h-[20px] ${
                transparent ? "brightness-0 invert" : ""
              }`}
            />
          }
          name="Payment"
          active={tab === "payment"}
          directTo="/payment"
          transparent={transparent}
        />
        <NavbarTab
          icon={
            <Image
              src={icon_internet}
              alt="internet icon"
              width={15}
              height={15}
              className={`md:w-[20px] md:h-[20px] ${
                transparent ? "brightness-0 invert" : ""
              }`}
            />
          }
          name="Internet"
          active={tab === "internet"}
          directTo="/internet"
          transparent={transparent}
        />
        <NavbarTab
          icon={
            <Image
              src={icon_transportation}
              alt="transportation icon"
              width={15}
              height={15}
              className={`md:w-[20px] md:h-[20px] ${
                transparent ? "brightness-0 invert" : ""
              }`}
            />
          }
          name="Transportation"
          active={tab === "transportation"}
          directTo="/transportation"
          transparent={transparent}
        />
      </div>
      <div
        className={`${
          tab === "home" ? "customBig:w-56 customPlus:w-32 custom:w-12" : ""
        } flex-shrink-1`}
      >
        <div className="flex gap-2 custom:hidden">
          <div className=" rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
            <Image
              src={icon_home}
              alt="home icon"
              width={20}
              height={20}
              className={`md:w-[20px] md:h-[20px] ${
                transparent ? "brightness-0 invert" : ""
              }`}
            />
          </div>
          <NavbarFolded tab={tab} transparent={transparent} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
