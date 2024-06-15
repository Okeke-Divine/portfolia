import { internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = req.FormData();
        console.log(data);
        return resourceUpdated({})
    } catch (e) {
        return internalServerError(e)
    }
}