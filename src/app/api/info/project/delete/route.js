import { internalServerError, resourceDeleted } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try{
        const data = await req.json();
        console.log(data);
        return resourceDeleted({});
    }catch(e){
        return internalServerError(e)
    }
}