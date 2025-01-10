import React from "react";

const NavbarTab = ({
  icon,
  name,
  active,
  fullWidth = false,
}: {
  icon: React.ReactNode;
  name: string;
  active: boolean;
  fullWidth?: boolean;
}) => {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-full cursor-pointer ${
        active ? "bg-gray-300" : ""
      } ${fullWidth ? "w-full" : ""}`}
    >
      {icon}
      <span className={`text-sm  ${active ? "font-extrabold" : "font-light"}`}>
        {name}
      </span>
    </div>
  );
};

export default NavbarTab;
