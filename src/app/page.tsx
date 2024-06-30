import Image from "next/image";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Benefits from "@/components/layouts/Benefits";
import Banner from "@/components/layouts/Banner";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="px-24">
        <Header/>
      </div>
      
      <div className="bg-gray-light">
      <Hero/>
      </div>
      <Benefits/>
      <Banner/>
    </main>
  );
}
