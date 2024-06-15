import { badRequest, conflict, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { socialType, socialValue } = data;

        if (!socialType || !socialValue) {
            return badRequest("social type/value is required");
        }
        console.log(data);
        return resourceCreated({})
    } catch (e) {
        return internalServerError(e)
    }
}