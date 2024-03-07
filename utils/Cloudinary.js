import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = cloudinary.uploader.upload(
     localFilePath,
      {resource_type : "image" },
     );
     console.log("File is successfully uploaded on cloudinary")
     console.log(response)
     console.log(response.url)
     return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    // removes the locally saved temp file as the upload operation fails 
  }
};


export {uploadOnCloudinary};