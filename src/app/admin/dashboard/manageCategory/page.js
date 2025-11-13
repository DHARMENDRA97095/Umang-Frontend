"use client";

import { useEffect, useState } from "react";
import {
  Edit,
  XOctagonIcon,
  FileText,
  LucideSquareStack,
  View
} from "lucide-react";
import ActionButton from "@/components/admin/ActionButton";
import AddCategory from "@/components/admin/AddCategory";
import axios from "axios";
import { toast } from "react-toastify";
import CategoryTableRow from "@/components/admin/CatagoryTableRow";

// { id:1, name:"Rice1", slug:"rice1", image:"/image/1.jpg", description:"lorem45" },

export default function CategorySection() {
    
    const [loading, setLoading]=useState(false)
    const [rows, setRows] = useState([]);

    useEffect( ()=>{
        const controller = new AbortController;
        (async ()=>{
            setLoading(true)
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/getAll`,{
                    signal:controller.signal
                })

                if(data.success)
                {
                    console.log(data.data)
                    setRows(data?.data||[])
                }
            } catch (error) {
                if (error.message!="canceled")
                toast.error(error.message);
            }
            setLoading(true)
            
        })();

        return ()=>(controller.abort())
    },[])

  
  const handleDeleteAction= async(item,state)=>{
    try {
        // console.log(item.image)
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/category/delete/${item._id}/${item.image?.public_id|| 0}`
      );
    
      if (response.status === 200) {
        const newRows = rows.filter((r) => r._id !== item._id); // immutably remove deleted row
        setRows(newRows);
        toast.success("Banner deleted successfully");
        state(false)
      }
      else {
        toast.error("Failed to delete banner");
        state(false)
      }
    } catch (error) {
      console.error(error);
      toast.error(`Network issue, please try later ${error}`);
      state(false)
    }
  }

  
  return (
    <div className="p-6">
      <AddCategory rows={rows} setRows={setRows}/>

        <div className=" mt-15">
            <div className="bg-white shadow rounded-sm w-full relative mt-5">
                <div className="flex items-center gap-3 p-4 border-b">
                <div className="bg-pink-500 text-white p-2 rounded shadow absolute -top-3 z-10">
                    <FileText />
                </div>
                <h2 className="text-lg font-semibold pl-12">Manage Catagories</h2>
                </div>

                <div className="overflow-y-auto max-h-[70vh]">
                    <table className="w-full text-sm">
                    <thead className="text-gray-500 uppercase text-xs border-b">
                        <tr>
                        <th className="py-4 px-2 text-left w-2">Thumbnail</th>
                        <th className="py-4 px-2">Title</th>
                        <th className="py-4 px-2">slug</th>
                        <th className="py-4 px-2">meta-discription</th>
                        <th className="py-4 px-2">Action</th>
                        </tr>
                    </thead>

                    {/* Apply Droppable to tbody */}
                        <tbody
                            className="overflow-y-auto max-h-[70vh]"
                        >
                            {!rows?<tr><td className="p-3" colSpan={4}><h1 className="text-2xl text-center text-gray-500">No categories have been created yet!</h1></td></tr>:
                            rows?.map((item, index) => (
                                
                                <CategoryTableRow 
                                  key={item._id} 
                                  item={item} 
                                  handleDeleteAction={handleDeleteAction} 
                                  index={index} 
                                  rows={rows} 
                                  setRows={setRows}/>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}
