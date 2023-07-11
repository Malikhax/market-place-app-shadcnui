import Image, { StaticImageData } from "next/image";
import ProductCard from "@/components/ProductCard";
import { getProductData } from "@/app/products/page";
import { Image as IImage} from "sanity"
import { urlForImage } from "../../../sanity/lib/image";
const data:IProduct[] =await getProductData();
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
const ProductList = () => {
  const productchecks=data.slice(0,3);
  return (
    <section className="w-full mt-20">
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-700">PRODUCTS</p>
          <h1 className="text-4xl font-bold leading-relaxed">
          Check What We Have
          </h1>
        </div>
        {/* <div className="flex justify-evenly mt-16">
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
          <ProductCard title="Flex Sweatshirt" price={175} img={P1} />
        </div> */}
        <div className="flex justify-evenly mt-16">
          {
            productchecks.map((items)=>{
              return(
                <ProductCard key={items._id} title={items.title} price={items.price} img={urlForImage(items.image).url()} description={items.description} category={items.category.name} id={items._id} />
              )
            })
          }
        </div>
      </div>
    </section>
  );
};
export default ProductList;
