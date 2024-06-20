import prisma from "@/app/db";
import { badRequest, internalServerError, resourceCreated, resourceLoaded } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const GET = async () => {
    try {
        const userId = await getUserId()
        const experiences = await prisma.userExperience.findMany({
            where: {
                userId,
            },
            select: {
                id: true,
                company: true,
                position: true,
                description: true,
                startMonth: true,
                startYear: true,
                endMonth: true,
                endYear: true
            }
        }) || [];
        return resourceLoaded(experiences)
    } catch (e) {
        return internalServerError("")
    }
}

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { position, company, description, startMonth, startYear, endMonth, endYear } = data;

        if (!position || !company || !description || !startMonth || !startYear) {
            return badRequest("All fields are required");
        }

        const userId = await getUserId();

        const inserted_experience = await prisma.userExperience.create({
            data: {
                userId,
                position,
                company,
                description,
                startMonth,
                startYear: parseInt(startYear),
                endMonth,
                endYear: parseInt(endYear)
            },
            select: {
                id: true,
                company: true,
                position: true,
                description: true,
                startMonth: true,
                startYear: true,
                endMonth: true,
                endYear: true
            }
        })

        if (experiences) {
            return resourceCreated(experiences)
        } else {
            return internalServerError("Error inserting experience")
        }
    } catch (e) {
        return internalServerError(e)
    }
}