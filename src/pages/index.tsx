import HeroSection from "@/components/heroSection";
import Header from "../components/header";
import Ranking from "@/components/ranking";
import Menu from "@/components/menu";
import Table from "@/components/table";
import AboutUs from "@/components/aboutUs";
import Blog from "@/components/blog";
import Reserve from "@/components/reserve";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="max-w-5xl h-full min-h-screen border-r border-l border-dashed border-subOrange mx-auto">
      <Header />
      <HeroSection />
      <Ranking />
      <Menu />
      <Table />
      <AboutUs />
      <Blog />
      <Reserve />
      <Contact />
      <Footer />
    </main>
  );
}
