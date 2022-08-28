import {v2 as cloudinary } from "cloudinary";
import dotent from "dotenv";

dotent.config();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secrete: process.env.CLOUDINARY_SECRETE,
    secure:true,
})

export default cloudinary;