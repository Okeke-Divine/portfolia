import { internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.json();
        console.log(data);
        return resourceCreated({})
    } catch (e) {
        return internalServerError(e)
    }
}