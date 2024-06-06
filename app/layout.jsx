import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Video from "@/components/Video";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI YouTube Chapters Generator 🤖 100% Free ✅ YTChap.com",
  description:
    "Use our YouTube chapters tool (powered by AI) to generate engaging and accurate captions for your YouTube videos. Always free and unlimited usage!",
};

// c1 >> #121316
// c2 >> #483b68

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-2 md:p-6 flex flex-col gap-y-20`}>
        <NavBar />
        <div className="w-[95%] sm:min-w-[400px] max-w-[700px] self-center text-center px-4 py-2 border border-[#483b68] rounded-3xl">
          {/* <a href="#" className="text-sm">
            contact us
          </a> */}
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
