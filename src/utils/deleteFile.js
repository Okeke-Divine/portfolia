"use server";
import { v2 as cloudinary } from "cloudinary";
import { _console_log } from "./console"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const cloudinaryDelete = async (publicId) => {
    _console_log("Deleting file...")
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result.result === 'ok';
    } catch (error) {
        _console_log("Error deleting image: " + error)
        return false;
    }
};
