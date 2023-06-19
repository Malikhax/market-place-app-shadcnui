import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";
const getProductDetail = (id: number) => {
  return Products.find((products) => products.id == id);
};

export default function Page({ params }: { params: { id: number } }) {
  const result = getProductDetail(params.id);
  console.log(result)
  return (
    <div className="flex justify-evenly mt-16 py-10">
      
    </div>
      )
}
