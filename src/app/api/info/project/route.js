import { _console_log } from "@/utils/console";
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

        // upload project image if it's exists
        if (projectImage != "undefined") {
            const allowedTypes = ["image/jpeg", "image/png"];

            if (!allowedTypes.includes(projectImage.type)) {
                return badRequest("Image file type is not allowed");
            }

            // check if it's less than 500kb
            const projectImage = 3 * 1024 * 1024; //3mb in bytes
            if (picture.size > maxSize) {
                return badRequest("Image must be less than 3 mb");
            }
        } else {
            _console_log("Pic not exists")
        }


        if (true) {
            return resourceCreated({})
        } else {
            return internalServerError("Could not create project")
        }

    } catch (e) {
        return internalServerError(e)
    }
}