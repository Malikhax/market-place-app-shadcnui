import { StaticImageData } from "next/image"

export type Product={
    id: number,
    name: string,
    price: number,
    category: string,
    img: string | StaticImageData;
};
