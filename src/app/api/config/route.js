// Assuming this is your API route handler
import prisma from "@/app/db";
import { _console_log } from "@/utils/console";
import { badRequest, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"; // Adjust imports as per your project structure
import { getUserId } from "@/utils/session";

export const POST = async (req) => {
    try {
        const userId = await getUserId("force"); // Assuming getUserId retrieves the userId
        const { name, value } = req.body; // Assuming the request body contains 'name' and 'value'

        if (!name || !value || !userId) {
            return badRequest("Bad Request");
        }

        // Convert value to string if it's not already
        const stringValue = String(value);

        // Check if there's an existing userConfig entry
        let userConfigEntry = await prisma.userConfig.findFirst({
            where: {
                userId: parseInt(userId), // Ensure userId is converted to integer if needed
                name: name,
            },
        });

        // If userConfigEntry exists, update its value; otherwise, create a new entry
        if (userConfigEntry) {
            userConfigEntry = await prisma.userConfig.update({
                where: { id: userConfigEntry.id },
                data: { value: stringValue }, // Ensure value is saved as string
            });
        } else {
            userConfigEntry = await prisma.userConfig.create({
                data: {
                    userId: parseInt(userId),
                    name: name,
                    value: stringValue, // Ensure value is saved as string
                },
            });
        }

        return resourceCreated(userConfigEntry); // Return the updated or created userConfig entry
    } catch (e) {
        _console_log("Error processing user config update:", e);
        return internalServerError(e); // Handle errors appropriately
    }
};
