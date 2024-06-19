import { internalServerError } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.json()
        console.log(data)
    } catch (e) {
        return internalServerError(e)
    }
}