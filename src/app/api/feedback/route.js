import { internalServerError } from "@/utils/prebuiltApiResponse";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try{
        const data = await req.json();
    const {rating,message} = data;
    console.log(data);
    return NextResponse.json({})
    }catch(e){
        return internalServerError(e);
    }
}