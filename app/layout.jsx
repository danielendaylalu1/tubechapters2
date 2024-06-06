import { Roboto, Jacques_Francois } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

export const metadata = {
  title: "AI YouTube Chapters Generator 🤖 100% Free ✅ YTChap.com",
  description:
    "Use our YouTube chapters tool (powered by AI) to generate engaging and accurate captions for your YouTube videos. Always free and unlimited usage!",
};

const jacques_Francois = Jacques_Francois({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// c1 >> #121316
// c2 >> #483b68

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} p-2 md:p-6 flex flex-col gap-y-20`}>
        <NavBar />
        <div className="w-[95%] sm:min-w-[400px] max-w-[700px] self-center text-center px-4 py-2 rounded-3xl"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
