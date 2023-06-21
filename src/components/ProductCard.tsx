import Image,{StaticImageData} from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const ProductCard = (props:{title:string,price:number,img:StaticImageData,category:string,id:number}) => {
  return (
    <div className="py-5">
      <Link href={`/products/${props.id}`}>
        <Image src={props.img} alt="product image" className="hover:scale-105 h-96 w-80"/>
      </Link>
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className="font-bold text-lg">${props.price}</p>
      <p className="font-bold text-lg">category <span className="text-base font-normal capitalize">{props.category}</span></p>
      <Button className="py-1 px-3 text-xs ">Add to Cart</Button>
    </div>
  );
};
export default ProductCard;
