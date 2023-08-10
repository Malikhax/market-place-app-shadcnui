"use client"
import deleteImg from "@/images/delete-outline.svg"
import Image from "next/image"
const DeleteCard=(props:{id:string})=>{
    const handleDelete=async()=>{
        const req=await fetch(`api/cart?product_id=${props.id}`,{
            method:"DELETE",
            headers: {
                ACCESS_CONTROL_ALLOW_ORIGIN:"*",
                "Content-Type": "application/json",
            },
            // body:JSON.stringify({
            //     product_id:props.id
            // })
        })
        const result =await req.json()
        console.log(result)
    }
    return(
        <Image onClick={handleDelete} src={deleteImg} alt="img" width={30} />
    )
}
export default DeleteCard