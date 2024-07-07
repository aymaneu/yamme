import { cn } from "@/utils/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { playfair } from "./aboutUs";
import Calendar from "./icons/calendar";
import Clock from "./icons/clock";
import Person from "./icons/person";
import PoweredBy from "./icons/poweredBy";
import SmallArrow from "./icons/smallArrow";
const Reserve = () => {
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    ["0%", "-30%"]
  );
  return (
    <div>
      <div className="text-center">
        <p className={cn(playfair.className, "text-subOrange text-[2.5rem]")}>
          Reserve A Table
        </p>
        <p className="text-base text-secondary/50">
          Welcome to Grace&apos;s Reservation Section! We&apos;re delighted that
          you&apos;re considering
          <br /> joining us for an unforgettable dining experience.
        </p>
      </div>
      <div className="grid max-w-4xl gap-5 mx-auto py-16 md:grid-cols-3 justify-items-center">
        <div className="border justify-around flex flex-col border-dashed max-w-64 w-full border-subOrange rounded-xl py-2 px-4">
          <p className="text-lg font-bold text-center">Make a Reservation</p>
          <div className="border border-secondary/50 pt-1 rounded-md">
            <div className="flex items-center justify-between px-3 py-2 border-b border-secondary/50">
              <p className="flex items-center font-medium gap-2">
                <Calendar className="w-5" />
                Jun 2, 2024
              </p>
              <SmallArrow className="w-4" />
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-b border-secondary/50">
              <p className="flex font-medium items-center gap-2">
                <Clock className="w-5" />
                7:00 PM
              </p>
              <SmallArrow className="w-4" />
            </div>
            <div className="flex items-center justify-between px-3 py-2">
              <p className="flex font-medium items-center gap-2">
                <Person className="w-5 fill-none stroke-black text-black stroke-[2rem]" />
                2 people
              </p>
              <SmallArrow className="w-4" />
            </div>
            <button className="bg-[#D83340] rounded-b-md text-white w-full py-2">
              Find Table
            </button>
          </div>
          <div className="flex  flex-col items-center">
            <PoweredBy className="w-28" />
          </div>
        </div>
        <div className="border-r flex flex-col gap-3 items-center border-l border-dashed border-subOrange w-full text-center">
          <div>
            <p className="text-subOrange">Opening Hours:</p>
            <p className="text-secondary/50">All Days: 6PM - 2AM</p>
          </div>
          <div className="text-secondary/50">
            <p className="text-subOrange">Address:</p>
            <p>Street Address</p>
            <p>Your City, State, Zip Code</p>
            <p>Country</p>
          </div>
          <div>
            <p className="text-subOrange">Phone:</p>
            <p
              className={cn(
                playfair.className,
                "font-semibold hover:text-subOrange cursor-pointer"
              )}
            >
              (123) 456 7890
            </p>
          </div>
          <button
            className={cn(
              "border w-fit px-14 hover:border-subOrange hover:text-subOrange py-2 rounded-md border-black",
              playfair.className
            )}
          >
            Get Direction
          </button>
        </div>
        <iframe
          className="h-full border border-dashed border-subOrange rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.2359700069837!2d-7.516455327482043!3d33.595681843178625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb68bc3234ed%3A0x9e4b84f2076975e8!2sR%C3%A9s%20El%20kawtar!5e0!3m2!1sen!2sma!4v1717356441046!5m2!1sen!2sma"
          loading="lazy"
        />
      </div>
      <div className="w-full rounded-xl h-[35rem] overflow-clip">
        <motion.img
          ref={carouselRef}
          style={{ translateY: translateY }}
          src={"/wine.jpeg"}
          className="scale-125 px-8 object-bottom w-full"
        />
      </div>
    </div>
  );
};

export default Reserve;
