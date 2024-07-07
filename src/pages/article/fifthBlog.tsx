import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import piko from "@/../public/foodie.jpeg";
import { cn } from "@/utils/cn";
import { playfair } from "@/components/aboutUs";
import { motion } from "framer-motion";
import Blog from "@/components/blog";
import { useRouter } from "next/router";
const Article = () => {
  const router = useRouter().query;
  const { article } = router;
  console.log(article);
  return (
    <main className="md:max-w-5xl max-w-md h-full min-h-screen border-r border-l border-dashed border-subOrange mx-auto">
      <div className="border-b border-dashed border-subOrange">
        <Header />
        <Hero />
        <Blog border query={article as string} />
      </div>
      <Footer />
    </main>
  );
};

export default Article;

const Hero = () => {
  return (
    <div className="pt-28 px-5 md:px-0">
      <p
        className={cn("text-center text-subOrange text-lg", playfair.className)}
      >
        Feb 16, 2024
      </p>
      <p
        className={cn(
          "text-center text-subOrange text-[2.5rem]",
          playfair.className
        )}
      >
        The History of Fine Dining: From Ancient
        <br /> Feasts to Modern Gastronomy
      </p>
      <p className="text-center text-secondary/50">
        We delve into the rich history of fine dining, tracing its evolution
        from ancient banquet
        <br /> halls to the Michelin-starred restaurants of today. It could
        explore key moments and
        <br /> figures in culinary history, as well as trends and innovations
        that have shaped the
        <br /> dining landscape over the centuries.
      </p>
      <div className="w-full shadow-xl shadow-subOrange/20 mt-14 rounded-xl h-[20rem] relative md:h-[30rem] max-w-[60rem] mx-auto overflow-clip">
        <motion.img
          className="rounded-xl object-top h-[30rem] block md:hidden md:h-full absolute  object-cover w-full"
          initial={{ translateY: 0 }}
          animate={{ translateY: -150 }}
          transition={{
            ease: "easeInOut",
            duration: 2.2,
            bounce: true,
          }}
          src={"/thirdBlog.jpeg"}
        />
        <motion.img
          className="rounded-xl hidden md:block"
          initial={{ translateY: 0 }}
          animate={{ translateY: -150 }}
          transition={{
            ease: "easeInOut",
            duration: 2.2,
            bounce: true,
          }}
          src={"/thirdBlog.jpeg"}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="border-t block my-16 max-w-xl mx-auto border-dashed border-subOrange" />
        <div className="flex flex-col pb-16 gap-4">
          <p className="text-base text-secondary/60 leading-snug">
            Have you ever wondered what goes on behind the scenes in a bustling
            restaurant kitchen? From the sizzle of pans to the aroma of fresh
            herbs, the world of professional cooking is a symphony of sights,
            sounds, and flavors. In this article, we&apos;ll take you behind the
            scenes at Grace, offering a glimpse into the daily life of a chef
            and the artistry that goes into creating exquisite culinary
            experiences.
          </p>
          <h4 className="text-base text-secondary/90 italic">
            Early Morning Prep
          </h4>
          <p className="text-base text-secondary/60 leading-snug">
            The day at Grace begins bright and early, as the kitchen team
            arrives to prepare for the day ahead. The executive chef leads the
            morning briefing, discussing the day&apos;s specials, reviewing
            reservations, and delegating tasks to the kitchen staff. Meanwhile,
            prep cooks busily chop vegetables, prepare sauces, and marinate
            meats, ensuring that everything is ready for service.
          </p>
          <h4 className="text-base text-secondary/90 italic">Lunch Service</h4>
          <p className="text-base text-secondary/60 leading-snug">
            As lunchtime approaches, the kitchen springs to life as orders start
            to come in. The line cooks work in harmony, each responsible for a
            specific station—grilling, sautéing, plating—while the expeditor
            orchestrates the flow of dishes from the kitchen to the dining room.
            Despite the fast pace, attention to detail is paramount, as each
            dish must meet the exacting standards of the chef before it leaves
            the kitchen.
          </p>
          <h4 className="text-base text-secondary/90 italic">Afternoon Lull</h4>
          <p className="text-base text-secondary/60 leading-snug">
            After the lunch rush subsides, there&apos;s a brief lull in the
            kitchen as the team regroups and prepares for the evening service.
            This is a time for cleaning, restocking, and refining techniques, as
            well as experimenting with new recipes and menu ideas. The kitchen
            is a hive of activity as chefs collaborate and brainstorm, pushing
            the boundaries of culinary creativity.
          </p>
        </div>
      </div>
      <Image
        className="md:max-w-2xl rounded-xl mx-auto"
        src={piko}
        alt="image"
        width={800}
        height={800}
      />
      <div className="max-w-2xl py-16 mx-auto flex flex-col gap-4">
        <p className="text-base text-secondary/60 leading-snug">
          Have you ever wondered what goes on behind the scenes in a bustling
          restaurant kitchen? From the sizzle of pans to the aroma of fresh
          herbs, the world of professional cooking is a symphony of sights,
          sounds, and flavors. In this article, we&apos;ll take you behind the
          scenes at Grace, offering a glimpse into the daily life of a chef and
          the artistry that goes into creating exquisite culinary experiences.
        </p>
        <h4 className="text-base text-secondary/90 italic">
          Early Morning Prep
        </h4>
        <p className="text-base text-secondary/60 leading-snug">
          The day at Grace begins bright and early, as the kitchen team arrives
          to prepare for the day ahead. The executive chef leads the morning
          briefing, discussing the day&apos;s specials, reviewing reservations,
          and delegating tasks to the kitchen staff. Meanwhile, prep cooks
          busily chop vegetables, prepare sauces, and marinate meats, ensuring
          that everything is ready for service.
        </p>
        <h4 className="text-base text-secondary/90 italic">Lunch Service</h4>
        <p className="text-base text-secondary/60 leading-snug">
          As lunchtime approaches, the kitchen springs to life as orders start
          to come in. The line cooks work in harmony, each responsible for a
          specific station—grilling, sautéing, plating—while the expeditor
          orchestrates the flow of dishes from the kitchen to the dining room.
          Despite the fast pace, attention to detail is paramount, as each dish
          must meet the exacting standards of the chef before it leaves the
          kitchen.
        </p>
        <h4 className="text-base text-secondary/90 italic">Afternoon Lull</h4>
        <p className="text-base text-secondary/60 leading-snug">
          After the lunch rush subsides, there&apos;s a brief lull in the
          kitchen as the team regroups and prepares for the evening service.
          This is a time for cleaning, restocking, and refining techniques, as
          well as experimenting with new recipes and menu ideas. The kitchen is
          a hive of activity as chefs collaborate and brainstorm, pushing the
          boundaries of culinary creativity.
        </p>
      </div>
    </div>
  );
};
