import Image from "next/image";
import P1 from "/public/p1.webp";
import ProductCard from "@/components/ProductCard";
const ProductList = () => {
  return (
    <section className="flex justify-evenly mt-16">
        <ProductCard title="Flex Sweatshirt" price={175} img={P1}/>
        <ProductCard title="Flex Sweatshirt" price={175} img={P1}/>
        <ProductCard title="Flex Sweatshirt" price={175} img={P1}/>
    </section>
  );
};
export default ProductList;
