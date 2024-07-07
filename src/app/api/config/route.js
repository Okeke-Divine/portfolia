import { internalServerError } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try {
        const userId = await getUserId("force");
        const { name, value } = data;

    } catch (e) {
        return internalServerError(e)
    }
}