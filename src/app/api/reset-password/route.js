import { hashPassword } from "@/utils/hashPassword";
import { badRequest, internalServerError, resourceUpdated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try{

        const data = await req.json();
        const {email,password,token}= data;

        if(!email,password,token){
            return badRequest("All fields are required")
        }

        // check if the token is still validate (not expired)

        // check if the token.userId and the email userId match (same user)

        // hash the password
        const hashedPassword = await hashPassword(password);

        // update the password

        if(...){
            return resourceUpdated({})
        }else{
            return internalServerError("Error while trying to change user password  ")
        }

    }catch(e){
        return internalServerError(e)
    }
}