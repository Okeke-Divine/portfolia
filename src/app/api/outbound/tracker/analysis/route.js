import prisma from "@/app/db";
import { internalServerError, resourceLoaded } from "@/utils/prebuiltApiResponse";
import { userAgent } from "next/server";

export const POST = async (req) => {
    try {
        const data = await req.json();
        console.log(data);
        const { username, actionType } = data;

        if (!username || !actionType) {
            return resourceLoaded({});
        }

        //portfolioView
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

        //resumeView
        if (actionType === "resumeView") {
            // Check if user exists
            const user = await prisma.user.findFirst({ where: { username }, select: { id: true } });

            if (user !== null) {
                // Get the user id
                const userId = user.id;

                // Get the previous count
                const userAnalytics = await prisma.userAnalytics.findFirst({
                    where: { userId },
                    select: { resumeViewCount: true }
                });

                const resumeViewCount = userAnalytics ? userAnalytics.resumeViewCount : 0;

                // Upsert the previous count or create a new record
                await prisma.userAnalytics.upsert({
                    where: { userId },
                    update: { resumeViewCount: resumeViewCount + 1 },
                    create: {
                        userId, resumeViewCount: 1
                    }
                });
            }
        }

        // portfolioClick
        if (actionType === "portfolioClick") {
            // Check if user exists
            const user = await prisma.user.findFirst({ where: { username }, select: { id: true } });

            if (user !== null) {
                // Get the user id
                const userId = user.id;

                // Get the previous count
                const userAnalytics = await prisma.userAnalytics.findFirst({
                    where: { userId },
                    select: { portfolioClickCount: true }
                });

                const portfolioClickCount = userAnalytics ? userAnalytics.portfolioClickCount : 0;

                // Upsert the previous count or create a new record
                await prisma.userAnalytics.upsert({
                    where: { userId },
                    update: { portfolioClickCount: portfolioClickCount + 1 },
                    create: {
                        userId, portfolioClickCount: 1
                    }
                });
            }
        }

         // resumeClick
         if (actionType === "resumeClick") {
            // Check if user exists
            const user = await prisma.user.findFirst({ where: { username }, select: { id: true } });

            if (user !== null) {
                // Get the user id
                const userId = user.id;

                // Get the previous count
                const userAnalytics = await prisma.userAnalytics.findFirst({
                    where: { userId },
                    select: { resumeClickCount: true }
                });

                const resumeClickCount = userAnalytics ? userAnalytics.resumeClickCount : 0;

                // Upsert the previous count or create a new record
                await prisma.userAnalytics.upsert({
                    where: { userId },
                    update: { resumeClickCount: resumeClickCount + 1 },
                    create: {
                        userId, resumeClickCount: 1
                    }
                });
            }
        }

        return resourceLoaded({});
    } catch (e) {
        return internalServerError(e);
    }
};
