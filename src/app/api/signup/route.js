import prisma from "@/app/db";
import { hashPassword } from "@/utils/hashPassword";
import { badRequest, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const data = await req.json();

        const fullname = data.fullname;
        const email = data.email;
        const username = data.username;
        const password = data.password;

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                fullname, email, username, password: hashedPassword
            },
            select: { username: true, email: true, fullname: true }
        })
        if (user){
            return resourceCreated(user);
        }else{
            return badRequest("user was not created");
        }

            return NextResponse.json({})
    } catch (e) {
        return internalServerError(e)
    }
    // const unameExist 
}