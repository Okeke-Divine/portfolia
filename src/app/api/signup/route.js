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

        if(!fullname || !email || !username ||!password){
            return badRequest("All fields are required");
        }

        const hashedPassword = await hashPassword(password);

        // check if username exists
        const usernameExists = await prisma.user.count({
            where: {
                username
            }
        });
        if(usernameExists > 0){
            return  badRequest("This user name has been taken");
        }
        // check if email exists
        const emailExists = await prisma.user.count({
            where: {
                email
            }
        });
        if(emailExists > 0){
            return  badRequest("Email already exists");
        }

        const user = await prisma.user.create({
            data: {
                fullname, email, username, password: hashedPassword
            },
            select: { username: true, email: true, fullname: true }
        })
        if (user){
            return resourceCreated(user);
        }else{
            return badRequest("An error occured while trying to create the user. Please try again.");
        }

            return NextResponse.json({})
    } catch (e) {
        return internalServerError(e)
    }
    // const unameExist 
}