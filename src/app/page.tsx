import Image from "next/image";
import Header from "@/components/layout/Header"
import Hero from "./views/Hero";
import ProductList from "./views/ProductList";
export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
    </main>
  );
}
