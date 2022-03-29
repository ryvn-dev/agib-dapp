import React from "react";
import Link from "next/link";
import { navLinks } from "../utils/data/navLinks";

export default function NavItems() {
  return (
    <ul className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-2 md:space-y-0 md:text-md md:font-medium md:items-center">
      {navLinks.map((link, index) => {
        return (
          <li key={index}>
            <Link href={link.path} passHref={link.is_external}>
              <a
                className="flex justify-between py-2 pr-4 pl-3 text-black uppercase bg-white bg-opacity-40 hover:backdrop-blur-md border-0 font-bold tracking-wider md:duration-1000
                              md:h-fit md:px-3 md:items-center md:border-0 md:rounded md:bg-agib-pink md:bg-opacity-40 md:hover:bg-opacity-0 md:hover:backdrop-blur-none"
              >
                <span className="hidden md:inline">
                  {link.mark ? link.mark : link.name}
                </span>
                <span className="md:hidden">{link.name}</span>
                <span
                  className={
                    "md:hidden " + (link.is_external ? "inline" : "hidden")
                  }
                >
                  {link.mark}
                </span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
