import React from "react";
import Link from "next/link";

import { Playfair } from "next/font/google";
import Twitter from "./icons/twitter";
import Instagram from "./icons/instagram";
import { cn } from "@/utils/cn";

export const playfair = Playfair({ subsets: ["latin"] });
const Header = () => {
  return (
    <div
      className={cn(
        playfair.className,
        "flex fixed w-full max-w-5xl z-40 top-0 justify-between px-5 py-4"
      )}
    >
      <p className="italic text-2xl font-semibold text-subOrange">Grace</p>
      <div className="flex gap-4">
        {info.map((links) => (
          <Link className="italic text-lg" key={links.label} href={links.link}>
            {links.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-3">
        <Twitter className="w-5" />
        <Instagram className="w-5" />
      </div>
    </div>
  );
};

export default Header;

const info = [
  { label: "Menu", link: "/" },
  { label: "About", link: "/" },
  { label: "Blog", link: "/" },
  { label: "Contact", link: "/" },
];
