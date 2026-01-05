"use client";
import { useState } from "react";
import { PackagePlus } from "lucide-react";
import generateURL from "@/utils/urlGenerater"; 
import { toast } from "react-toastify";

export default function BlogCategories({rows, setRows}) {

  const [category, setCategory] = useState({
    name:"",
    image: null,
    description:"",
    slug:""
    })
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState("h-0")
  const [visibility, setVisibility] = useState("hidden")

  const handleChange = (e)=>
  {
    const {name, value} = e.target
    setCategory((prev)=>({...prev, [name]:value}))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setCategory((prev) => ({ ...prev, image: file }));
    e.target.value=null
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!category.name)
    {
      toast.warning("please fill all fields");
      return
    }
    // console.log(category)
    
    setLoading(true);
    if(category.image){
    const {url,public_id} = await generateURL(category.image);
    category["image"]={url,public_id}
    }
    

   try{
    const response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogCategory/add`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
      body: JSON.stringify(category)
    }).then((res)=>(res.json()));
    console.log(response);
    
    if (response.success){
      setRows((prev)=>([...prev,response.data]))
      toast.success("Data saved successfully");

    }
    else{
      console.log(response.message)
      toast.error(response.message)
    }
    

   }catch (error) {
    console.log(error)
    toast.error(`Failed To Upload:${error.message}`)
   }
   setCategory(()=>({
    name:"",
    image: null,
    description:"",
    slug:""
    }))
 setLoading(false)

  };

  return (
    <div >
        <div className={`bg-white shadow rounded-sm w-full  relative pl-4 ${height} `}>
        {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-500 text-white p-2 rounded shadow absolute -top-3" onClick={()=>{setHeight(height=="h-0"?"auto p-4":"h-0"); setVisibility(visibility=="hidden"?"block":"hidden")}}>
                <PackagePlus />
                </div>
                <h2 className="text-lg font-semibold pl-12">Create new category</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={`space-y-4 ${visibility}`}>
                {/* Title */}
                <div className="flex">
                <div className="mr-2 w-[49%]">
                <label className="block text-sm font-medium mb-1 ">Name</label>
                <input
                    type="text"
                    value={category.name}
                    name="name"
                    onChange={handleChange}
                    className=" w-full  border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="Enter banner title"
                />
                </div>

                <div className="w-[49%]">
                <label className="block text-sm font-medium mb-1 ">Slug</label>
                <input
                    type="text"
                    value={category.slug}
                    name="slug"
                    onChange={handleChange}
                    className=" w-full  border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="Enter Slug"
                />
                </div>
                </div>


                {/* Image */}
                <div>
                <label className="block text-sm font-medium mb-3">Add Thumbnail</label>
                <label
                  htmlFor="thumbnail"
                  className="cursor-pointer w-full border rounded px-3 py-2 text-sm bg-gray-500 text-white"
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      document.getElementById("thumbnail").click();
                    }
                  }}
                >
                  Choose file
                </label>
                <input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden "
                />
                </div>

                {/* Preview */}
                {category.image && (
                <div className="mt-2">
                    <img
                    src={URL.createObjectURL(category.image)}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded"
                    />
                </div>
                )}

                

                {/* Meta description */}
                <div className="">
                    <label className="block text-sm font-medium mb-1">Meta description</label>
                    <input
                        maxLength={250}
                        type="textarea"
                        value={category.description}
                        name="description"
                        onChange={handleChange}
                        className=" w-full  border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300"
                        placeholder="Enter banner meta description"
                    />
                </div>

                {/* Submit */}
                <button
                type="submit"
                disabled={loading}
                className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition disabled:opacity-50"
                >
                {loading ? "Uploading..." : "Add Catagory"}
                </button>
            </form>
        </div>
        
    </div>
  );
}
