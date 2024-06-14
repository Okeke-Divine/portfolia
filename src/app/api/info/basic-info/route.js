import prisma from "@/app/db";
import { badRequest, internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const userId = await getUserId();

        const { fullname, heroTitle, profession, bio, about } = data;
        if (!fullname || !heroTitle || !profession || !bio || !about || fullname.length < 3 || heroTitle.length < 5 || profession.length < 3 || bio.length < 3 || bio.length > 25 || about.length < 10) {
            return badRequest("");
        }

        const updated_details = await prisma.userDetails.update({
            data: {
                fullname, heroTitle, profession, bio, about
            }
        })

        console.log(data);
        return resourceUpdated({})
    } catch (e) {
        return internalServerError(e)
    }
}