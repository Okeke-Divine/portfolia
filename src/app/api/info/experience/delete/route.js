import prisma from "@/app/db";
import { badRequest, internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { experience_id } = data;

        if (!experience_id || !parseInt(experience_id)) {
            return badRequest("invalid experience_id")
        }

        const delete_experience = await prisma.userExperience.delete({
            where: {
                id: experience_id
            }
        })
        if (delete_experience) {
            return resourceDeleted();
        }

        return internalServerError("failed to delete an experience")
    } catch (e) {
        return internalServerError(e);
    }
};
