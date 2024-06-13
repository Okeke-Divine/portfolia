import prisma from "@/app/db";
import { getUserId } from "@/utils/session";

const ListSkills = async () => {
  const userId = await getUserId();
  const skills = await prisma.userSkills.findMany({
    where: { userId },
  });

  console.log(skills);
  return (
    <>
      <div className="grid grid-cols-1 gap-2">
        {skills.map((skill, index) => (
          <>
            <div className="flex flex-wrap gap">
              <div className="grow">{skill.skill_name}</div>
              <div>[x]</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ListSkills;
