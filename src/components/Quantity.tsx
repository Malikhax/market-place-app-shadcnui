"use client"
import { useState } from "react";
const Quantity = (props:{q:number}) => {
    const addQuantity=()=>{
        setQuantiy(quantity+1)
    }
    const subQuantity=()=>{
        if(quantity>1){
            setQuantiy(quantity-1)
        }
    }
    const [quantity,setQuantiy]= useState(props.q);
  return (
    <section>
      <div className="mt-6 flex items-center gap-2">
        <h1 className="font-semibold">Quantity:</h1>
        <div className="flex items-center gap-4">
          <span onClick={()=>subQuantity()} className="px-3 bg-gray-200 rounded-full cursor-pointer text-center text-3xl">
            -
          </span>
          <span>{quantity}</span>
          <span onClick={()=>addQuantity()} className="px-2 bg-white rounded-full cursor-pointer text-center text-3xl border-2 border-black">
            +
          </span>
        </div>
      </div>
    </section>
  );
};
export default Quantity;
