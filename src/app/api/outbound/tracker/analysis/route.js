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

            // check if user exist
            const user = await prisma.user.findFirst({ where: { username }, select: { id: true } });

            if (user !== null) {
                // get the user id
                const userId = user.id;
                //get the previeous count
                const portfolioViewCount = await prisma.userAnalytics.findFirst({ where: { userId }, select: { portfolioViewCount: true } }) || 0;
                console.log(portfolioViewCount);
                // upsert the previous count or create a new record
                const updatePortfolioViewCount = await prisma.userAnalytics.upsert({
                    where: { userId },
                    update: { portfolioViewCount: portfolioViewCount + 1 },
                    insert: {
                        userId, portfolioViewCount: 1
                    }
                })
            }
        }

        return resourceLoaded({})
    } catch (e) {
        return internalServerError(e)
    }
}