import { motion } from "framer-motion";
import Arrow from "./icons/arrow";
import { cn } from "@/utils/cn";
import { playfair } from "./aboutUs";
import Link from "next/link";

const Blog = ({ border = false }: { border?: boolean }) => {
  return (
    <div>
      <p
        className={cn(
          playfair.className,
          "text-center py-14 text-[2.5rem] text-subOrange"
        )}
      >
        Recent Blog Posts
      </p>
      <div className="flex flex-col px-28 gap-8">
        {content.map((j) => {
          return (
            <Link href={`/article/${j.label}`} key={j.label}>
              <motion.div className="flex gap-5 w-full" whileHover="hovered">
                <div className="rounded-md shrink-0 relative overflow-x-hidden h-[15rem] w-[15rem]">
                  <motion.img
                    initial={{ right: "0px" }}
                    variants={{ hovered: { right: "-30px" } }}
                    src={j.image}
                    alt="image"
                    className="h-[15rem] w-[18rem] overflow-visible object-right object-cover absolute "
                  />
                </div>
                <div className="text-subOrange">
                  <div className="flex items-center w-full justify-between">
                    <p className={cn(playfair.className, "text-lg")}>
                      {j.date}
                    </p>
                    <motion.div
                      initial={{ marginRight: "80px", opacity: 0 }}
                      variants={{ hovered: { marginRight: "0px", opacity: 1 } }}
                      transition={{ ease: "easeInOut" }}
                      className="flex items-center gap-1"
                    >
                      <p className="shrink-0 text-xs">View Article</p>
                      <Arrow className="fill-subOrange w-4" />
                    </motion.div>
                  </div>
                  <div>
                    <p
                      className={cn(
                        "border-b text-2xl border-dashed border-subOrange",
                        playfair.className
                      )}
                    >
                      {j.label}
                    </p>
                    <p className="text-gray-500">{j.description}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
      <div
        className={cn(
          "flex flex-col gap-3 max-w-2xl mx-auto items-center border-t border-dashed border-subOrange",
          playfair.className,
          border ? "py-10" : "border-b my-16 py-10 "
        )}
      >
        <p className="text-center text-2xl text-subOrange">
          From mouthwatering dishes to insider tips and behind-the-
          <br />
          scenes glimpses into the culinary world.
        </p>
        <button className="border w-fit px-14 hover:border-subOrange hover:text-subOrange py-2 rounded-md border-black">
          Visit Our Blog
        </button>
      </div>
    </div>
  );
};

export default Blog;

const content = [
  {
    image: "/firstBlog.webp",
    date: "Feb 29, 2024",
    label:
      "The History of Fine Dining: From Ancient Feasts to Modern Gastronomy",
    description:
      "We delve into the rich history of fine dining, tracing its evolution from ancient banquet halls to the Michelin-starred restaurants of today. It could explore key moments and figures in culinary history, as well as trends and innovations that have shaped the dining landscape over the centuries.",
  },
  {
    image: "secBlog.jpeg",
    date: "Feb 7, 2024",
    label:
      "The Art of Hosting: Tips for Throwing an Elegant Dinner Party at Home",
    description:
      "Providing readers with practical tips and advice for hosting a memorable dinner party at home, covering everything from menu planning and table setting to entertaining etiquette and wine selection. It could also include recipe ideas and suggestions for themed parties.",
  },
  {
    image: "thirdBlog.jpeg",
    date: "Feb 16, 2024",
    label: "Behind the Scenes: A Day in the Life of a Chef at Grace",
    description:
      "This article would offer readers a behind-the-scenes look at the inner workings of Grace's kitchen, following a chef through a typical day of prep, cooking, and service. It could include interviews with staff members and insights into the creative process behind crafting the restaurant's signature dishes.",
  },
  {
    image: "forthBlog.jpeg",
    date: "Feb 13, 2024",
    label:
      "The Rise of Plant-Based Dining: Navigating the World of Vegan and Vegetarian Cuisine",
    description:
      "Examining the growing popularity of plant-based dining options, discussing the benefits of vegan and vegetarian diets and showcasing creative plant-based recipes from around the world. It could also address common misconceptions about plant-based eating.",
  },
];
