import prisma from "@/app/db";
import { badRequest, internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try{
        const data = await req.json();
        const skill_name = data.skill_name;
        const userId = await getUserId();

        if(!skill_name){
            return badRequest("invalid request");
        }

        const delete_skill = await prisma.userSkills.delete_skill({
            where: {
                skill_name,
                userId
            }
        })
        if(delete_skill){
            return resourceDeleted()
        }
        return internalServerError("Unkown error on aprx line 22")

    }catch(e){
        return internalServerError(e);
    }
}