import { internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        return resourceCreated({})
    } catch (e) {
        return internalServerError(e)
    }
}