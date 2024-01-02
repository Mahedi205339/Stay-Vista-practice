import axios from "axios";
import axiosSecure from ".";

export const imageUpload = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`, formData)
    return data
}

// admin state 
export const getAdminState = async () => {
    const { data } = await axiosSecure(`/admin-stat`)
    return data
}
