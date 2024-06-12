import { badRequest, internalServerError, resourceCreated, unAuthorized } from "@/utils/prebuiltApiResponse";
import { getUserId } from "../../../utils/session";
import prisma from "@/app/db";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { rating, message } = data;

        if (!rating || !message || message.lenght < 5) {
            return badRequest("All fields are required");
        }

        try {
            const userId = await getUserId();
            if (userId == null) {
                return unAuthorized();
            }
            const feedback = await prisma.feedback.create({
                data: {
                    userId,
                    rating,
                    message
                }, select: {}
            })
            return resourceCreated({})
        } catch (e) {
            return internalServerError(e);
        }

    } catch (e) {
        return internalServerError(e);
    }
}