import React from "react";
import Link from "next/link";

import { Playfair } from "next/font/google";
import Twitter from "./icons/twitter";
import Instagram from "./icons/instagram";
import { cn } from "@/utils/cn";
import { useBooleanContext } from "@/contexts/BooleanContext";
import { motion } from "framer-motion";
export const playfair = Playfair({ subsets: ["latin"], style: "italic" });
const Header = () => {
  const { booleanState } = useBooleanContext();
  return (
    <div
      className={cn(
        playfair.className,
        "flex fixed w-full shadow-lg shadow-subOrange/15 max-w-[calc(28rem_-_1px)] md:max-w-[calc(64rem_-_1px)] z-40 top-0 justify-between px-5 py-4"
      )}
    >
      <p className="italic text-2xl font-semibold text-subOrange">Grace</p>
      <motion.div
        initial={{
          gap: "1rem",
          justifyItems: "center",
        }}
        transition={{ ease: "easeInOut" }}
        animate={{
          gap: !booleanState ? "15rem" : "1rem",
        }}
        className="hidden md:flex"
      >
        <div className="flex gap-4">
          {info.slice(0, 2).map((links) => (
            <Link
              className="italic text-lg"
              key={links.label}
              href={links.link}
            >
              {links.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          {info.slice(2, 4).map((links) => (
            <Link
              className="italic text-lg"
              key={links.label}
              href={links.link}
            >
              {links.label}
            </Link>
          ))}
        </div>
      </motion.div>
      <div className="hidden md:flex gap-3">
        <Link target="_blank" href="https://x.com/kageyuza">
          <Twitter className="w-5" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/kageyuza/">
          <Instagram className="w-5" />
        </Link>
      </div>
      <div className="hidden absolute left-1/2 -translate-x-1/2 md:flex">
        <motion.button
          initial={{ display: "none", y: 30, opacity: 0, left: "42%" }}
          animate={{
            display: booleanState ? "none" : "flex",
            y: !booleanState ? -8 : 30,
            opacity: !booleanState ? 1 : 0,
          }}
          transition={{ ease: "easeInOut" }}
          className={cn(
            playfair.className,
            "bg-subOrange border  border-subOrange px-4 py-2 rounded-md italic hover:text-subOrange hover:border-subOrange hover:bg-background text-background"
          )}
        >
          Make a Reservation
        </motion.button>
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
