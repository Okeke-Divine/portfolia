import { internalServerError, resourceLoaded } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.json()
        console.log(data)
        return resourceLoaded({})
    } catch (e) {
        return internalServerError(e)
    }
}