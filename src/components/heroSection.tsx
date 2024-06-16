import HeroImage from "@/../public/heroImg.webp";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { playfair } from "../components/header";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useBooleanContext } from "@/contexts/BooleanContext";
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-55px 0px 0px 0px" });
  const { setBooleanState } = useBooleanContext();
  useEffect(() => {
    setBooleanState(isInView);
  }, [isInView, setBooleanState]);

  return (
    <div>
      <p
        className={cn(
          "italic text-center md:text-[4rem] text-[2.5rem] pt-36 text-subOrange",
          playfair.className
        )}
      >
        Discover Divine Dining at Grace
      </p>
      <p className="text-center text-sm mb-9 text-secondary/50">
        Grace is a culinary sanctuary nestled in the heart of New York, where
        refined
        <br className="md:block hidden" /> elegance meets unparalleled
        gastronomy.
      </p>
      <div className="flex justify-center">
        <button
          ref={ref}
          className={cn(
            playfair.className,
            "bg-subOrange border border-subOrange px-4 py-2 rounded-md italic hover:text-subOrange hover:border-subOrange hover:bg-background text-background"
          )}
        >
          Make a Reservation
        </button>
      </div>
      <div className="w-full mt-14 md:px-10 px-3 h-[28rem]">
        <Image
          src={HeroImage}
          alt="image"
          width={400}
          height={500}
          className="h-[28rem] rounded-md shadow-subOrange/30 shadow-lg w-full object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default HeroSection;
