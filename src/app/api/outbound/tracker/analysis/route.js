import prisma from "@/app/db";
import { internalServerError, resourceLoaded } from "@/utils/prebuiltApiResponse";
import { userAgent } from "next/server";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { username, actionType } = data;

        if (!username || !actionType) {
            return resourceLoaded({});
        }

        if (actionType === "portfolioView") {
            // Check if user exists
            const user = await prisma.user.findFirst({ where: { username }, select: { id: true } });

            if (user !== null) {
                // Get the user id
                const userId = user.id;

                // Get the previous count
                const userAnalytics = await prisma.userAnalytics.findFirst({
                    where: { userId },
                    select: { portfolioViewCount: true }
                });

                const portfolioViewCount = userAnalytics ? userAnalytics.portfolioViewCount : 0;

                // Upsert the previous count or create a new record
                await prisma.userAnalytics.upsert({
                    where: { userId },
                    update: { portfolioViewCount: portfolioViewCount + 1 },
                    create: {
                        userId, portfolioViewCount: 1
                    }
                });
            }
        }

        return resourceLoaded({});
    } catch (e) {
        return internalServerError(e);
    }
};
