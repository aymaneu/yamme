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
      <p className="text-center objeco">
        Grace is a culinary sanctuary nestled in the heart of New York, where
        <br className="md:block hidden" />
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
      <div className="border-dashed border-subOrange border-b pb-10">
        <div className="max-w-3xl flex flex-col md:flex-row items-center md:items-start mx-auto justify-around">
          <div className="px-5 border-b w-full border-dashed text-center md:text-start border-subOrange md:border-b-0 py-5 md:py-0">
            <p className="text-subOrange text-center md:text-start">Email:</p>
            <p
              className={cn(
                "hover:text-subOrange cursor-pointer",
                playfair.className
              )}
            >
              name.aymanelgad@gmail.com
            </p>
          </div>
          <div className="md:border-l py-5 md:py-0 border-b w-full text-center md:text-start md:border-b-0 px-5 border-dashed border-subOrange">
            <p className="text-subOrange">Phone:</p>
            <p
              className={cn(
                "hover:text-subOrange cursor-pointer",
                playfair.className
              )}
            >
              (123) 456 7890
            </p>
          </div>
          <div className="md:border-l px-5 py-5 md:py-0 border-dashed border-subOrange">
            <p className="text-subOrange text-center md:text-start">Socials:</p>
            <div className={cn("flex gap-3", playfair.className)}>
              <Link
                href="https://x.com/kageyuza"
                target="_blank"
                className="hover:text-subOrange cursor-pointer"
              >
                X/Twitter
              </Link>
              <Link
                href="https://www.instagram.com/kageyuza"
                target="_blank"
                className="hover:text-subOrange cursor-pointer"
              >
                Instagram
              </Link>
              <p className="hover:text-subOrange cursor-pointer">Facebook</p>
              <p className="hover:text-subOrange cursor-pointer">TikTok</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-5">
        <p className="font-light min-[375px]:text-xs sm:text-base text-secondary/70">
          designed by <span className="font-normal text-secondary">Thaer</span>{" "}
          developed by{" "}
          <Link
            href="https://github.com/aymaneu"
            className="font-normal text-secondary"
          >
            ayman
          </Link>
        </p>
        <p className="sm:text-sm min-[375px]:text-xs text-secondary/50">
          © Copyright 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
