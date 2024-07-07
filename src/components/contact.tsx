import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from "react";
import { playfair } from "./aboutUs";
import AnotherArrow from "./icons/anotherArrow";
const Contact = () => {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const handleItemClick = (idx: number) => {
    if (activeItems.includes(idx)) {
      setActiveItems(activeItems.filter((item) => item !== idx));
    } else {
      setActiveItems([...activeItems, idx]);
    }
  };

  return (
    <div className="border-b border-dashed border-subOrange pb-20 mb-14">
      <p
        className={cn(
          playfair.className,
          "text-subOrange text-[2.5rem] text-center"
        )}
      >
        Contact Us
      </p>
      <p className="text-center pb-10 md:pb-0 text-secondary/50">
        To reserve a private dining experience or inquire about hosting an
        event, kindly reach
        <br /> out to us using the following contact information:
      </p>
      <div className="max-w-3xl flex flex-col md:flex-row items-center md:items-start mx-auto justify-around">
        <div className="px-5 border-b w-full border-dashed text-center md:text-start border-subOrange md:border-b-0 py-5 md:py-0">
          <p className="text-subOrange text-center md:text-start">Email:</p>
          <p
            className={cn(
              "hover:text-subOrange cursor-pointer",
              playfair.className
            )}
          >
            info@grace.com
          </p>
        </div>
        <div className="md:border-l py-5 md:py-0 border-b w-full text-center md:text-start md:border-b-0 px-5 border-dashed border-subOrange">
          <p className="text-subOrange">Phone:</p>
          <p
            className={cn(
              "hover:text-subOrange cursor-pointer",
              playfair.className
            )}
          >
            (123) 456 7890
          </p>
        </div>
        <div className="md:border-l px-5 py-5 md:py-0 border-dashed border-subOrange">
          <p className="text-subOrange text-center md:text-start">Socials:</p>
          <div className={cn("flex gap-3", playfair.className)}>
            <p className="hover:text-subOrange cursor-pointer">X/Twitter</p>
            <p className="hover:text-subOrange cursor-pointer">Instagram</p>
            <p className="hover:text-subOrange cursor-pointer">Facebook</p>
            <p className="hover:text-subOrange cursor-pointer">TikTok</p>
          </div>
        </div>
      </div>
      <div className="border mt-10 border-dashed border-subOrange rounded-lg p-2 max-w-2xl mx-auto">
        <div className="max-w-2xl px-14 mx-auto">
          <p
            className={cn(
              playfair.className,
              "text-subOrange border-b border-dashed border-subOrange py-2 text-2xl text-center"
            )}
          >
            FAQs
          </p>
        </div>
        <div className="flex mt-8 flex-col gap-5 text-subOrange px-5">
          {cards.map((j, k) => {
            return (
              <div onClick={() => handleItemClick(k)} key={j.label}>
                <div className="flex cursor-pointer justify-between">
                  <p>{j.label}</p>
                  <motion.div
                    animate={{ rotate: activeItems.includes(k) ? -180 : 0 }}
                  >
                    <AnotherArrow className="w-6" />
                  </motion.div>
                </div>
                {activeItems.includes(k) && (
                  <motion.p
                    animate={{
                      height: activeItems.includes(k) ? "auto" : 0,
                      visibility: activeItems.includes(k)
                        ? "visible"
                        : "hidden",
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.15,
                      ease: "easeInOut",
                    }}
                    className="text-secondary/50"
                  >
                    {j.description}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;

const cards = [
  {
    label: "1. What are your operating hours?",
    description:
      "Our restaurant is open from 6pm to 2am all days of the week. Please note that these hours may vary on holidays or special occasions.",
  },
  {
    label: "2. Do you offer vegetarian/vegan options?",
    description:
      "Yes, we offer a variety of vegetarian and vegan options on our menu. Our chefs are happy to accommodate dietary preferences and restrictions to ensure that all guests have a delightful dining experience.",
  },
  {
    label: "3. How far in advance should I make a reservation?",
    description:
      "We recommend making a reservation as early as possible, especially for weekend evenings or special occasions. Reservations can be made online through our website or by contacting us directly.",
  },
  {
    label: "4. Can I bring my own wine?",
    description:
      "We offer an extensive wine list curated to complement our menu. However, we understand that some guests may have special preferences. Corkage fees may apply, so we encourage you to inquire with our staff beforehand.",
  },
  {
    label: "5. Do you accommodate large groups or private events?",
    description:
      "Yes, we offer private dining options and can accommodate groups of various sizes for special events or celebrations. Please contact us for more information and to discuss your specific needs.",
  },
  {
    label: "6. Can I make special requests for my reservation?",
    description:
      "Absolutely! We strive to accommodate special requests to ensure that your dining experience with us is exceptional. Whether you have dietary restrictions, seating preferences, or special occasions to celebrate, please let us know, and we'll do our best to accommodate your needs.",
  },
];
