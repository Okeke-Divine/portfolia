import prisma from "@/app/db";
import { badRequest, conflict, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try{
        const data = await req.json();
        const skill_name = data.skill_name;
        const userId = await getUserId();

        if(!skill_name || skill_name.length < 3){
            return badRequest("invalid skill name format");
        }

        //check if skills exist
        const skillExists = await prisma.userSkills.count({
            where: {
                userId,
                skill_name
            }
        })
        console.log(skillExists);
        if(skillExists > 0){
            return conflict("Skill already exist")
        }

        const new_skill = await prisma.userSkills.create({
            data: {
                skill_name,
                userId
            }
        })
        if(new_skill){
            return resourceCreated({})
        }
        return internalServerError("Unkown error on aprx line 22")

    }catch(e){
        return internalServerError(e);
    }
}