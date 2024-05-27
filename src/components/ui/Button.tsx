import React from "react";
import { playfair } from "../header";
import { cn } from "@/utils/cn";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className={cn(
        playfair.className,
        "bg-subOrange w-fit border border-subOrange px-4 py-2 rounded-md italic hover:text-subOrange hover:border-subOrange hover:bg-background text-background"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
