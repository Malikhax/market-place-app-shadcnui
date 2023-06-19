import { Button } from "@/components/ui/button";

const SubscribeSection = () => {
  return (
    <section className="w-full my-32">
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <div className="relative">
          <h1 className="text-3xl font-bold">Subscribe Our Newsletter</h1>
          <div className="absolute top-1/2 right-1/2 translate-x-1/2">
                <h1 className="text-6xl md:text-8xl font-bold opacity-10">Newsletter</h1>
          </div>
          <p className="pt-4">Get the latest information and promo offers directly</p>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row gap-4 mt-4">
            <input type="email" placeholder="Input email address" className="border py-1.5 px-4"/>
            <div className="inline-block">
              <Button className="rounded-none bg-black shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SubscribeSection;
