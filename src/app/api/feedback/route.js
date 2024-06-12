import prisma from "@/app/db";
import { badRequest, internalServerError } from "@/utils/prebuiltApiResponse";
import { NextResponse } from "next/server";
import { getUserId } from "../../../utils/session";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { rating, message } = data;
        
        if(!rating || !message || message.lenght < 5){
            return badRequest("All fields are required");
        }

        try{
            const userId = await getUserId();
            console.log(userId);
            return NextResponse.json({})
            // const feedback = await prisma
        }catch(e){
            return internalServerError(e);
        }

    } catch (e) {
        return internalServerError(e);
    }
}