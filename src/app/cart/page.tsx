import { cookies } from "next/headers"
import Image, { StaticImageData } from "next/image";
import { getProductData } from "@/app/products/page";
import { Image as IImage} from "sanity"
import { urlForImage } from "../../../sanity/lib/image";
import Quantity from "@/components/Quantity";
import deleteImg from "@/images/delete-outline.svg"

const data =await getProductData();
const getProductDetail = (id: string) => {
  return data.find((products:IProduct) => products._id == id);
};
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


interface dataType{
    id:number
    user_id:string
    product_id:string
    quantity:number
}



const Cart =async()=>{
    const user_id=cookies().get("user_id")?.value as string
    const req= await fetch(`http://127.0.0.1:3000/api/cart?user_id=${user_id}`,{
        method:"GET",
    });
    const data=await req.json() as dataType[]
    console.log(data)
    return(
        <section>
            <div className="flex flex-col gap-6">
                {
                    data.map((item)=>{
                        let result:IProduct = getProductDetail(item.product_id);
                        return(
                            <div className="flex">
                                <Image src={urlForImage(result.image).url()} alt="img" width={200} height={200} className="rounded-lg" />
                                <div>
                                    <h1>{result.title}</h1>
                                    <h4>{result.description}</h4>
                                    <h4>Delivery Estimation</h4>
                                    <p>5 Working Days</p>
                                    <p>{result.price}</p>
                                </div>
                                <div>
                                    <Image src={deleteImg} alt="img" />
                                    <Quantity q={1} />
                                </div>
                            </div>
                        )
                        
                    })
                }

            </div>
        </section>
    )
}
export default Cart