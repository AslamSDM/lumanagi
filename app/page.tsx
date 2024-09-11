import About from "@/components/home/About";
import Benefits from "@/components/home/Benefits";
import Features from "@/components/home/Features";
import First from "@/components/home/First";
import Footer from "@/components/home/Footer";
import Roadmap from "@/components/home/Roadmap";
import Swap from "@/components/home/Swap";
import Tokenization from "@/components/home/Tokenization";
import Trade from "@/components/home/TradeGames";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-blue-800 to-indigo-800 text-foreground flex flex-col items-center justify-between min-h-screen text-white">
      <Navbar />
      <First />
      <About />
      <Tokenization />
      <Swap />
      <Trade />
      <Features />
      <Benefits />
      {/* <Roadmap /> */}
      <Footer />
    </main>
  );
}
