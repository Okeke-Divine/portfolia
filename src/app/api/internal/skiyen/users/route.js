import prisma from "@/app/db"
import { internalServerError } from "@/utils/prebuiltApiResponse"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const users = await prisma.user.findMany({
            select: {
                username: true
            }
        });
        return NextResponse.json({ message: "success", data: users })
    } catch (e) {
        return internalServerError(e)
    }
}