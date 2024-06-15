import prisma from "@/app/db";
import { badRequest, conflict, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { socialType, socialValue } = data;

        if (!socialType || !socialValue) {
            return badRequest("social type/value is required");
        }

        const userId = await getUserId();

        // check if social type already exists
        const socialType_exists = await prisma.userSocialInfo.count({
            where: {
                userId
            }
        })

        if (socialType_exists > 0) {
            return conflict("Social type already exits");
        }

        // insert into the data base if social type doesn't exists
        const socialInfo = await prisma.userSocialInfo.create({
            data: {
                name: socialType,
                value: socialValue
            }
        })


        console.log(data);
        return resourceCreated({})
    } catch (e) {
        return internalServerError(e)
    }
}