import React from "react";
import firstBlog from "@/../public/firstBlog.webp";
import secondBlog from "@/../public/secBlog.jpeg";
import thirdBlog from "@/../public/thirdBlog.jpeg";
import forthBlog from "@/../public/forthBlog.jpeg";
const Blog = () => {
  return (
    <div>
      <p>Recent Blog Posts</p>
    </div>
  );
};

export default Blog;

const content = [
  {
    image: firstBlog,
    date: "Feb 29, 2024",
    label:
      "The History of Fine Dining: From Ancient Feasts to Modern Gastronomy",
    description:
      "We delve into the rich history of fine dining, tracing its evolution from ancient banquet halls to the Michelin-starred restaurants of today. It could explore key moments and figures in culinary history, as well as trends and innovations that have shaped the dining landscape over the centuries.",
  },
  {
    image: secondBlog,
    date: "Feb 7, 2024",
    label:
      "The Art of Hosting: Tips for Throwing an Elegant Dinner Party at Home",
    description:
      "Providing readers with practical tips and advice for hosting a memorable dinner party at home, covering everything from menu planning and table setting to entertaining etiquette and wine selection. It could also include recipe ideas and suggestions for themed parties.",
  },
  {
    image: thirdBlog,
    date: "Feb 16, 2024",
    label: "Behind the Scenes: A Day in the Life of a Chef at Grace",
    description:
      "This article would offer readers a behind-the-scenes look at the inner workings of Grace's kitchen, following a chef through a typical day of prep, cooking, and service. It could include interviews with staff members and insights into the creative process behind crafting the restaurant's signature dishes.",
  },
  {
    image: forthBlog,
    date: "Feb 13, 2024",
    label:
      "The Rise of Plant-Based Dining: Navigating the World of Vegan and Vegetarian Cuisine",
    description:
      "Examining the growing popularity of plant-based dining options, discussing the benefits of vegan and vegetarian diets and showcasing creative plant-based recipes from around the world. It could also address common misconceptions about plant-based eating.",
  },
];
