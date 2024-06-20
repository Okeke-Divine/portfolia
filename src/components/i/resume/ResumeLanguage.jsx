import prisma from "@/app/db";

const ResumeLanguage = async ({ userId }) => {

    const languages = await prisma.userLanguage.findMany({
        where: { userId },
    });

    return (
        <>
            {languages.length > 0 ? (
                <>
                    <div className="app-resume-padding app-resume-container-margin-top">
                        <div className="divider divider-start">
                            <h3 className="uppercase">Languages</h3>
                        </div>
                        <div className="flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2">
                            {languages.map((language, index) => (
                                <div key={index} className="badge badge-outline badge-md">
                                    {language.name} - {language.proficiency}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : ""}
        </>
    )
}

export default ResumeLanguage