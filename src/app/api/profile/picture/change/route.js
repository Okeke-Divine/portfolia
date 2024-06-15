import { internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.formData();
        console.log(data);
        console.log("test");
        return resourceUpdated({})
    } catch (e) {
        return internalServerError(e)
    }
}