import prisma from "@/app/db";
import { badRequest, conflict, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const GET = async () => {
    try {
        const userId = await getUserId()
        const socials = await prisma.userSocialInfo.findMany({
            where: {
                userId,
            },
        }) || [];
        return
    } catch (e) {
        return internalServerError("")
    }
}

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { socialType, socialValue } = data;

        if (!socialType || !socialValue) {
            return badRequest("social type/value is required");
        }

        const userId = await getUserId();

        if (socialType != "other") {
            // check if social type already exists
            const socialType_exists = await prisma.userSocialInfo.count({
                where: {
                    userId,
                    name: socialType
                }
            })

            if (socialType_exists > 0) {
                return conflict("Social type already exits");
            }
        }

        // insert into the data base if social type doesn't exists
        const socialInfo = await prisma.userSocialInfo.create({
            data: {
                userId,
                name: socialType,
                value: socialValue
            }
        })

        if (socialInfo) {
            return resourceCreated({})
        } else {
            return internalServerError("Error inserting social info")
        }
    } catch (e) {
        return internalServerError(e)
    }
}