import Image, { StaticImageData } from "next/image";
import P1 from "/public/p1.webp";
import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";
const ProductList = () => {
  const productchecks=Products.slice(0,3);
  return (
    <section className="w-full mt-20">
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-700">PRODUCTS</p>
          <h1 className="text-4xl font-bold leading-relaxed">
          Check What We Have
          </h1>
        </div>
        {/* <div className="flex justify-evenly mt-16">
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
        </div> */}
        <div className="flex justify-evenly mt-16">
          {
            productchecks.map((items)=>{
              return(
                <ProductCard key={items.id} title={items.name} price={items.price} img={items.img as StaticImageData} category={items.category} id={items.id} />
              )
            })
          }
        </div>
      </div>
    </section>
  );
};
export default ProductList;
