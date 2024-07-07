import { cn } from "@/utils/cn";
import { Playfair } from "next/font/google";
import React from "react";
import firstChef from "@/../public/firstChef.jpeg";
import secondChef from "@/../public/secondChef.jpeg";
import thirdChef from "@/../public/thirdChef.jpeg";
import forthChef from "@/../public/forthChef.jpeg";
import Image from "next/image";
export const playfair = Playfair({
  subsets: ["cyrillic"],
  style: "italic",
});
const AboutUs = () => {
  return (
    <div className="text-center mt-20">
      <p className={cn(playfair.className, "text-subOrange text-[2.5rem]")}>
        About Us
      </p>
      <p className="md:text-base text-sm text-gray-500">
        Grace was born 20 years ago from a shared vision of culinary excellence
        and
        <br className="hidden md:block" /> hospitality, nurtured by a passion
        for creating unforgettable dining experiences. Our
        <br className="hidden md:block" /> journey began with a simple desire:
        to offer a haven where guests could escape the
        <br className="hidden md:block" /> ordinary and immerse themselves in a
        world of flavor, elegance, and grace.
      </p>
      <div className="border-t border-b border-dashed border-subOrange max-w-xl my-10 py-16 mx-auto">
        <p className={cn(playfair.className, "text-subOrange text-2xl")}>
          our dedicated team is the heart and soul behind every exceptional
          dining experience
        </p>
      </div>
      <div className="grid px-8 gap-8 md:grid-cols-2">
        {images.map((i, k) => {
          return (
            <Image
              className="w-[29.5rem] shadow-subOrange/30 shadow-lg md:h-[31.25rem] h-[25rem] object-cover rounded-md"
              src={i}
              alt="images"
              width={300}
              height={300}
              key={k}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;

const images = [forthChef, thirdChef, secondChef, firstChef];
