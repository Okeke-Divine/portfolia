import prisma from "@/app/db";
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
                userId,
                profilePicture_url: {
                    not: "",
                }
            }
        })

        console.log(profileVerify);

        const uploadFile = await cloudinaryUpload(picture, [
            "picture",
            "portfolia-picture",
            "profile-picture",
            "portfolia"
        ]);

        const fileUrl = uploadFile.fileUrl;
        const asset_id = uploadFile.options.asset_id;

        // update the profile picture data
        const saveFileDetails = await prisma.user.update({
            where: {
                userId
            },
            data: {
                profilePicture_url: fileUrl,
                profilePicture_assetId: asset_id
            },
            select: {
                profilePicture_url: true,
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