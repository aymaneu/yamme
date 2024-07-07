import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import piko from "@/../public/group.jpeg";
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
        <Blog border query={article as string} changed="Similar Articles" />
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
        Behind the Scenes: A Day in the Life of a<br /> Chef at Grace
      </p>
      <p className="text-center text-secondary/50">
        This article would offer readers a behind-the-scenes look at the inner
        workings of
        <br /> Grace&apos;s kitchen, following a chef through a typical day of
        prep, cooking, and service. It
        <br /> could include interviews with staff members and insights into the
        creative process
        <br /> behind crafting the restaurant&apos;s signature dishes.
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
          src={"/secBlog.jpeg"}
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
          src={"/secBlog.jpeg"}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="border-t block my-16 max-w-xl mx-auto border-dashed border-subOrange" />
        <div className="flex flex-col pb-16 gap-4">
          <p className="text-base text-secondary/60 leading-snug">
            There&apos;s something truly special about gathering friends and
            loved ones together for a dinner party at home. From the warm
            ambiance to the delicious food and lively conversation, hosting a
            dinner party allows you to create cherished memories and celebrate
            life&apos;s simple pleasures. In this article, we&apos;ll share some
            expert tips for throwing an elegant dinner party that will impress
            your guests and make you feel like a seasoned host.
          </p>
          <h4 className="text-base text-secondary/90 italic">1. Plan Ahead</h4>
          <p className="text-base text-secondary/60 leading-snug">
            The key to a successful dinner party is careful planning. Start by
            selecting a date and sending out invitations well in advance, giving
            your guests plenty of time to RSVP. Consider the size of your space
            and the number of guests you can comfortably accommodate, and plan
            your menu accordingly. Take into account any dietary restrictions or
            preferences your guests may have, and tailor your menu to
            accommodate them.
          </p>
          <h4 className="text-base text-secondary/90 italic">
            2. Set the Scene
          </h4>
          <p className="text-base text-secondary/60 leading-snug">
            Create a welcoming atmosphere by setting a beautiful table that
            reflects your personal style and the theme of your dinner party.
            Invest in quality linens, tableware, and centerpiece arrangements
            that will set the tone for the evening. Consider adding candles or
            string lights to create a warm, inviting glow, and don&apos;t forget
            to set out small touches like place cards and napkin rings to add an
            extra layer of elegance.
          </p>
          <h4 className="text-base text-secondary/90 italic">
            3. Prepare a Thoughtful Menu
          </h4>
          <p className="text-base text-secondary/60 leading-snug">
            When planning your menu, aim for a balance of flavors, textures, and
            colors that will appeal to a variety of palates. Choose dishes that
            can be prepared in advance or require minimal last-minute assembly,
            allowing you to spend more time enjoying the company of your guests.
            Consider offering a mix of appetizers, salads, main courses, and
            desserts, and don&apos;t forget to include options for any
            vegetarians or vegans in attendance.
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
          There&apos;s something truly special about gathering friends and loved
          ones together for a dinner party at home. From the warm ambiance to
          the delicious food and lively conversation, hosting a dinner party
          allows you to create cherished memories and celebrate life&apos;s
          simple pleasures. In this article, we&apos;ll share some expert tips
          for throwing an elegant dinner party that will impress your guests and
          make you feel like a seasoned host.
        </p>
        <h4 className="text-base text-secondary/90 italic">1. Plan Ahead</h4>
        <p className="text-base text-secondary/60 leading-snug">
          The key to a successful dinner party is careful planning. Start by
          selecting a date and sending out invitations well in advance, giving
          your guests plenty of time to RSVP. Consider the size of your space
          and the number of guests you can comfortably accommodate, and plan
          your menu accordingly. Take into account any dietary restrictions or
          preferences your guests may have, and tailor your menu to accommodate
          them.
        </p>
        <h4 className="text-base text-secondary/90 italic">2. Set the Scene</h4>
        <p className="text-base text-secondary/60 leading-snug">
          Create a welcoming atmosphere by setting a beautiful table that
          reflects your personal style and the theme of your dinner party.
          Invest in quality linens, tableware, and centerpiece arrangements that
          will set the tone for the evening. Consider adding candles or string
          lights to create a warm, inviting glow, and don&apos;t forget to set
          out small touches like place cards and napkin rings to add an extra
          layer of elegance.
        </p>
        <h4 className="text-base text-secondary/90 italic">
          3. Prepare a Thoughtful Menu
        </h4>
        <p className="text-base text-secondary/60 leading-snug">
          When planning your menu, aim for a balance of flavors, textures, and
          colors that will appeal to a variety of palates. Choose dishes that
          can be prepared in advance or require minimal last-minute assembly,
          allowing you to spend more time enjoying the company of your guests.
          Consider offering a mix of appetizers, salads, main courses, and
          desserts, and don&apos;t forget to include options for any vegetarians
          or vegans in attendance.
        </p>
      </div>
    </div>
  );
};
