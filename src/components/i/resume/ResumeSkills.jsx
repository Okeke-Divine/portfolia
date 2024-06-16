import prisma from "@/app/db";

const ResumeSkills = async ({ userId }) => {
  const skills = await prisma.userSkills.findMany({
    where: { userId },
  });
  console.log(skills);

  return (
    <>
      <div className="app-resume-padding">
        <div className="divider divider-start">
          <h3 className="uppercase">Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-5">
          {skills.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResumeSkills;
