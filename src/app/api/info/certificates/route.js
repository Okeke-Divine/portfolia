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
        const { name, issuer, issueMonth, issueYear } = data;

        if (!name || !issuer || !issueMonth || !issueYear) {
            return badRequest("All fields are required");
        }

        const userId = await getUserId();

        // insert into the data base if social type doesn't exists
        const inserted_certifcate = await prisma.userCertificate.create({
            data: {
                userId,
                name,
                issuer,
                issueMonth,
                issueYear: parseInt(issueYear),
            },
            select: {
                id: true,
                name: true,
                issuer: true,
                issueMonth: true,
                issueYear: true,
            }
        })

        if (inserted_certifcate) {
            return resourceCreated(inserted_certifcate)
        } else {
            return internalServerError("Error inserting language")
        }
    } catch (e) {
        return internalServerError(e)
    }
}