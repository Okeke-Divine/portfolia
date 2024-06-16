import prisma from "@/app/db";

const ResumeSkills = async ({ userId }) => {
    const skills = await prisma.userSkills.findMany({
      where: { userId },
    });
  
  return (
    <>
      <div className="app-resume-padding">
        <div className="divider divider-start">
          <h3 className="uppercase">Skills</h3>
        </div>
        <div className="">Html,css...</div>
      </div>
    </>
  );
};

export default ResumeSkills;
