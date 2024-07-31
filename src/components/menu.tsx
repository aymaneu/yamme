import { cn } from "@/utils/cn";
import Link from "next/link";
import { playfair } from "./header";
import { content } from "@/data/menu";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Menu = () => {
  const appetizersRef = useRef(null);
  const appetizersRefView = useInView(appetizersRef, {
    margin: "-50% 0% 50% 0%",
  });

  const saladsRef = useRef(null);
  const saladsRefView = useInView(saladsRef, {
    margin: "-50% 0% 50% 0%",
  });
  const entreesRef = useRef(null);
  const entreesRefView = useInView(entreesRef, {
    margin: "-50% 0% 50% 0%",
  });
  const sidesRef = useRef(null);
  const sidesRefView = useInView(sidesRef, {
    margin: "-50% 0% 50% 0%",
  });
  const dessertsRef = useRef(null);
  const dessertsView = useInView(dessertsRef, {
    margin: "-50% 0% 50% 0%",
  });
  const [currentSec, setCurrentSec] = useState("appetizers");
  useEffect(() => {
    if (appetizersRefView) {
      setCurrentSec("Appetizers");
    } else if (saladsRefView) {
      setCurrentSec("Salads");
    } else if (entreesRefView) {
      setCurrentSec("Entrees");
    } else if (sidesRefView) {
      setCurrentSec("Sides");
    } else if (dessertsView) {
      setCurrentSec("Desserts");
    }
  }, [
    appetizersRefView,
    dessertsView,
    entreesRefView,
    saladsRefView,
    sidesRefView,
  ]);
  return (
    <div>
      <p
        className={cn(
          "text-center text-subOrange text-[2.5rem] italic",
          playfair.className
        )}
      >
        Our Menu
      </p>
      <div className="pt-10">
        <div className="flex sticky z-20 bg-background pt-5 top-16 h-full items-center border-b justify-center gap-5 border-b-subOrange border-dashed mb-5">
          {content.map((i) => {
            return (
              <Link
                className={cn(
                  "p-2 text-xs min-[375px]:text-xs sm:text-sm md:text-base rounded-t-md border-t border-l border-r",
                  currentSec === i.label
                    ? "border-dashed text-subOrange border-subOrange"
                    : "border-background"
                )}
                href={i.link}
                key={i.label}
              >
                {i.label}
              </Link>
            );
          })}
        </div>
        <div>
          <div className="mt-36 z-10">
            {/* //? one */}
            <p
              className={cn(
                "text-center mb-10 text-secondary/50 text-2xl italic",
                playfair.className
              )}
            >
              {content[0].label}
            </p>
            <div
              ref={appetizersRef}
              className="flex md:px-28 px-10 flex-col gap-7"
            >
              {content[0].info.map((k) => {
                return (
                  <motion.div
                    whileHover="hover"
                    className="flex flex-col md:flex-row cursor-pointer gap-8 justify-between"
                    key={k.label}
                  >
                    <motion.div
                      className="md:w-52 w-full md:h-36 h-52 z-10 shrink-0"
                      transition={{ ease: "easeInOut", duration: 0.4 }}
                      variants={{ hover: { scale: 1.2 } }}
                    >
                      <Image
                        src={k.image}
                        alt="image"
                        width={300}
                        height={300}
                        className="md:w-52 w-full shrink-0 md:h-36 h-52 object-cover rounded-md"
                      />
                    </motion.div>
                    <div className="grow">
                      <div
                        className={cn(
                          "flex text-subOrange flex-col-reverse md:flex-row border-b md:border-b-0 border-dashed pb-5 mb-5 md:pb-0 md:mb-0 border-subOrange text-2xl items-center",
                          playfair.className
                        )}
                      >
                        <p className="shrink-0">{k.label}</p>
                        <span className="border-t md:block hidden border-subOrange border-dashed w-full" />
                        <p>${k.price}</p>
                      </div>
                      <p className="text-secondary/50 italic text-base text-center md:text-start">
                        {k.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {/* //? two */}
            <p
              className={cn(
                "text-center mb-10 text-secondary/50 text-2xl italic",
                playfair.className
              )}
            >
              {content[1].label}
            </p>
            <div ref={saladsRef} className="flex md:px-28 px-10 flex-col gap-7">
              {content[1].info.map((k) => {
                return (
                  <motion.div
                    whileHover="hover"
                    className="flex flex-col md:flex-row cursor-pointer gap-8 justify-between"
                    key={k.label}
                  >
                    <motion.div
                      className="md:w-52 w-full md:h-36 h-52 z-10 shrink-0"
                      transition={{ ease: "easeInOut", duration: 0.4 }}
                      variants={{ hover: { scale: 1.2 } }}
                    >
                      <Image
                        src={k.image}
                        alt="image"
                        width={300}
                        height={300}
                        className="md:w-52 w-full shrink-0 md:h-36 h-52 object-cover rounded-md"
                      />
                    </motion.div>
                    <div className="grow">
                      <div
                        className={cn(
                          "flex text-subOrange flex-col-reverse md:flex-row border-b md:border-b-0 border-dashed pb-5 mb-5 md:pb-0 md:mb-0 border-subOrange text-2xl items-center",
                          playfair.className
                        )}
                      >
                        <p className="shrink-0">{k.label}</p>
                        <span className="border-t md:block hidden border-subOrange border-dashed w-full" />
                        <p>${k.price}</p>
                      </div>
                      <p className="text-secondary/50 italic text-base text-center md:text-start">
                        {k.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>{" "}
            {/* //? three */}
            <p
              className={cn(
                "text-center mb-10 text-secondary/50 text-2xl italic",
                playfair.className
              )}
            >
              {content[2].label}
            </p>
            <div
              ref={entreesRef}
              className="flex md:px-28 px-10 flex-col gap-7"
            >
              {content[2].info.map((k) => {
                return (
                  <motion.div
                    whileHover="hover"
                    className="flex flex-col md:flex-row cursor-pointer gap-8 justify-between"
                    key={k.label}
                  >
                    <motion.div
                      className="md:w-52 w-full md:h-36 h-52 z-10 shrink-0"
                      transition={{ ease: "easeInOut", duration: 0.4 }}
                      variants={{ hover: { scale: 1.2 } }}
                    >
                      <Image
                        src={k.image}
                        alt="image"
                        width={300}
                        height={300}
                        className="md:w-52 w-full shrink-0 md:h-36 h-52 object-cover rounded-md"
                      />
                    </motion.div>
                    <div className="grow">
                      <div
                        className={cn(
                          "flex text-subOrange flex-col-reverse md:flex-row border-b md:border-b-0 border-dashed pb-5 mb-5 md:pb-0 md:mb-0 border-subOrange text-2xl items-center",
                          playfair.className
                        )}
                      >
                        <p className="shrink-0">{k.label}</p>
                        <span className="border-t md:block hidden border-subOrange border-dashed w-full" />
                        <p>${k.price}</p>
                      </div>
                      <p className="text-secondary/50 italic text-base text-center md:text-start">
                        {k.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>{" "}
            {/* //? four */}
            <p
              className={cn(
                "text-center mb-10 text-secondary/50 text-2xl italic",
                playfair.className
              )}
            >
              {content[3].label}
            </p>
            <div ref={sidesRef} className="flex md:px-28 px-10 flex-col gap-7">
              {content[3].info.map((k) => {
                return (
                  <motion.div
                    whileHover="hover"
                    className="flex flex-col md:flex-row cursor-pointer gap-8 justify-between"
                    key={k.label}
                  >
                    <motion.div
                      className="md:w-52 w-full md:h-36 h-52 z-10 shrink-0"
                      transition={{ ease: "easeInOut", duration: 0.4 }}
                      variants={{ hover: { scale: 1.2 } }}
                    >
                      <Image
                        src={k.image}
                        alt="image"
                        width={300}
                        height={300}
                        className="md:w-52 w-full shrink-0 md:h-36 h-52 object-cover rounded-md"
                      />
                    </motion.div>
                    <div className="grow">
                      <div
                        className={cn(
                          "flex text-subOrange flex-col-reverse md:flex-row border-b md:border-b-0 border-dashed pb-5 mb-5 md:pb-0 md:mb-0 border-subOrange text-2xl items-center",
                          playfair.className
                        )}
                      >
                        <p className="shrink-0">{k.label}</p>
                        <span className="border-t md:block hidden border-subOrange border-dashed w-full" />
                        <p>${k.price}</p>
                      </div>
                      <p className="text-secondary/50 italic text-base text-center md:text-start">
                        {k.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>{" "}
            {/* //? five */}
            <p
              className={cn(
                "text-center mb-10 text-secondary/50 text-2xl italic",
                playfair.className
              )}
            >
              {content[4].label}
            </p>
            <div
              ref={dessertsRef}
              className="flex md:px-28 px-10 flex-col gap-7"
            >
              {content[4].info.map((k) => {
                return (
                  <motion.div
                    whileHover="hover"
                    className="flex flex-col md:flex-row cursor-pointer gap-8 justify-between"
                    key={k.label}
                  >
                    <motion.div
                      className="md:w-52 w-full md:h-36 h-52 z-10 shrink-0"
                      transition={{ ease: "easeInOut", duration: 0.4 }}
                      variants={{ hover: { scale: 1.2 } }}
                    >
                      <Image
                        src={k.image}
                        alt="image"
                        width={300}
                        height={300}
                        className="md:w-52 w-full shrink-0 md:h-36 h-52 object-cover rounded-md"
                      />
                    </motion.div>
                    <div className="grow">
                      <div
                        className={cn(
                          "flex text-subOrange flex-col-reverse md:flex-row border-b md:border-b-0 border-dashed pb-5 mb-5 md:pb-0 md:mb-0 border-subOrange text-2xl items-center",
                          playfair.className
                        )}
                      >
                        <p className="shrink-0">{k.label}</p>
                        <span className="border-t md:block hidden border-subOrange border-dashed w-full" />
                        <p>${k.price}</p>
                      </div>
                      <p className="text-secondary/50 italic text-base text-center md:text-start">
                        {k.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
