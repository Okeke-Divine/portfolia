import { _console_log } from "@/utils/console";
import { badRequest, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";
import { cloudinaryUpload } from "@/utils/uploadFile";

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

        const userId = await getUserId();

        // upload project image if it's exists
        if (projectImage != "undefined") {
            const allowedTypes = ["image/jpeg", "image/png"];

            if (!allowedTypes.includes(projectImage.type)) {
                return badRequest("Image file type is not allowed");
            }

            // check if it's less than 500kb
            const maxSize = 3 * 1024 * 1024; //3mb in bytes
            if (projectImage.size > maxSize) {
                return badRequest("Image must be less than 3 mb");
            }

            const uploadFile = await cloudinaryUpload(picture, [
                "picture",
                "portfolia-picture",
                "project-picture",
                "portfolia",
                "projectPicture-user-" + userId
            ]);

            const fileUrl = uploadFile.fileUrl;
            const public_id = uploadFile.options.public_id;

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