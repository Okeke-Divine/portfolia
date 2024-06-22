import prisma from "@/app/db"
import { internalServerError } from "@/utils/prebuiltApiResponse"
import { NextResponse } from "next/server";

export const GET = async () => {
    try{
        const user_count = await prisma.user.count();
        return NextResponse.json({message:"success",count: user_count})
    }catch(e){
        return internalServerError(e)
    }
}