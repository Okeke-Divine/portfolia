import prisma from "@/app/db";

const ResumeSkills = async ({ userId }) => {
  const skills = await prisma.userSkills.findMany({
    where: { userId },
  });

  return (
    <>
      {skills.length > 0 ? (
        <>
          <div className="app-resume-padding">
            <div className="divider divider-start">
              <h3 className="uppercase">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="badge badge-outline badge-md">
                  {skill.skill_name}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ResumeSkills;
