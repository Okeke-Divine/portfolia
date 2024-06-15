import { badRequest, internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"
import { cloudinaryUpload } from "@/utils/uploadFile";

export const POST = async (req) => {
    try {
        const data = await req.formData();
        const picture = data.get("picture");

        const allowedTypes = ["image/jpeg", "image/png"];

        if (!allowedTypes.includes(picture.type)) {
            return badRequest("imageFileNotAllowed");
        }

        // check if it's less than 500kb
        const maxSize = 3 * 1024 * 1024; //3mb in bytes
        if (picture.size > maxSize) {
            return badRequest("imageFileSizeError");
        }

        const uploadFile = await cloudinaryUpload(picture, [
            "picture",
            "portfolia-picture",
            "profile-picture",
            "portfolia"
        ]);

        console.log(uploadFile);

        console.log(data);
        console.log("test");
        return resourceUpdated({})
    } catch (e) {
        return internalServerError(e)
    }
}