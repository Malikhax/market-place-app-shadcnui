import Image from "next/image";
import Header from "@/components/layout/Header"
import Hero from "./views/Hero";
import ProductList from "./views/ProductList";
import Promotion from "./views/Promotion";
import SeeProducts from "./views/SeeProducts";
import SubscribeSection from "./views/SubscribeSection";
export default function Home() {
  return (
    <main>
      <Hero />
      <Promotion />
      <ProductList />
      <SeeProducts />
      <SubscribeSection />
    </main>
  );
}
