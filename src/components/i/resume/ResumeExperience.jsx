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
                            {educations.map((education, index) => (
                                <div key={index} className="mb-2">
                                    <div className="font-bold">
                                        {education.degree} {education.fieldOfStudy}
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