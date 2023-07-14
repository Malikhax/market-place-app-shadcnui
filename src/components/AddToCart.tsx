"use client"
import Image,{StaticImageData} from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const AddToCart = (props:{id:string}) => {
  const handleAddToCart=async()=>{
      const res=await fetch("/api/cart",{
        method:"POST",
        body:JSON.stringify({
          product_id:props.id
        })
      })
      const result =await res.json()
      console.log(result)
  }
  return (
    <div className="py-5">
        <Button onClick={handleAddToCart} className="py-1 px-3 text-xs">Add to Cart</Button>
    </div>
  );
};
export default AddToCart;
