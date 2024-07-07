import prisma from "@/app/db";
import { v4 as uuidv4 } from "uuid";
import { addMinutes } from "date-fns";
import { sendEmail } from "@/utils/emailService";
import { badRequest, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse";

export const POST = async (req) => {
    try {
        const { email } = await req.json();

        if (!email) {
            return badRequest("Email is required");
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return badRequest("User not found");
        }

        const token = uuidv4();
        const expiresAt = addMinutes(new Date(), 5);

        await prisma.passwordResetToken.create({
            data: {
                userId: user.id,
                token,
                expiresAt,
            },
        });

        // Send email with the reset token (URL should contain the token)
        const resetUrl = process.env.NEXT_PUBLIC_BASE_URL+`/reset-password?token=${token}`;
        await sendEmail({
            to: email,
            subject: "Password Reset | Portfoliia",
            html: `Click <a href="${resetUrl}">here</a> to reset your password. This link will expire in 5 minutes.`,
        });

        return resourceCreated("Password reset email sent");
    } catch (e) {
        return internalServerError(e.message);
    }
};
