import prisma from "@/app/db";
import { internalServerError, resourceLoaded } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session"

export const GET = async () => {
    try {
        const userId = await getUserId();
        const data = await prisma.user.findFirst({
            where: { id: userId }
            , select: {
                profilePicture_url: true
            }
        });
        return resourceLoaded(data);
    } catch (e) {
        return internalServerError(e)
    }
}