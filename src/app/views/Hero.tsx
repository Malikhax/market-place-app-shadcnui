import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroImage from "/public/hero-img.webp";
import Image from "next/image";
const Hero = () => {
  return (
    <section>
      <div className="flex py-6 flex-col gap-y-10 lg:flex-row">
        {/* Left Div */}
        <div className="flex-1">
          <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 ">
            Badge
          </Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            The Joke Tax Chronicles
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <Button className="bg-black h-12 px-8  mt-4">
            <ShoppingCart className="mr-2" /> Start Shopping
          </Button>
        </div>
        {/* Right dev */}
        <div className="flex-1">
          <Image src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
