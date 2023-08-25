"use client"
import Image,{StaticImageData} from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Toaster,toast } from "react-hot-toast";

const ProductCard = (props:{title:string,price:number,img:StaticImageData | string,category:string,description:string, id:string}) => {
  const handleAddToCart=async()=>{
      const res=await fetch("/api/cart",{
        method:"POST",
        body:JSON.stringify({
          product_id:props.id
        })
      })
      const result =await res.json()
      toast.success("added successfully")
      console.log(result)
  }
  return (
    <div className="py-5">
      <Link href={`/products/${props.id}`}>
        <Image src={props.img} alt="product image" width={200} height={300} className="hover:scale-105 h-96 w-80"/>
      </Link>
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className="font-bold text-lg"><span className="text-base font-normal capitalize">{props.description}</span></p>
      <p className="font-bold text-lg">${props.price}</p>
      <Button onClick={handleAddToCart} className="py-1 px-3 text-xs">Add to Cart</Button>
      <Toaster  />
    </div>
  );
};
export default ProductCard;
