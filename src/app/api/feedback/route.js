import prisma from "@/app/db";
import {  badRequest, internalServerError, unAuthorized } from "@/utils/prebuiltApiResponse";
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
            if(userId == null){
                return unAuthorized();
            }
            // const feedback = await prisma
            return NextResponse.json({})
        }catch(e){
            return internalServerError(e);
        }

    } catch (e) {
        return internalServerError(e);
    }
}