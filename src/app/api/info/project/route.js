import { badRequest, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.formData();
        const projectTitle = data.get("projectTitle");
        const projectTags = data.get("projectTags");
        const projectUrl = data.get("projectUrl");
        const projectDesc = data.get("projectDesc");
        const projectImage = data.get("projectImage");

        if (!projectTitle || !projectDesc) {
            return badRequest("Project title and description is required");
        }

        console.log(data);

        return resourceCreated({})
    } catch (e) {
        return internalServerError(e)
    }
}