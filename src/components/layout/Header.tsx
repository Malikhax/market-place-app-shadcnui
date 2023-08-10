import Image from "next/image";
import logo from "@/images/Logo.webp";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const Header = () => {
  const cartValue=useSelector(
    (state:RootState)=>state.cart.totalQuantity
  );
  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto flex justify-between items-center py-6">
        <Link href={"/"}><Image src={logo} alt="OpenMarket logo" className="w-40" /></Link>
        <ul className="flex gap-x-10">
          <li className="text-lg">
            <Link href={"/category/female"}>Female</Link>
          </li>
          <li className="text-lg">
            <Link href={"/category/male"}>Male</Link>
          </li>
          <li>
            <Link href={"/category/kids"}>Kids</Link>
          </li>
          <li>
            <Link href={"/products"}>All Products</Link>
          </li>
        </ul>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center relative">
          <Link href={"/cart"}>
            {/* <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white flex justify-center items-center">{cartValue}</span> */}
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
