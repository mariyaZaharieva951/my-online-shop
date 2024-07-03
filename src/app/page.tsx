import Image from "next/image";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Benefits from "@/components/layouts/Benefits";
import Banner from "@/components/layouts/Banner";
import Category from "@/components/layouts/Category";
import ProductList from "@/components/layouts/ProductList";
import Products from "@/components/layouts/Products";
import Blog from "@/components/layouts/Blog";
import Posters from "@/components/layouts/Posters";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="lg:px-24 px-5">
        <Header />
      </div>

      <div className="bg-gray-light">
        <Hero />
      </div>
      <Benefits />
      <Products />
      <Banner />
      <Category />
      <ProductList />
      <Blog />
      <Posters />
      <div className="bg-gray-light">
        <Footer />
      </div>
    </main>
  );
}
