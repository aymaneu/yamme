import { cn } from "@/utils/cn";
import Link from "next/link";
import { playfair } from "./header";
import { content } from "@/data/menu";
import { motion } from "framer-motion";
import Image from "next/image";

const Menu = () => {
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
                className="border-t border-l border-r p-2 border-dashed rounded-t-md border-subOrange"
                href={i.link}
                key={i.label}
              >
                {i.label}
              </Link>
            );
          })}
        </div>
        <div>
          {content.map((j) => (
            <div className="mt-36 z-10" key={j.label}>
              <p
                className={cn(
                  "text-center mb-10 text-secondary/50 text-2xl italic",
                  playfair.className
                )}
              >
                {j.label}
              </p>
              <div className="flex px-28 flex-col gap-7">
                {j.info.map((k) => {
                  return (
                    <motion.div
                      whileHover="hover"
                      className="flex cursor-pointer gap-8 justify-between"
                      key={k.label}
                    >
                      <motion.div
                        className="w-52 h-36 z-10 shrink-0"
                        transition={{ ease: "easeInOut", duration: 0.4 }}
                        variants={{ hover: { scale: 1.2 } }}
                      >
                        <Image
                          src={k.image}
                          alt="image"
                          width={300}
                          height={300}
                          className="w-52 shrink-0 h-36 object-cover rounded-md"
                        />
                      </motion.div>
                      <div className="grow">
                        <div
                          className={cn(
                            "flex text-subOrange text-2xl items-center",
                            playfair.className
                          )}
                        >
                          <p className="shrink-0">{k.label}</p>
                          <span className="border-t border-subOrange border-dashed w-full" />
                          <p>${k.price}</p>
                        </div>
                        <p className="text-secondary/50 italic text-base">
                          {k.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
