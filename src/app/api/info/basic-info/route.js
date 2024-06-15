import prisma from "@/app/db";
import { badRequest, internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const userId = await getUserId();

        const { fullname, heroTitle, profession, bio, about } = data;

        //validation
        if (!fullname || !heroTitle || !profession || !bio || !about || fullname.length < 3 || heroTitle.length < 5 || profession.length < 3 || bio.length < 3 || bio.length > 250 || about.length < 10) {
            return badRequest("");
        }

        const newData = {
            fullname, heroTitle, profession, bio, about
        }

        const updated_details = await prisma.userDetails.upsert({
            where: {
                userId
            },
            update: newData,
            create: {
                userId,
                ...newData
            }
        })

        if (updated_details) {
            return resourceUpdated({})
        } else {
            return internalServerError("Upsert error")
        }

        console.log(updated_details);
    } catch (e) {
        return internalServerError(e)
    }
}