import axios from "axios";

const cloudName="makelaar"

export async function uploadImageApi(image){
    console.log("image",image)
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","amojar0m")
    const uploadResp=await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`,formData)
    console.log(uploadResp)

}

export async function uploadDocApi(doc){

}