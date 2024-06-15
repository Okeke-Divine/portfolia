import prisma from "@/app/db";
import { badRequest, internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse";

export const POST = async (req) => {
  try {
    const data = await req.json();
    console.log(data);
    const { social_id } = data;

    if (!social_id || !parseInt(social_id)) {
      return badRequest("social id is required/invalid social id")
    }

    const delete_social = await prisma.userSocialInfo.delete({
      where: {
        id: social_id
      }
    })
    if (delete_social) {
      return resourceDeleted();
    }

    return internalServerError("failed to delete a social skill")
  } catch (e) {
    return internalServerError(e);
  }
};
