import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"

const AllProducts =()=>{
    return(
        <div className="flex justify-evenly mt-16 py-10 flex-wrap">
          {
            Products.map((items)=>{
              return(
                <ProductCard key={items.id} title={items.name} price={items.price} img={items.img as StaticImageData} category={items.category} />
              )
            })
          }
        </div>
    )
}
export default AllProducts