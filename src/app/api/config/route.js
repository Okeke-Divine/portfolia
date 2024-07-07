import prisma from "@/app/db";
import { _console_log } from "@/utils/console";
import { badRequest, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse";
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try {
        const userId = await getUserId("force");
        const { name, value } = req.json();

        // Check if required fields are present
        if (!name || value === undefined || !userId) {
            return badRequest("Missing required fields in request body");
        }

        const stringValue = String(value);

        // Check for existing userConfig entry
        let userConfigEntry = await prisma.userConfig.findFirst({
            where: {
                userId: parseInt(userId),
                name: name,
            },
        });

        if (userConfigEntry) {
            userConfigEntry = await prisma.userConfig.update({
                where: { id: userConfigEntry.id },
                data: { value: stringValue },
            });
        } else {
            userConfigEntry = await prisma.userConfig.create({
                data: {
                    userId: parseInt(userId),
                    name: name,
                    value: stringValue,
                },
            });
        }

        return resourceCreated(userConfigEntry);
    } catch (e) {
        _console_log("Error processing user config update:", e);
        return internalServerError(e);
    }
};