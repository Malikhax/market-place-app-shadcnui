import Image from "next/image";
import logo from "/public/logo.webp";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
const Header = () => {
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
        <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
          <ShoppingCart className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
export default Header;
