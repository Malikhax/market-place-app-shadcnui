import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import {client} from "@/lib/sanityClient"
import { Image as IImage} from "sanity"
import { urlForImage } from "../../../sanity/lib/image"

export const getProductData =async () => {
  const res= await client.fetch(`*[_type=='product']{
    _id,
    title,
    description,
    image,
    price,
    category->{
      name
    },
  }`)
  return res
} 
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
const AllProducts =async () =>{
  const data:IProduct[] =await getProductData();
  console.log(data)
    return(
          <div className="flex justify-evenly mt-16 py-10 flex-wrap">
            {
              data.map((items)=>{
                return(
                  <>
                  <ProductCard title={items.title} price={items.price} img={urlForImage(items.image).url()} category={"female"} description={items.description} id={items._id}/>
                  {/* <Image src={urlForImage(items.image).url()}  width={200} height={300} alt="asdasd" /> */}
                  </>
                )
              })
            }
          </div>
    )
}
export default AllProducts