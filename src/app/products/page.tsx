import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import Image, { StaticImageData } from "next/image"
import {client} from "@/lib/sanityClient"
import imageUrlBuilder from '@sanity/image-url'
import asdad from "@/images/allproducts/product11.png"
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
            Products.map((items)=>{
              return(
                <ProductCard key={items.id} title={items.name} price={items.price} img={items.img as StaticImageData} category={items.category} id={items.id}/>

              )
            })
          }
          <div className="text-black">
            {
              data.map((items)=>{
                let i;
                i=1;
                return(
                  <>
                  <ProductCard title={items.title} price={items.price} img={urlForImage(items.image).url()} category={"female"} id={i++}/>
                  {/* <Image src={urlForImage(items.image).url()}  width={200} height={300} alt="asdasd" /> */}
                  </>
                )
              })
            }
          </div>
        </div>
    )
}
export default AllProducts