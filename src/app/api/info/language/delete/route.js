import prisma from "@/app/db";
import { badRequest, internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse";

export const POST = async (req) => {
  try {
    const data = await req.json();
    console.log(data);
    const { language_id } = data;

    if (!language_id || !parseInt(language_id)) {
      return badRequest("invalid language_id")
    }

    const delete_language = await prisma.userLanguage.delete({
      where: {
        id: language_id
      }
    })
    if (delete_language) {
      return resourceDeleted();
    }

    return internalServerError("failed to delete a language")
  } catch (e) {
    return internalServerError(e);
  }
};
