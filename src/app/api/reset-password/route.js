import { hashPassword } from "@/utils/hashPassword";
import { badRequest, internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse";
import prisma from "@/app/db";
import { verifyResetToken } from "@/utils/main";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { email, password, token } = data;

        // Validate input
        if (!email || !password || !token) {
            return badRequest("All fields are required");
        }

        // Verify the reset token
        const tokenVerification = await verifyResetToken(token);

        if (!tokenVerification.valid) {
            return badRequest(tokenVerification.message);
        }

        // Find user by email (assuming email is unique)
        const user = await prisma.user.findUnique({
            where: {
                email: email.toLowerCase(), // Normalize email case
            },
        });

        if (!user) {
            return badRequest("User not found");
        }

        // Check if token.userId and user.id match (ensure same user)
        if (tokenVerification.userId !== user.id) {
            return badRequest("Invalid token for this user");
        }

        // Hash the new password
        const hashedPassword = await hashPassword(password);

        // Update the user's password
        const updatedUser = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                password: hashedPassword,
            },
        });

        if (updatedUser) {
            return resourceUpdated({}); // Password updated successfully
        } else {
            return internalServerError("Error while trying to change user password");
        }

    } catch (error) {
        console.error("Error resetting password:", error);
        return internalServerError("Internal server error");
    }
};
