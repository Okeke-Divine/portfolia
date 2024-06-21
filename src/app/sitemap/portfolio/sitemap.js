import prisma from "@/app/db";
import { NEXT_PUBLIC_BASE_URL } from "@/constants/shared/constant";


const changeFrequency = "daily";

const currentTime = new Date().toISOString();


export default async function sitemap() {
    const posts = await prisma.user.findMany({
        select: {
            username: true,
        },
    });

    const users = posts.map(({ username }) => ({
        url: `${NEXT_PUBLIC_BASE_URL}/i/` + username,
        lastModified: currentTime,
        changeFrequency: changeFrequency,
    }));

    return [...users];
}
