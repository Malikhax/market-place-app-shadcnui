import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";
import { ShoppingCart } from "lucide-react";
import { getProductData } from "../page";
import { Image as IImage} from "sanity"
import { urlForImage } from "../../../../sanity/lib/image";

interface IProduct{
  title:string,
  description:string,
  _id:string,
  price:number,
  category:{
    name:string
  },
  image:IImage
}
const data:IProduct[] =await getProductData();
const getProductDetail = (id: string) => {
  return data.find((products) => products._id == id);
};

const getProductByCategory = (category: string) => {
  return data.filter((products) => products.category.name == category);
};
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductDetail(params.id);
  console.log(result)
  return (
    <div className="flex flex-col justify-center gap-10 mt-16 py-10 box-border md:flex-row w-11/12 mx-auto">
      <div className="flex gap-4">
        <div className="flex flex-col  gap-4">
          <Image src={urlForImage(result.image).url()} width={32} height={32} alt="producr img" className="w-20" />
          <Image src={urlForImage(result.image).url()} width={32} height={32} alt="producr img" className="w-20" />
          <Image src={urlForImage(result.image).url()} width={32} height={32} alt="producr img" className="w-20" />
          <Image src={urlForImage(result.image).url()} width={32} height={32} alt="producr img" className="w-20" />
        </div>
        <div className="inline-flex flex-1 max-h-[800px] max-w-[800px]">
          <Image src={urlForImage(result.image).url()} width={1000} height={1000} alt="producr img"  className="w-screen max-h-screen"/>
        </div>
      </div>
      <div className="min-w-fit w-1/2">
        <h1 className="text-4xl font-semibold flex flex-wrap">{result?.title}</h1>
        <p className="text-lg">{result?.description}</p>
        <h1 className="font-semibold mt-6">Select Size</h1>
        <div className="flex gap-2 list-none mt-4">
          <li className="p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-white hover:shadow-2xl hover:border w-8 h-8 text-center">XS</li>
          <li className="p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-white hover:shadow-2xl hover:border w-8 h-8 text-center">S</li>
          <li className="p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-white hover:shadow-2xl hover:border w-8 h-8 text-center">M</li>
          <li className="p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-white hover:shadow-2xl hover:border w-8 h-8 text-center">L</li>
          <li className="p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-white hover:shadow-2xl hover:border w-8 h-8 text-center">XL</li>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <h1 className="font-semibold">Quantity:</h1>
          <div className="flex items-center gap-4">
            <span className="px-3 bg-gray-200 rounded-full cursor-pointer text-center text-3xl">-</span>
            <span>1</span>
            <span className="px-2 bg-white rounded-full cursor-pointer text-center text-3xl border-2 border-black">+</span>
          </div>
        </div>
        <div className="mt-5 flex gap-2 items-center">
          <Button className="rounded-none md:px-10 flex gap-2"><ShoppingCart/>Add to Cart</Button>
          <h1 className="font-bold text-2xl">$ {result?.price}</h1>
        </div>
      </div>
    </div>
      )
}
