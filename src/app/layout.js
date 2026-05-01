import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']);

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const OutfitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
  title: "PixGen – AI Image Generator",
  description: "PixGen – AI Image Generation Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        
        <Footer />
        </body>
    </html>
  );
}
