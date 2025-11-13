import React,{useState} from 'react'
import ActionButton from './ActionButton';
import {
    Edit,
    XOctagonIcon,
    FileText,
    LucideSquareStack,
    View
  } from "lucide-react";
import { toast } from 'react-toastify';
import axios from 'axios';
import generateURL from '@/utils/urlGenerater';

function CatagoryTableRow({item, handleDeleteAction, setRows , index, rows}) {
    const [canEdit,setCanEdit]= useState(false)
    const [category, setCategory] = useState({...item,image:null})

    const handleCancelAction = ( state)=>{
        setCanEdit(false)
        setCategory({...item,image:null})
        console.log(state)
        state(false)
    }

    const handleUpdateAction = async (state) => {
        try {
          let payload = { ...category };
      
          // remove null image before diff
          if (!payload.image) delete payload.image;
      
          // build diff dynamically
          Object.keys(payload).forEach((key) => {
            if (key !== "image" && payload[key] === item[key]) {
              delete payload[key];
            }
          });
      
          // if new image uploaded
          if (category.image) {
            const response = await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/image/delete/${item.image?.public_id|| 0}`)
                console.log(response)
            const {public_id,url} = await generateURL(category?.image);
            payload.image = { url,public_id };
            
                
          }
      
          if (Object.keys(payload).length === 0) {
            state(false);
            toast.warn("No updates")

            return;
          }

          if (payload?.slug === "")
        {
            payload.slug = category.name.replace(/\s+/g, "_");
        }
        else if(payload?.slug)
        {
            payload.slug = category.slug.replace(/\s+/g, "_");
        }
      
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/update/${item._id}`, {
            method:"PUT",
            headers:{"content-type":"application/json"},
            credentials:"include",
            body:JSON.stringify(payload)
        }).then((res)=>res.json());
        
        if (response.success) {
          toast.success("Row Updated successfully");
        
          const newRows = [...rows];
          newRows[index] = response.category;
        
          setRows(newRows);
          setCanEdit(false);
        }
        else{
          toast.error("Failed updating");
        }
        
          state(false);
        } catch (err) {
          toast.error(`Update failed, ${err}`);
          state(false);
        }
      };
      

    const handleFileChange = (e) => {
        console.log(e.target.files);
        const file = e.target.files?.[0] || null;
        setCategory((prev) => ({ ...prev, image: file }));
        e.target.value=null
      };

    const handleChange = (e)=>{
        const {name,value}=e.target
        setCategory((prev)=>({...prev,[name]:value}));
    }
  return (
    <>
    {!canEdit?
    (<tr
        key={item._id}
        className={`border-b bg-white`}
    >
        <td className="py-4 px-4">
            <div className="flex items-center">
            {item?.image?.url ?
            <img
                src={item?.image?.url}
                alt={`banner-${item.name}`}
                className="w-24 h-16 object-fit rounded"
                width="50px"
                height="50px"
            />:<img
            src="/image/default-category.png"
            alt={`banner-${item.name}`}
            className="w-24 h-16 object-fit rounded"
            width="50px"
            height="50px"
        />}
            </div>
        </td>

        <td className="py-2 px-2">
        <div className="flex items-center justify-center gap-2">
            {item.name}
        </div>
        </td>

        <td className="py-2 px-2">
        <div className="flex items-center justify-center gap-2">
            {item.slug}
        </div>
        </td>

        <td className="py-2 px-4 w-80">
        <div className=" flex items-center justify-center gap-2 w-full h-full " >
            <p className="line-clamp-2 w-full h-full">{item.description}</p> 
        </div>
        </td>

        <td className="py-2 px-2 text-center">
            <div className="flex items-center justify-center gap-2 ">
                <ActionButton text="" style= "bg-amber-500" icon={<Edit/>} handler = {(state)=>{setCanEdit(true);state(false)}}/> 
                <ActionButton text="" style= "bg-[#f44336]" icon={<XOctagonIcon />} handler = {(state)=>{handleDeleteAction(item,state)}} />
                {/* <ActionButton text="" style= "bg-[#007acc]" icon={<View/>} handler = {(state)=>{}}/> */}
            </div>
        </td>
    </tr>)
    :(
        <tr
        key={item._id}
        className={`border-b bg-white`}
    >
        <td className="py-4 px-4">
            <div className="flex items-center flex-col">
            {category.image?<img
                src={URL.createObjectURL(category.image)}
                alt={`banner-${item.name}`}
                className="w-24 h-16 object-fit rounded"
                width="50px"
                height="50px"
            />:(item?.image?.url ?
            <img
                src={item?.image?.url}
                alt={`banner-${item.name}`}
                className="w-24 h-16 object-fit rounded"
                width="50px"
                height="50px"
            />:<img
            src="/image/default-category.png"
            alt={`banner-${item.name}`}
            className="w-24 h-16 object-fit rounded"
            width="50px"
            height="50px"
        /> )}
        <label
                  htmlFor="changeThumb"
                  className="cursor-pointer w-[100px] border rounded px-1 py-1 text-[12px] bg-gray-500 text-white text-center" 
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      document.getElementById("thumbnail").click();
                    }
                  }}
                  >
                    Edit Thumbnail
                    </label>
        <input 
        id="changeThumb" type='file' accept='image/*' onChange={handleFileChange} className='hidden'/>
            </div>
        </td>

        <td className="py-2 px-2">
        <input 
            className="flex items-center justify-center gap-2 bg-gray-100 border-1 text-center" 
            onChange={handleChange} 
            name="name" 
            value={category.name}
            placeholder={item.name} />
        </td>

        <td className="py-2 px-2">
        <input 
        className="flex items-center justify-center gap-2 bg-gray-100 border-1 text-center" 
        onChange={handleChange} 
        name="slug" 
        value={category.slug}
        placeholder={item.slug}
        />
        </td>

        <td className="py-2 px-4 w-80">
        <textarea 
        className=" flex items-center justify-center gap-2 w-full h-full  bg-gray-100 border-1 text-center" 
        onChange={handleChange} 
        name="description" 
        value={category.description}
        placeholder={item.description}/>
        </td>

        <td className="py-2 px-2 text-center">
            <div className="flex items-center justify-center gap-2  ">
                    <ActionButton text="Update" style= "bg-pink-500" icon={<View/>} handler = {(state)=>{handleUpdateAction(state)}}/>
                    <ActionButton text="cancel" style= "bg-[#007acc]" icon={<View/>} handler = {(state)=>{handleCancelAction(state)}}/>
            </div>
        </td>
    
    </tr>
    )}
    </>
)
}

export default CatagoryTableRow
