import prisma from "@/app/db";
import { badRequest, internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const skill_id = data.skill_id;
        const userId = await getUserId();

        if (!skill_id) {
            return badRequest("invalid request");
        }

        const delete_skill = await prisma.userSkills.delete({
            where: {
                id:skill_id,
                userId
            }
        })
        if (delete_skill) {
            console.log("skills deleted")
            return resourceDeleted()
        }
        return internalServerError("Unkown error on aprx line 22")

    } catch (e) {
        return internalServerError(e);
    }
}