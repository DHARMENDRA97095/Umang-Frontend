import {NextResponse} from "next/server";

export async function middleware(req){
    const url = req.nextUrl;
    const token = req.cookies.get("token")?.value;
    if(url.pathname.startsWith("/admin") && !url.pathname.startsWith("/admin/auth")){
        if(!token)
        {
            console.log("hi");
            return NextResponse.redirect(new URL("/admin/auth/login", req.url));
        }
        
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`,{
                method:"POST",
                headers:{
                    cookie:`token=${token}`,  
                }, 
            });
            // console.log("hiioo");
                if(res.status !== 200){
                    return NextResponse.redirect(new URL("/admin/auth/login", req.url))
                }
        }
        catch(error){
            return NextResponse.redirect(new URL("/admin/auth/login", req.url));
        }
    }

    return NextResponse.next();
}



export const config = {
    matcher:['/admin/:path*']
}