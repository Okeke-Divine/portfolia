import prisma from "@/app/db";
import { badRequest, internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { certificate_id } = data;

        if (!certificate_id || !parseInt(certificate_id)) {
            return badRequest("invalid certificate_id")
        }

        const delete_certificate = await prisma.userCertificate.delete({
            where: {
                id: certificate_id
            }
        })
        if (delete_certificate) {
            return resourceDeleted();
        }

        return internalServerError("failed to delete a certificate")
    } catch (e) {
        return internalServerError(e);
    }
};
