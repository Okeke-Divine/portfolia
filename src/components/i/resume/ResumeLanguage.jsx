import prisma from "@/app/db";

const ResumeLanguage = async ({ userId }) => {

    const skills = await prisma.userLanguage.findMany({
        where: { userId },
    });

    return (
        <div>ResumeLanguage</div>
    )
}

export default ResumeLanguage