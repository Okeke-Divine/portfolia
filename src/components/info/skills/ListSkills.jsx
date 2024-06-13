import prisma from "@/app/db";
import { getUserId } from "@/utils/session";

const ListSkills = async () => {
  const userId = await getUserId();
  const skills = await prisma.userSkills.findMany({ where: { userId } });

  console.log(skills);
  return <div>ListSkills</div>;
};

export default ListSkills;
