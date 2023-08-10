import { NextRequest,NextResponse } from "next/server"
import { db,cartTable } from "@/lib/drizzle"
import {v4 as uuid} from "uuid"
import { cookies } from "next/headers"
import { and, eq, sql } from "drizzle-orm"

export const GET =async(request :NextRequest)=>{
    const req=request.nextUrl
    const uid=req.searchParams.get("user_id") as string
    if(!uid){
        return NextResponse.json({message:"uid is not set"})
    }
    try{
        const res= await db.select().from(cartTable).where(eq(cartTable.user_id,uid));
        return NextResponse.json(res)
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"Something went wrong"})
    }
}
export const POST =async(request :NextRequest)=>{
    const req = await request.json();
    const uid=uuid();
    const setCookies=cookies();
    const user_id=cookies().get("user_id")?.value;
    
    if(!user_id){
        setCookies.set("user_id",uid)
    }
    try{
        const res= await db.insert(cartTable).values({
            product_id:req.product_id,
            quantity:1,
            user_id:cookies().get("user_id")?.value as string
        }).returning();
        return NextResponse.json({res})
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"Something went wrong"})

    }
}
export const DELETE =async(request :NextRequest)=>{
    // const req = await request.json();
    const res=request.nextUrl
    const uid=res.searchParams.get("product_id") as string
    const user_id=cookies().get("user_id")?.value;
    try{
        // const res =await db.delete(cartTable).where(sql`${cartTable.id}==${user_id} and ${cartTable.product_id}==${req.product_id}`).returning();
        const res =await db.delete(cartTable).where(and(eq(cartTable.user_id, user_id as string), eq(cartTable.product_id,uid as string)));
        return NextResponse.json({res})
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"Something went wrong"})

    }
}