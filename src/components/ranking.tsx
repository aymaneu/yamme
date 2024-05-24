import React from "react";
import Star from "./icons/star";
import { cn } from "@/utils/cn";
import { playfair } from "../components/header";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Ranking = () => {
  return (
    <div>
      <span className="border-t border-dashed w-1/2 mx-auto border-subOrange mt-20 block" />
      <div className="flex items-center w-full justify-center mt-10 gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          return <Star className="w-3 fill-subOrange" key={i} />;
        })}
      </div>
      <p
        className={cn(
          "text-center text-subOrange italic text-2xl font-medium pb-10",
          playfair.className
        )}
      >
        Exquisite Cuisine, Impeccable Service
      </p>
      <InfiniteMovingCards pauseOnHover={false} speed="slow" items={content} />
      <span className="border-t border-dashed w-1/2 mx-auto border-subOrange mt-10 mb-20 block" />
    </div>
  );
};

export default Ranking;

const content = [
  {
    user: "Sarah Patel",
    dunno: "OpenTable",
    description:
      "I celebrated my anniversary at Grace, and it was absolutely magical. The staff went above and beyond to make our evening special, and the food was nothing short of perfection. It's clear that every dish is crafted with passion and care. Thank you, Grace!",
  },
  {
    description:
      "As a frequent traveler, I've had the privilege of dining at top restaurants around the world. Grace ranks among the best of the best. The combination of flavors, the elegant presentation, and the impeccable service create an amazing dining experience.",
    user: "David Smith",
    dunno: "Google Review",
  },
  {
    description:
      "I've been fortunate to dine at many fine restaurants, but Grace stands out as truly exceptional. The attention to detail, from the elegant ambiance to the impeccable service, is unparalleled. And the food? Absolutely divine. A must-visit for any food enthusiast.",
    user: "Michael Johnson",
    dunno: "Yelp",
  },
  {
    user: "Emily Turner",
    dunno: "Google Review",
    description:
      "Dining at Grace was a truly exquisite experience. From the moment we walked in, we were greeted with warmth and hospitality. Every dish was a work of art, bursting with flavor and beautifully presented. I can't wait to return!",
  },
];
