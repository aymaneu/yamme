import { cn } from "@/utils/cn";
import React from "react";
import { playfair } from "./header";
import Link from "next/link";

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
      <div>
        <div className="flex items-center border-b justify-center gap-5 border-b-subOrange border-dashed mb-5">
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
            <div key={j.label}>
              <p
                className={cn(
                  "text-center text-2xl italic",
                  playfair.className
                )}
              >
                {j.label}
              </p>
              <div>
                {j.info.map((k) => {
                  return (
                    <div key={k.label}>
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
        label: "Crispy Calamari",
        description:
          "Tender calamari rings lightly breaded and fried to a golden crisp, served with marinara sauce and lemon wedges.",
        price: "12.99",
      },
      {
        label: "Caprese Bruschetta",
        description:
          "Slices of toasted baguette topped with fresh mozzarella, cherry tomatoes, basil, and balsamic glaze.",
        price: "10.99",
      },
      {
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
        label: "Classic Caesar Salad",
        description:
          "Crisp romaine lettuce tossed with garlic croutons, shaved Parmesan cheese, and Caesar dressing.",
        price: "11.99",
      },
      {
        label: "Summer Berry Salad",
        description:
          "Mixed greens with fresh strawberries, blueberries, goat cheese crumbles, candied pecans, and raspberry vinaigrette.",
        price: "13.99",
      },
      {
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
        label: "Grilled Salmon",
        description:
          "Fresh Atlantic salmon fillet seasoned and grilled to perfection, served with lemon-dill sauce and roasted asparagus.",
        price: "24.99",
      },
      {
        label: "Filet Mignon",
        description:
          "8 oz. USDA Prime beef filet, grilled to your preference, accompanied by mashed potatoes and sautéed spinach.",
        price: "32.99",
      },
      {
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
        label: "Garlic Parmesan Mashed Potatoes",
        description:
          "Creamy mashed potatoes infused with roasted garlic and Parmesan cheese.",
        price: "6.99",
      },
      {
        label: "Grilled Asparagus",
        description:
          "Fresh asparagus spears lightly seasoned and grilled to perfection.",
        price: "7.99",
      },
      {
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
        label: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with a molten chocolate center, served with vanilla bean ice cream and raspberry coulis.",
        price: "9.99",
      },
      {
        label: "Crème Brûlée",
        description:
          "Classic French dessert featuring creamy vanilla custard topped with a caramelized sugar crust.",
        price: "8.99",
      },
      {
        label: "Tiramisu",
        description:
          "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
        price: "10.99",
      },
    ],
  },
];
