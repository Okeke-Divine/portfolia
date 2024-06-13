import prisma from "@/app/db";
import { getUserId } from "@/utils/session";

const ListSkills = async () => {
  const userId = await getUserId();
  const skills = await prisma.userSkills.findMany({
    where: { userId },
    select: { skill_name: true },
  });

  console.log(skills);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-6 xl:grid-cols-8">
        {skills.map((skill, index) => (
          <>
            <div
              key={index}
              className="rounded-lg shadow-sm duration-300 hover:shadow-lg bg-white text-center p-5"
            >
              <div className="capitalize font-bold">{skill.skill_name}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ListSkills;
