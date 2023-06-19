import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroImage from "/public/hero-img.webp";
import featureImg from "@/images/Featured1.webp"
import featureImg2 from "@/images/Featured2.webp"
import featureImg3 from "@/images/Featured3.webp"
import featureImg4 from "@/images/Featured4.webp"
import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex py-6 flex-col gap-y-10 lg:flex-row mt-10 w-11/12 mx-auto justify-between gap-10">
        {/* Left Div */}
        <div className="flex-1">
          <Badge className="py-3 px-6 rounded-lg bg-[#e1edff] text-blue-700 text-md font-semibold w-auto">
            Sale 70%
          </Badge>
          <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-xl">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
          <Button className="bg-black h-12 px-8  mt-8">
            <ShoppingCart className="mr-2" /> Start Shopping
          </Button>
          <div className="flex justify-between mt-10">
            <Image src={featureImg} alt="Bazaar"/>
            <Image src={featureImg2} alt="Bustle"/>
            <Image src={featureImg3} alt="versace"/>
            <Image src={featureImg4} alt="instyle"/>
          </div>
        </div>
        {/* Right dev */}
        <div className="flex-1">
          <Image src={heroImage} alt="hero image" className="bg-[#ffece3] rounded-full" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
