


export default async function generateURL (file)
{
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/image/generateSignature`,{
            
                method: "GET",
                credentials: "include", // important to receive HttpOnly cookie
              
        });
        const {signature, timestamp, apiKey, cloudName} = await res.json();

        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", apiKey);
        formData.append("timestamp", timestamp.toString());
        formData.append("signature", signature);

        const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
        method: "POST",
        body: formData,
        });
        const data = await uploadRes.json();
        return data
    }
    catch (error)
    {
        console.log(error)
        return false
    }
}