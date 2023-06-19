import Image from "next/image";
import eventImg from "@/images/event1.webp";
import eventImg2 from "@/images/event2.webp";
import eventImg3 from "@/images/event3.webp";
const Promotion = () => {
  return (
    <section className="w-full mt-20" >
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-700">PROMOTIONS</p>
          <h1 className="text-4xl font-bold leading-relaxed">
            Our Promotions Events
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row box-border gap-4 justify-center mt-10">
          <div className="flex flex-col gap-4 flex-1">
            <div className="w-full bg-[#d6d6d8] h-60 lg:h-48 flex justify-center lg:justify-between items-center">
              <div className="lg:pl-10">
                <h1 className="text-4xl font-bold lg:text-3xl">GET UP TO 60%</h1>
                <p className="text-lg">For the summer season</p>
              </div>
              <Image src={eventImg} alt="event" className="h-[240px] lg:h-48" />
            </div>
            <div className="w-full bg-black text-white h-60 lg:h-52 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold">GET UP TO 60%</h1>
              <p className="text-lg">For the summer season</p>
              <button className="text-lg bg-[#474747] px-4 py-1 rounded-lg">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          <div className="flex box-border gap-4">
            <div className="bg-[#efe1c7] w-1/2 flex flex-col justify-end">
              <h1 className="font-medium">Flex Sweatshirt</h1>
              <div className="flex gap-2">
                <p className="line-through">$100.OO</p>
                <p className="font-bold">$75.00</p>
              </div>
              <Image src={eventImg2} alt="event2"/>
            </div>
            <div className="bg-[#d7d7d9] w-1/2 flex flex-col justify-end">
              <h1 className="font-medium">Flex Sweatshirt</h1>
              <div className="flex gap-2">
                <p className="line-through">$100.OO</p>
                <p className="font-bold">$75.00</p>
              </div>
              <Image src={eventImg3} alt="event2"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promotion;
