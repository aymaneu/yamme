import { cn } from "@/utils/cn";
import Header, { playfair } from "../components/header";
import HeroImage from "@/../public/heroImg.webp";
import Image from "next/image";
import HeroSection from "@/components/heroSection";
export default function Home() {
  return (
    <main className="max-w-5xl min-h-screen border-r border-l border-dashed border-subOrange mx-auto">
      <Header />
      <HeroSection />
    </main>
  );
}
