import { cn } from "@/utils/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import { Playfair } from "next/font/google";
import { useRef } from "react";
import Button from "./ui/Button";
const playfair = Playfair({
  subsets: ["cyrillic"],
  style: "italic",
});

const Table = () => {
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
      <div className="flex flex-col gap-6 border-t border-b border-subOrange max-w-2xl mx-auto py-16 my-24 border-dashed w-full items-center ">
        <div className={cn(playfair.className)}>
          <p
            className={cn(
              "text-subOrange text-center text-2xl font-semibold italic"
            )}
          >
            Reserve Your Table Now and Prepare for an Unforgettable
            <br /> Dining Experience at Grace
          </p>
        </div>

        <Button>Book a Table</Button>
      </div>
      <div className="px-8">
        <div className="w-full rounded-xl h-[45rem] overflow-hidden">
          <motion.img
            ref={carouselRef}
            style={{ translateY: translateY }}
            src={"/tabels.webp"}
            className="scale-125 rounded-xl overflow-clip h-[50rem] object-cover object-center w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
