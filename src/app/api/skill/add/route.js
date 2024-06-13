import prisma from "@/app/db";
import { badRequest, internalServerError } from "@/utils/prebuiltApiResponse"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try{
        const data = await req.json();
        const skill_name = data.skill_name;

        if(!skill_name || skill_name.length < 3){
            return badRequest("invalid skill name format");
        }

        const new_skill = await prisma.userSkills.create({
            data: {
                skill_name
            }
        })

    }catch(e){
        return internalServerError(e);
    }
    return NextResponse.json({})
}