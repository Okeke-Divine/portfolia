"use server";
import { v2 as cloudinary } from "cloudinary";
import { _console_log } from "./console"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function cloudinaryDelete(file) {
    "use server";
    _console_log("Uploading image with cloudinary");
    try {
        const bytes = await file.arrayBuffer();
        const buffer = new Uint8Array(bytes);
        const result = await new Promise((resolve, reject) => {
            const uploaded_file = cloudinary.uploader
                .upload_stream(
                    {
                    },
                    function (error, result) {
                        if (error) {
                            _console_log("Cloudinary error " + error);
                            reject(error);
                            return;
                        }
                        resolve(result);
                    }
                )
                .end(buffer);
        })
        // .then((result: any) => {
        //   return { fileUrl: result.secure_url, options: {} };
        // });

        if (result && result.secure_url) {
            return { fileUrl: result.secure_url, options: {} };
        } else {
            return null;
        }
    } catch (err) {
        return null;
    }
}