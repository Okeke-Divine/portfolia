import prisma from "@/app/db";
import { cloudinaryDelete } from "@/utils/deleteFile";
import { badRequest, internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";
import { cloudinaryUpload } from "@/utils/uploadFile";

export const POST = async (req) => {
    try {
        const data = await req.formData();
        const picture = data.get("picture");

        const userId = await getUserId();

        const allowedTypes = ["image/jpeg", "image/png"];

        if (!allowedTypes.includes(picture.type)) {
            return badRequest("Image file type is not allowed");
        }

        // check if it's less than 500kb
        const maxSize = 3 * 1024 * 1024; //3mb in bytes
        if (picture.size > maxSize) {
            return badRequest("Image must be less than 3 mb");
        }

        // check if user already has a profile picture
        const profileVerify = await prisma.user.findFirst({
            where: {
                id: userId,
                profilePicture_url: {
                    not: "",
                }
            }, select: {
                profilePicture_assetId: true,
            }
        })



        if (profileVerify) {
            const delete_file = await cloudinaryDelete(profileVerify.profilePicture_assetId)
            if (delete_file != true) {
                return badRequest("Could not delete user old profile image")
            }
        }


        const uploadFile = await cloudinaryUpload(picture, [
            "picture",
            "portfolia-picture",
            "profile-picture",
            "portfolia",
            "profilePicture-user-" + userId
        ]);

        const fileUrl = uploadFile.fileUrl;
        const asset_id = uploadFile.options.public_id;


        // update the profile picture data
        const saveFileDetails = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                profilePicture_url: fileUrl,
                profilePicture_assetId: asset_id
            },
            select: {
                profilePicture_url: true,
                profilePicture_assetId: true
            }
        })

        if (saveFileDetails) {
            return resourceUpdated(saveFileDetails)
        } else {
            return internalServerError("Profile picture was not uploaded")
        }
    } catch (e) {
        return internalServerError(e)
    }
}