import { Playfair } from "next/font/google";
import Link from "next/link";
import { cn } from "../utils/cn";
import Twitter from "./components/icons/twitter";
import Instagram from "./components/icons/instagram";

const playfair = Playfair({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-5xl min-h-screen border-r border-l border-dashed border-[#BB4B36] mx-auto">
      <div
        className={cn(
          playfair.className,
          "flex justify-between shadow-lg shadow-[#bb4a362b] px-5 py-4"
        )}
      >
        <p className="italic text-2xl font-semibold text-[#BB4B36]">Grace</p>
        <div className="flex gap-4">
          {info.map((links) => (
            <Link
              className="italic text-lg"
              key={links.label}
              href={links.link}
            >
              {links.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          <Twitter className="w-5" />
          <Instagram className="w-5" />
        </div>
      </div>
    </main>
  );
}

const info = [
  { label: "Menu", link: "/" },
  { label: "About", link: "/" },
  { label: "Blog", link: "/" },
  { label: "Contact", link: "/" },
];
