import prisma from "@/app/db";

const PortfolioExperience = async ({ userId }) => {

    const experiences = await prisma.userExperience.findMany({
        where: { userId },
    });

    return (
        <>
            {experiences.length > 0 ? (
                <>
                    <div className="mt-2">
                        <div className="divider divider-start">
                            <h3 className="uppercase">Experience</h3>
                        </div>
                        <div className="">
                            {experiences.map((experience, index) => (
                                <div key={index} className="mb-2">
                                    <div className="">
                                        <span className="font-bold">{experience.position}</span> - {experience.company}
                                    </div>
                                    <div className="text-gray-600 italic">
                                        {experience.startMonth} {experience.startYear} {(experience.endMonth != "" && experience.endYear != null) ? ` - ${experience.endMonth} ${experience.endYear}` : ""}
                                    </div>
                                    <div className="text-gray-600 mt-1 whitespace-pre-line">
                                        {experience.description}
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

export default PortfolioExperience