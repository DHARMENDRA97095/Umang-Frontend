

export async function updateOrder(source, destination)
{
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banner/updateOrder`,{
            method:"PUT",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({
                source,
                destination
            })
        })
        if(response.ok)
        return true
        return false

    }
    catch (error){
        console.log("network error");
        return false
    }
}