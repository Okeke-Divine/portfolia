import { badRequest, internalServerError } from "@/utils/prebuiltApiResponse";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { rating, message } = data;
        
        if(!rating || !message || message.lenght < 5){
            return badRequest("All fields are required");
        }

        return NextResponse.json({})
    } catch (e) {
        return internalServerError(e);
    }
}