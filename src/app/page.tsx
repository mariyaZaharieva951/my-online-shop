import Image from "next/image";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="px-24">
        <Header/>
      </div>
      
      <div className="bg-gray-light">
      <Hero/>
      </div>
      
    </main>
  );
}
