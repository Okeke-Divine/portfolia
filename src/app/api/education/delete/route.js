import prisma from "@/app/db";
import { badRequest, internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { education_id } = data;

        if (!education_id || !parseInt(education_id)) {
            return badRequest("invalid certificate_id")
        }

        const delete_education = await prisma.userEducation.delete({
            where: {
                id: education_id
            }
        })
        if (delete_education) {
            return resourceDeleted();
        }

        return internalServerError("failed to delete an education")
    } catch (e) {
        return internalServerError(e);
    }
};
