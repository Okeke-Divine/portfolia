import { internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { fullname, heroTitle, profession, bio, about } = data;
        console.log(data);
        return resourceUpdated({})
    } catch (e) {
        return internalServerError(e)
    }
}