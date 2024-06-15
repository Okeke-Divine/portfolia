import prisma from "@/app/db";
import { getUserId } from "@/utils/session";

const ViewSocialInfo = async () => {
  const userId = await getUserId();

  const userExpertise =
    (await prisma.userSocialInfo.findFirst({
      where: {
        userId,
      },
    })) || {};
  console.log(userExpertise);
  return <div>ViewSocialInfo</div>;
};

export default ViewSocialInfo;
