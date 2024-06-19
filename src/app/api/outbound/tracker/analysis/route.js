import prisma from "@/app/db";
import { internalServerError, resourceLoaded } from "@/utils/prebuiltApiResponse"
import { userAgent } from "next/server";

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
            const user = await prisma.user.findFirst({ where: { username }, select: { id: true } });
            if (user !== null) {
                const userId = user.id;
            }
            console.log(user);
        }

        return resourceLoaded({})
    } catch (e) {
        return internalServerError(e)
    }
}