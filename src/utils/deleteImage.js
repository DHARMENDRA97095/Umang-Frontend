import axios from "axios";
import { toast } from "react-toastify";


export default async function deleteImage(public_id)
{
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/image/delete/${public_id}`);
        console.log(response);
    }
    catch(error)
    {
        toast.error(`Failed to delete Image ${error.message}`)
        alert(error.message)
    }
}