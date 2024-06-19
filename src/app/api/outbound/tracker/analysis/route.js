import prisma from "@/app/db";
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

        if (actionType == "portfolioView") {
            const usernameExist = await prisma.user.findFirst({ where: { username }, select: { userId: true } });
            console.log(usernameExist);
        }

        return resourceLoaded({})
    } catch (e) {
        return internalServerError(e)
    }
}