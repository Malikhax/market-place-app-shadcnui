import Image from "next/image"
import P1img from "@/images/feature.webp"
import { Button } from "@/components/ui/button"
const SeeProducts =()=>{
    return(
        <section className="w-full mt-20">
            <div className="w-11/12 mx-auto">
                <div className="flex justify-center md:justify-end ">
                    <h1 className="text-5xl font-bold max-w-4xl md:max-w-lg lg:max-w-3xl">
                    Unique and Authentic Vintage Designer Jewellery
                    </h1>
                </div>
                <div className="mt-10 gap-10 flex flex-col xl:flex-row">
                    {/* Left Side */}
                    <div className="grid grid-cols-2 flex-1 items-center relative">
                        <div className="lg:max-w-[200px]">
                            <h1 className="text-xl font-semibold py-2">Using Good Quality Materials</h1>
                            <p className="text-sm text-gray-600 font-semibold">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="lg:max-w-[200px]">
                            <h1 className="text-xl font-semibold py-2">100% Handmade Products</h1>
                            <p className="text-sm text-gray-600 font-semibold">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="lg:max-w-[200px]">
                            <h1 className="text-xl font-semibold py-2">Modern Fashion Design</h1>
                            <p className="text-sm text-gray-600 font-semibold">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="lg:max-w-[200px]">
                            <h1 className="text-xl font-semibold py-2">Discount for Bulk Orders</h1>
                            <p className="text-sm text-gray-600 font-semibold">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="absolute font-extrabold opacity-10 text-justify lg:max-w-xs">
                            <h1 className="text-8xl">Different from others</h1>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="flex-1 flex flex-col justify-center items-center gap-6 md:flex-row">
                        <div className="shrink-0">
                            <Image src={P1img} alt="img"/>
                        </div>
                        <div className="">
                            <p className="leading-7 -tracking-tighter">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                            <Button className=" bg-black rounded-none py-1 px-10 shadow-xl mt-5">See All Product</Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SeeProducts