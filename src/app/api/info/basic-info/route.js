import { internalServerError } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {

    try {
        return internalServerError("")
    } catch (e) {
        return internalServerError(e)
    }
}