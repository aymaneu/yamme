import { cn } from "@/utils/cn";
import React from "react";
import { playfair } from "./header";
import Link from "next/link";
import first from "@/../public/first.webp";
import second from "@/../public/second.webp";
import third from "@/../public/third.webp";
import sa_first from "@/../public/sa_first.webp";
import sa_second from "@/../public/sa_second.webp";
import sa_third from "@/../public/sa_forth.webp";
import en_first from "@/../public/en_first.webp";
import en_second from "@/../public/en_second.webp";
import en_third from "@/../public/en_third.webp";
import si_first from "@/../public/si_first.webp";
import si_second from "@/../public/si_second.webp";
import si_third from "@/../public/si_third.webp";
import des_first from "@/../public/des_first.webp";
import des_second from "@/../public/des_second.webp";
import des_third from "@/../public/des_third.webp";
import Image from "next/image";
import { motion } from "framer-motion";

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

const content = [
  {
    label: "Appetizers",
    link: "",
    info: [
      {
        image: first,
        label: "Crispy Calamari",
        description:
          "Tender calamari rings lightly breaded and fried to a golden crisp, served with marinara sauce and lemon wedges.",
        price: "12.99",
      },
      {
        image: second,
        label: "Caprese Bruschetta",
        description:
          "Slices of toasted baguette topped with fresh mozzarella, cherry tomatoes, basil, and balsamic glaze.",
        price: "10.99",
      },
      {
        image: third,
        label: "Truffle Parmesan Fries",
        description:
          "Crispy fries tossed with grated Parmesan cheese and drizzled with truffle oil, served with aioli dipping sauce.",
        price: "9.99",
      },
    ],
  },
  {
    label: "Salads",
    link: "",
    info: [
      {
        image: sa_first,
        label: "Classic Caesar Salad",
        description:
          "Crisp romaine lettuce tossed with garlic croutons, shaved Parmesan cheese, and Caesar dressing.",
        price: "11.99",
      },
      {
        image: sa_second,
        label: "Summer Berry Salad",
        description:
          "Mixed greens with fresh strawberries, blueberries, goat cheese crumbles, candied pecans, and raspberry vinaigrette.",
        price: "13.99",
      },
      {
        image: sa_third,
        label: "Mediterranean Quinoa Salad",
        description:
          "Tri-color quinoa mixed with cucumber, cherry tomatoes, Kalamata olives, feta cheese, and lemon-herb dressing.",
        price: "12.99",
      },
    ],
  },
  {
    label: "Entrees",
    link: "",
    info: [
      {
        image: en_first,
        label: "Grilled Salmon",
        description:
          "Fresh Atlantic salmon fillet seasoned and grilled to perfection, served with lemon-dill sauce and roasted asparagus.",
        price: "24.99",
      },
      {
        image: en_second,
        label: "Filet Mignon",
        description:
          "8 oz. USDA Prime beef filet, grilled to your preference, accompanied by mashed potatoes and sautéed spinach.",
        price: "32.99",
      },
      {
        image: en_third,
        label: "Chicken Marsala",
        description:
          "Sautéed chicken breast smothered in a rich Marsala wine sauce with mushrooms, served over creamy mashed potatoes.",
        price: "19.99",
      },
    ],
  },
  {
    label: "Sides",
    link: "",
    info: [
      {
        image: si_first,
        label: "Garlic Parmesan Mashed Potatoes",
        description:
          "Creamy mashed potatoes infused with roasted garlic and Parmesan cheese.",
        price: "6.99",
      },
      {
        image: si_second,
        label: "Grilled Asparagus",
        description:
          "Fresh asparagus spears lightly seasoned and grilled to perfection.",
        price: "7.99",
      },
      {
        image: si_third,
        label: "Truffle Mac and Cheese",
        description:
          "Cavatappi pasta tossed in a creamy cheese sauce infused with truffle oil, topped with breadcrumbs.",
        price: "8.99",
      },
    ],
  },
  {
    label: "Desserts",
    link: "",
    info: [
      {
        image: des_first,
        label: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with a molten chocolate center, served with vanilla bean ice cream and raspberry coulis.",
        price: "9.99",
      },
      {
        image: des_second,
        label: "Crème Brûlée",
        description:
          "Classic French dessert featuring creamy vanilla custard topped with a caramelized sugar crust.",
        price: "8.99",
      },
      {
        image: des_third,
        label: "Tiramisu",
        description:
          "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
        price: "10.99",
      },
    ],
  },
];
