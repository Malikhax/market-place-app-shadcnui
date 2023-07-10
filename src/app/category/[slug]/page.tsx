import { getProductData } from "@/app/products/page";
import ProductCard from "@/components/ProductCard";
import { Image as IImage} from "sanity"
import { urlForImage } from "../../../../sanity/lib/image";

const data:IProduct[] =await getProductData();
const getProductByCategory = (category: string) => {
  return data.filter((products) => products.category.name == category);
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
export default async function Page({ params }: { params: { slug: string } }) {
  const result = getProductByCategory(params.slug);
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      {
        result.length>0 ? 
        result.map((items)=>{
          return(
            <ProductCard key={items._id} title={items.title} price={items.price} img={urlForImage(items.image).url()} description={items.description} category={items.category.name} id={items._id}/>
          )
        })
        : 
        <div>No Products Found</div>
      }   
    </div>
      )
}
