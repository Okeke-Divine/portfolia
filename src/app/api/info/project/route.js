import prisma from "@/app/db";
import { _console_log } from "@/utils/console";
import { badRequest, internalServerError, resourceCreated, resourceLoaded } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";
import { cloudinaryUpload } from "@/utils/uploadFile";

export const GET = async (req) => {
    try {
        const userId = await getUserId()
        const projects = await prisma.userProjects.findMany({
            where: {
                userId,
            },
            select: {
                id: true,
                imageUrl: true,
                title: true,
                description: true,
                tags: true,
                url: true,
            },
        });
        return resourceLoaded(projects)
    } catch ((e) => {
        return internalServerError(e)
    })
}

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
        let fileUrl;
        let public_id;

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

            const uploadFile = await cloudinaryUpload(projectImage, [
                "picture",
                "portfolia-picture",
                "project-picture",
                "portfolia",
                "projectPicture-user-" + userId
            ]);

            fileUrl = uploadFile.fileUrl;
            public_id = uploadFile.options.public_id;
        }

        console.log("fileUrl: ", fileUrl);
        console.log("public_id: ", public_id);

        const project = await prisma.userProjects.create({
            data: {
                userId,
                imageUrl: fileUrl != undefined ? fileUrl : "",
                imagePublicId: public_id != undefined ? public_id : "",
                title: projectTitle,
                description: projectDesc,
                tags: projectTags,
                url: projectUrl
            }, select: {
                id: true,
                imageUrl: true,
                title: true,
                description: true,
                tags: true,
                url: true
            }
        })


        if (project) {
            return resourceCreated({ project })
        } else {
            return internalServerError("Could not create project")
        }

    } catch (e) {
        return internalServerError(e)
    }
}