"use client";

import { useEffect, useState } from "react";
import {
  Edit,
  XOctagonIcon,
  FileText,
  LucideSquareStack,
  
} from "lucide-react";
import AddBanner from "@/components/admin/AddBanner";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { updateOrder } from "@/utils/updateOrder";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import ActionButton from "@/components/admin/ActionButton";
import Image from "next/image";





export default function BannersSection() {
  const [rows, setRows] = useState([]);


  useEffect( () => {
    const controller = new AbortController();
  
    (async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner/getBanners`, {
          signal: controller.signal,
        });
        console.log(res.data);
        setRows(res.data)
        
      } catch (err) {
        if (axios.isCancel(err)) console.log("Request canceled");
        else console.error(err);
      }
    })();
  
    return () => controller.abort(); // cleanup on unmount
  }, []);

  const handleDragEnd = async (result) => {
    if (!result.destination) return;
    
    const success  = await updateOrder(rows[result.source.index], rows[result.destination.index]);

    const reordered = Array.from(rows);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);

    const updated = reordered.map((item, index) => ({
      ...item,
      order: index + 1,
    }));

    if (success){
    setRows(updated);
    {toast.success("Order Updated Successfully")}
    }
    else
    {
      toast.error("Network or server Issue please try later")
    }
    // TODO: send `updated` to backend to persist order
  };


  const handleDeleteAction= async(item)=>{
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/banner/delete/${item._id}/${item.order === rows.length ? 0 : item.order}`
      );
    
      if (response.status === 200) {
        const newRows = rows.filter((r) => r._id !== item._id); // immutably remove deleted row
        if(item.order === rows.length)
        {setRows(newRows);
        toast.success("Banner deleted successfully");}
        else{
          const updated = newRows.map((item, index) => ({
            ...item,
            order: index + 1,
          }));
          setRows(updated);
          toast.success("Banner deleted successfully");
        }
      } else {
        toast.error("Failed to delete banner");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network issue, please try later");
    }
  }

  return (
    <div className="p-6 ">
      <AddBanner rows={rows} setRows={setRows}/>

      <div className="mt-15">
          <div className={`bg-white shadow rounded-sm w-full relative`}>
            <div className="flex items-center gap-3 p-4 border-b">
              <div className="bg-pink-500 text-white p-2 rounded shadow absolute -top-3 z-10">
                <FileText />
              </div>
              <h2 className="text-lg font-semibold pl-12">Manage Banner</h2>
            </div>

            <div className="">
              <DragDropContext onDragEnd={handleDragEnd}>
                <table className="w-full text-sm border-collapse">
                  <thead className="text-gray-500 uppercase text-xs border-b bg-white sticky top-0 z-10">
                    <tr>
                      <th className="py-3 px-4 text-left w-2">Order</th>
                      <th className="py-3 px-4">Title</th>
                      <th className="py-3 px-4">Banner</th>
                      <th className="py-3 px-4">Action</th>
                    </tr>
                  </thead>

                  <Droppable droppableId="table">
                    {(provided) => (
                      <tbody
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {!rows? (
                          <tr>
                            <td
                              className="p-3 text-center text-2xl text-gray-500"
                              colSpan={4}
                            >
                              No banners have been added yet!
                            </td>
                          </tr>
                        ) : (
                          rows.map((item, index) => (
                            <Draggable
                              key={item._id}
                              draggableId={String(item._id)}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <tr
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`border-b ${
                                    snapshot.isDragging ? "bg-blue-50" : "bg-white"
                                  }`}
                                >
                                  <td className="py-4 px-4">
                                    <div className="flex items-center gap-2">
                                      <LucideSquareStack />
                                      {item.order}
                                    </div>
                                  </td>

                                  <td className="py-4 px-4 text-center">{item.title}</td>

                                  <td className="py-4 px-4 flex items-center justify-center gap-4">
                                    <Image
                                      src={item.image.url}
                                      alt={`banner-${item.title}`}
                                      className="w-24 h-16 object-cover rounded"
                                      fill
                                    />
                                  </td>

                                  <td className="py-4 px-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                      {/* <ActionButton text="" style= "bg-amber-500" icon={<Edit/>} handler = {()=>{}}/>  */}
                                      <ActionButton text="delete" style= "bg-[#f44336]" icon={<XOctagonIcon />} handler = {(state)=>{handleDeleteAction(item,state)}} />
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </Draggable>
                          ))
                        )}
                        {provided.placeholder}
                      </tbody>
                    )}
                  </Droppable>
                </table>
              </DragDropContext>
            </div>


          </div>
      </div>
      
    </div>
  );
}
