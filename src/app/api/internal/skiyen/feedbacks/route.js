import prisma from "@/app/db"
import { internalServerError } from "@/utils/prebuiltApiResponse"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const feedbacks = await prisma.feedback.findMany({
            select: {
                rating: true,
                message: true
            }
        });
        return NextResponse.json({ message: "success", data: feedbacks })
    } catch (e) {
        return internalServerError(e)
    }
}