import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import piko from "@/../public/cooking.jpg";
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
        <Blog changed="Recent Blog Posts" border query={article as string} />
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
          src={"/firstBlog.webp"}
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
          src={"/firstBlog.webp"}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="border-t block my-16 max-w-xl mx-auto border-dashed border-subOrange" />
        <div className="flex flex-col pb-16 gap-4">
          <p className="text-base text-secondary/60 leading-snug italic">
            Fine dining is a culinary tradition that has evolved over centuries,
            influenced by culture, history, and the changing tastes of society.
            From the opulent feasts of ancient civilizations to the
            Michelin-starred restaurants of today, the history of fine dining is
            a fascinating journey through time. In this article, we&apos;ll
            explore the rich history of fine dining, tracing its origins and
            evolution to the modern-day culinary landscape.
          </p>
          <h4 className="text-base text-secondary/90 italic">
            Ancient Feasts and Banquets
          </h4>
          <p className="text-base text-secondary/60 leading-snug">
            The roots of fine dining can be traced back to ancient civilizations
            such as Mesopotamia, Egypt, and Rome, where lavish banquets were
            held to celebrate important occasions and entertain guests of honor.
            These feasts were elaborate affairs, featuring a vast array of
            dishes served in multiple courses, accompanied by music,
            entertainment, and lavish decorations. Food was seen as a symbol of
            wealth and status, and feasting was an opportunity for rulers to
            display their power and hospitality.
          </p>
          <h4 className="text-base text-secondary/90 italic">
            The Renaissance and the Birth of Modern Cuisine
          </h4>
          <p className="text-base text-secondary/60 leading-snug">
            The Renaissance period saw a resurgence of interest in the culinary
            arts, as Italian chefs began to experiment with new ingredients and
            cooking techniques. The concept of the &quot;modern&quot; meal,
            consisting of multiple courses served in a specific order, emerged
            during this time, laying the foundation for the fine dining
            experience as we know it today. The French court also played a
            significant role in shaping fine dining, with chefs such as
            Marie-Antoine Carême and Auguste Escoffier codifying the rules of
            haute cuisine and elevating cooking to an art form.
          </p>
        </div>
      </div>
      <Image
        className="md:max-w-2xl h-[28rem] object-cover rounded-xl mx-auto"
        src={piko}
        alt="image"
        width={800}
        height={800}
      />
      <div className="max-w-2xl py-16 mx-auto flex flex-col gap-4">
        <p className="text-base text-secondary/60 leading-snug">
          Fine dining is a culinary tradition that has evolved over centuries,
          influenced by culture, history, and the changing tastes of society.
          From the opulent feasts of ancient civilizations to the
          Michelin-starred restaurants of today, the history of fine dining is a
          fascinating journey through time. In this article, we&apos;ll explore
          the rich history of fine dining, tracing its origins and evolution to
          the modern-day culinary landscape.
        </p>
        <h4 className="text-base text-secondary/90 italic">
          Ancient Feasts and Banquets
        </h4>
        <p className="text-base text-secondary/60 leading-snug">
          The roots of fine dining can be traced back to ancient civilizations
          such as Mesopotamia, Egypt, and Rome, where lavish banquets were held
          to celebrate important occasions and entertain guests of honor. These
          feasts were elaborate affairs, featuring a vast array of dishes served
          in multiple courses, accompanied by music, entertainment, and lavish
          decorations. Food was seen as a symbol of wealth and status, and
          feasting was an opportunity for rulers to display their power and
          hospitality.
        </p>
        <h4 className="text-base text-secondary/90 italic">
          The Renaissance and the Birth of Modern Cuisine
        </h4>
        <p className="text-base text-secondary/60 leading-snug">
          The Renaissance period saw a resurgence of interest in the culinary
          arts, as Italian chefs began to experiment with new ingredients and
          cooking techniques. The concept of the &quot;modern&quot; meal,
          consisting of multiple courses served in a specific order, emerged
          during this time, laying the foundation for the fine dining experience
          as we know it today. The French court also played a significant role
          in shaping fine dining, with chefs such as Marie-Antoine Carême and
          Auguste Escoffier codifying the rules of haute cuisine and elevating
          cooking to an art form.
        </p>
      </div>
    </div>
  );
};
