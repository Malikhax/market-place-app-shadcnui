import Image from "next/image";
import P1 from "/public/p1.webp";
import ProductCard from "@/components/ProductCard";
const ProductList = () => {
  return (
    <section className="w-full mt-20">
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-700">PRODUCTS</p>
          <h1 className="text-4xl font-bold leading-relaxed">
          Check What We Have
          </h1>
        </div>
        <div className="flex justify-evenly mt-16">
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
        </div>
      </div>
    </section>
  );
};
export default ProductList;
