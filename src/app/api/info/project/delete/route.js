import prisma from "@/app/db";
import { internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.json();
        console.log(data);

        const { project_id } = data;

        if (!project_id || !parseInt(project_id)) {
            return badRequest("project id required/invalid project id")
        }

        const delete_project = await prisma.userProjects.delete({
            where: {
                id: project_id
            }
        })
        if (delete_project) {
            return resourceDeleted();
        }

        return internalServerError("failed to delete a social skill")
    } catch (e) {
        return internalServerError(e)
    }
}