"use client"
import deleteImg from "@/images/delete-outline.svg"
import Image from "next/image"
const DeleteCard=(props:{id:string})=>{
    const handleDelete=async()=>{
        const req=await fetch("api/cart",{
            method:"DELETE",
            headers: {
                ACCESS_CONTROL_ALLOW_ORIGIN:"*"
            },
            body:JSON.stringify({
                product_id:props.id
            })
        })
    }
    return(
        <Image onClick={handleDelete} src={deleteImg} alt="img" width={30} />
    )
}
export default DeleteCard