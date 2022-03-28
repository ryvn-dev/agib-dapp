import React from "react";
import NavItems from "./NavItems";
import Image from "next/image";
import agibLogo from "../utils/image/agib_logo.png";

export default function NavBar() {
  const [Menu, setMenu] = React.useState(false);
  const toggleMenuClass = Menu ? "" : " hidden";

  return (
    <nav className="p-7 absolute top-0 left-0 w-full">
      <div className="container flex justify-between items-center mx-auto">
        <div className="w-[10%] order-1">
          <Image
            className=""
            src={agibLogo}
            alt="Picture of the author"
            width={199}
            height={81}
            layout="responsive"
          />
        </div>
        <div className="flex order-2">
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMenu(!Menu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            "justify-between items-center w-full md:flex md:w-auto order-3" +
            toggleMenuClass
          }
        >
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
