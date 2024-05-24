import HeroSection from "@/components/heroSection";
import Header from "../components/header";
import Ranking from "@/components/ranking";
import Menu from "@/components/menu";
export default function Home() {
  return (
    <main className="max-w-5xl h-full min-h-screen border-r border-l border-dashed border-subOrange mx-auto">
      <Header />
      <HeroSection />
      <Ranking />
      <Menu />
    </main>
  );
}
