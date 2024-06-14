import { internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {

    try {
        return resourceUpdated({})
    } catch (e) {
        return internalServerError(e)
    }
}