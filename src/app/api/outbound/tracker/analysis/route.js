import { internalServerError, resourceLoaded } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.json()
        //destructure
        const username = data.username;
        const actionType = data.actionType;

        if (!username || !actionType) {
            return resourceLoaded({});
        }

        return resourceLoaded({})
    } catch (e) {
        return internalServerError(e)
    }
}