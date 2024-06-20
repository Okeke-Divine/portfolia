import prisma from "@/app/db";

const ResumeEducation = async ({ userId }) => {

    const educations = await prisma.userEducation.findMany({
        where: { userId },
    });

    return (
        <>
            {educations.length > 0 ? (
                <>
                    <div className="app-resume-padding app-resume-container-margin-top">
                        <div className="divider divider-start">
                            <h3 className="uppercase">Education</h3>
                        </div>
                        <div className="">
                            {educations.map((education, index) => (
                                <div key={index} className="mb-2">
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

export default ResumeEducation