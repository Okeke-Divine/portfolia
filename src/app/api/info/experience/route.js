import prisma from "@/app/db";
import { badRequest, conflict, internalServerError, resourceCreated, resourceLoaded } from "@/utils/prebuiltApiResponse"
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
        const { school, degree, fieldOfStudy, startYear, endYear } = data;

        if (!school || !degree || !fieldOfStudy || !startYear) {
            return badRequest("All fields are required");
        }

        const userId = await getUserId();

        // insert into the data base if social type doesn't exists
        const inserted_education = await prisma.userEducation.create({
            data: {
                userId,
                school,
                degree,
                fieldOfStudy,
                startYear: parseInt(startYear),
                endYear: parseInt(endYear),
            },
            select: {
                id: true,
                school: true,
                degree: true,
                fieldOfStudy: true,
                startYear: true,
                endYear: true
            }
        })

        if (inserted_education) {
            return resourceCreated(inserted_education)
        } else {
            return internalServerError("Error inserting education")
        }
    } catch (e) {
        return internalServerError(e)
    }
}