import { internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse";

export const POST = async (req) => {
  try {
    const data = await req.json();
    console.log(data);
    return resourceDeleted();
    return internalServerError("failed to delete a social skill")
  } catch (e) {
    return internalServerError(e);
  }
};
