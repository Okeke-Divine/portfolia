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
        const resetUrl = process.env.NEXT_PUBLIC_BASE_URL + `/reset-password?token=${token}`;
        await sendEmail({
            to: email,
            subject: "Password Reset | Portfoliia",
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Password Reset | Portfoliia</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        text-align: center;
                    }
                    .content {
                        text-align: center;
                        padding: 20px;
                    }
                    .content p {
                        font-size: 16px;
                        color: #555;
                    }
                    .content a {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 10px 20px;
                        color: #fff;
                        background-color: rgb(34,197,94);
                        text-decoration: none;
                        border-radius: 5px;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 30px;
                        font-size: 12px;
                        color: #aaa;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="content">
                    <p>Hello,</p>
                    <p>You recently requested to reset your password for your Portfoliia account. Click the button below to reset your password. Please note that this link will expire in 5 minutes. If you didn't make this request, you can safely ignore this email.</p>
                    <p>To reset your password, please click the button below. This link will expire in 5 minutes.</p>
                        <a href="${resetUrl}">Reset Password</a>
                    </div>
                    <div class="footer">
                        <p>Portfoliia, a product of Skiyen</p>
                    </div>
                </div>
            </body>
            </html>
            `
        });

        return resourceCreated({});
    } catch (e) {
        return internalServerError(e.message);
    }
};
