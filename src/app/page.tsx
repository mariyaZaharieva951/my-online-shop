import Image from "next/image";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Header/>
    </main>
  );
}
