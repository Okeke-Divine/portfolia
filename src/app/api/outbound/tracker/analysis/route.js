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
                const portfolioViewCount = await prisma.userAnalytics.findFirst({ where: { userId }, select: { portfolioViewCount: true } }) || 0;
                console.log(portfolioViewCount);
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