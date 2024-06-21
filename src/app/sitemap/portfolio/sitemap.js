import { NEXT_PUBLIC_BASE_URL } from "@/constants/shared/constant";


const changeFrequency = "daily";

export default async function sitemap() {
    const posts = await prisma.user.findMany({
        select: {
            username: true,
            createdAt: true
        },
    });

    const users = posts.map(({ slug, createdAt }) => ({
        url: `${NEXT_PUBLIC_BASE_URL}/i/` + username,
        lastModified: createdAt,
        changeFrequency: changeFrequency,
    }));

    return [...users];
}
