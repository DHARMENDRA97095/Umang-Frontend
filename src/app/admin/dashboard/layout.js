import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import { ToastContainer, Bounce } from "react-toastify";
import Footer from "@/components/admin/Footer";


export default function dashboardLayout({children}){
    return(<>
        <div className="flex h-screen overflow-hidden ">
            <Sidebar/>
            <div className="main bg-[#eeeeee] w-[100%] overflow-y-scroll">
                <Header/>
            <div>{children}</div>
            </div> 
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            {/* <Footer/> */}
        </div>
    </>
    )
}