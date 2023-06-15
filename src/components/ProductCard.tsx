import Image,{StaticImageData} from "next/image";
import P1 from "/public/p1.webp";
const ProductCard = (props:{title:string,price:number,img:StaticImageData}) => {
  return (
    <div className="">
      <Image src={props.img} alt="product image" />
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className="font-bold text-lg">${props.price}</p>
    </div>
  );
};
export default ProductCard;
