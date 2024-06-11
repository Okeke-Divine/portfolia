import { hashPassword } from "@/utils/hashPassword";
import { internalServerError } from "@/utils/prebuiltApiResponse";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const data = await req.json();

        const fullname = data.fullname;
        const email = data.email;
        const username = data.username;
        const password = data.password;

        const hashedPassword = await hashPassword(password);
        

        return NextResponse.json({})
    } catch (e) {
        return internalServerError(e)
    }
    // const unameExist 
}