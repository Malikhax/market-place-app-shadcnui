import { Product } from "./types";
import P1 from "/public/p1.webp";
import ProductImg1 from "@/images/products/productimg1.png"
import ProductImg2 from "@/images/products/productimg2.png"
import ProductImg3 from "@/images/products/productimg3.png"
import ProductImg4 from "@/images/products/productimg4.png"
export const Products:Product[]=[
    {
        id:1,
        name:'Product 1',
        category:'female',
        tagline:"Dress",
        price:20,
        img:P1
    },
    {
        id:2,
        name:'Product 2',
        category:'female',
        tagline:"Dress",
        price:200,
        img:ProductImg1
    },
    {
        id:3,
        name:'Product 3',
        category:'female',
        tagline:"Dress",
        price:203,
        img:P1
    },
    {
        id:4,
        name:'Product 4',
        category:'male',
        tagline:"Dress",
        price:203,
        img:P1
    },
    {
        id:5,
        name:'Product 5',
        category:'male',
        tagline:"Dress",
        price:204,
        img:P1
    },
    {
        id:6,
        name:'Product 6',
        category:'female',
        tagline:"Dress",
        price:205,
        img:P1
    },
];