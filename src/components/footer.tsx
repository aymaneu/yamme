import { cn } from "@/utils/cn";
import React from "react";
import { playfair } from "./aboutUs";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <p
        className={cn(
          "text-center text-subOrange text-[2.5rem]",
          playfair.className
        )}
      >
        Grace
      </p>
      <p className="text-center">
        Grace is a culinary sanctuary nestled in the heart of New York, where
        <br />
        refined elegance meets unparalleled gastronomy.
      </p>
      <div className="border-t border-b border-subOrange border-dashed max-w-lg mx-auto my-10 py-10">
        <p
          className={cn(
            "text-center text-subOrange text-2xl",
            playfair.className
          )}
        >
          Pages
        </p>
        <div
          className={cn(
            "flex hover:*:text-subOrange *:cursor-pointer justify-center gap-5",
            playfair.className
          )}
        >
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="border-dashed border-subOrange border-b">
        <div className="max-w-3xl flex mx-auto pb-10 justify-around">
          <div className="px-5">
            <p className="text-subOrange">Email:</p>
            <p
              className={cn(
                "hover:text-subOrange cursor-pointer",
                playfair.className
              )}
            >
              aymanelgad65@gmail.com
            </p>
          </div>
          <div className="border-l px-5 border-dashed border-subOrange">
            <p className="text-subOrange">Phone:</p>
            <p
              className={cn(
                "hover:text-subOrange cursor-pointer",
                playfair.className
              )}
            >
              (212) 06800-93003
            </p>
          </div>
          <div className="border-l px-5 border-dashed border-subOrange">
            <p className="text-subOrange">Socials:</p>
            <div className={cn("flex gap-3", playfair.className)}>
              <p className="hover:text-subOrange cursor-pointer">X/Twitter</p>
              <p className="hover:text-subOrange cursor-pointer">Instagram</p>
              <p className="hover:text-subOrange cursor-pointer">Facebook</p>
              <p className="hover:text-subOrange cursor-pointer">TikTok</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-5">
        <p className="font-light text-secondary/70">
          designed by <span className="font-normal text-secondary">Thaer</span>{" "}
          developed by <span className="font-normal text-secondary">ayman</span>
        </p>
        <p className="text-sm text-secondary/50">© Copyright 2024</p>
      </div>
    </div>
  );
};

export default Footer;
