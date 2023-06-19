import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
const getProductByCategory = (category: string) => {
  return Products.filter((products) => products.category == category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductByCategory(params.slug);
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      {
        result.length>0 ? 
        result.map((items)=>{
          return(
            <ProductCard key={items.id} title={items.name} price={items.price} img={items.img as StaticImageData} category={items.category} id={items.id}/>
          )
        })
        : 
        <div>No Products Found</div>
      }   
    </div>
      )
}
