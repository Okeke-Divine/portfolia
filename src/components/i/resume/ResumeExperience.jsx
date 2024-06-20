import prisma from "@/app/db";

const ResumeExperience = async ({ userId }) => {

    const experiences = await prisma.userExperience.findMany({
        where: { userId },
    });

    return (
        <>
            {experiences.length > 0 ? (
                <>
                    <div className="app-resume-padding app-resume-container-margin-top">
                        <div className="divider divider-start">
                            <h3 className="uppercase">Experience</h3>
                        </div>
                        <div className="">
                            {experiences.map((experience, index) => (
                                <div key={index} className="mb-2">
                                    <div className="">
                                        <span className="font-bold">{experience.position}</span> - {experience.company}
                                    </div>
                                    <div className='text-gray-600'>
                                        {education.school} | <span className="italic">{education.startYear} {education.endYear != null ? ` - ${education.endYear}` : ""}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : ""}
        </>
    )
}

export default ResumeExperience