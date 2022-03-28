import React from "react";
import Link from "next/link";
import { navLinks } from "../utils/data/navLinks";

export default function NavItems() {
  return (
    <ul className="flex flex-col pt-[2px] md:flex-row md:space-x-2 md:text-md md:font-medium md:items-center">
      {navLinks.map((link, index) => {
        return (
          <li key={index}>
            <Link href={link.path} passHref={link.is_external}>
              <a
                className="flex py-2 pr-4 pl-3 text-black uppercase border-0 hover:bg-gray-50 font-bold tracking-wider
                              md:h-fit md:px-3 md:items-center md:border-0 md:rounded md:bg-agib-pink md:bg-opacity-40 md:hover:bg-opacity-0 md:duration-1000"
              >
                {link.name}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
