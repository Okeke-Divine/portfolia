import prisma from "@/app/db";
import { badRequest, conflict, internalServerError, resourceCreated, resourceLoaded } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const GET = async () => {
    try {
        const userId = await getUserId()
        const certificates = await prisma.userCertificate.findMany({
            where: {
                userId,
            },
            select: {
                id: true,
                name: true,
                issuer: true,
                issueMonth: true,
                issueYear: true,
            }
        }) || [];
        return resourceLoaded(certificates)
    } catch (e) {
        return internalServerError("")
    }
}

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { name, issuer, issueDate } = data;

        if (!language || !proficiency) {
            return badRequest("All fields are required");
        }

        const userId = await getUserId();

        // insert into the data base if social type doesn't exists
        const inserted_language = await prisma.userLanguage.create({
            data: {
                userId,
                name: language,
                proficiency
            },
            select: {
                id: true,
                name: true,
                proficiency: true
            }
        })

        if (inserted_language) {
            return resourceCreated(inserted_language)
        } else {
            return internalServerError("Error inserting language")
        }
    } catch (e) {
        return internalServerError(e)
    }
}