import React from "react";
import Link from "next/link";

const NavbarTab = ({
  icon,
  name,
  active,
  fullWidth = false,
  directTo,
  transparent = false,
}: {
  icon: React.ReactNode;
  name: string;
  active: boolean;
  fullWidth?: boolean;
  directTo: string;
  transparent?: boolean;
}) => {
  return (
    <Link href={directTo}>
      <div
        className={`flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-full cursor-pointer ${
          active ? (transparent ? "bg-gray-300/30" : "bg-gray-300") : ""
        } ${fullWidth ? "w-full" : ""}`}
      >
        {icon}
        <span
          className={`text-sm ${transparent ? "text-white" : "text-black"} ${
            active ? "font-extrabold" : "font-light"
          }`}
        >
          {name}
        </span>
      </div>
    </Link>
  );
};

export default NavbarTab;
