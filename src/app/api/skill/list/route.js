import prisma from "@/app/db";
import { internalServerError } from "@/utils/prebuiltApiResponse"
import { getUserId } from "@/utils/session";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const userId = await getUserId();
        const skills = await prisma.userSkills.findMany({
            where: { userId },
        });

        return NextResponse.json({ message: "ok", data: skills }, { status: 200 })

    } catch (e) {
        return internalServerError(e);
    }
}