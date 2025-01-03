import React from "react";

const NavbarUser = () => {
  return (
    <div className="hidden md:flex custom:p-0 p-2 ring-1 ring-gray-300 custom:ring-0 items-center gap-4 rounded-full mx-2">
      <div className="group cursor-pointer pl-2">
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
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
            className="stroke-gray-100 group-hover:stroke-yellow"
          />
        </svg>
      </div>

      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          d="M15.02 0C6.73662 0 0.0200195 6.71528 0.0200195 14.9993C0.0200195 23.2834 6.73596 29.9987 15.02 29.9987C23.3047 29.9987 30.02 23.2834 30.02 14.9993C30.02 6.71528 23.3047 0 15.02 0ZM15.02 4.48498C17.761 4.48498 19.982 6.70671 19.982 9.44632C19.982 12.1866 17.761 14.4077 15.02 14.4077C12.2804 14.4077 10.0593 12.1866 10.0593 9.44632C10.0593 6.70671 12.2804 4.48498 15.02 4.48498ZM15.0167 26.077C12.283 26.077 9.77931 25.0815 7.84814 23.4336C7.3777 23.0324 7.10625 22.444 7.10625 21.8266C7.10625 19.0481 9.35499 16.8244 12.1341 16.8244H17.9072C20.687 16.8244 22.9272 19.0481 22.9272 21.8266C22.9272 22.4447 22.6571 23.0317 22.186 23.433C20.2555 25.0815 17.7511 26.077 15.0167 26.077Z"
          className="fill-gray-100 hover:fill-yellow"
        />
      </svg>
    </div>
  );
};

export default NavbarUser;
