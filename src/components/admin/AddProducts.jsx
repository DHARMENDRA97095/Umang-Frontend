"use client";

import {  useState } from "react";
import { PackagePlus } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/loadingV2.json";
import generateURL from "@/utils/urlGenerater";
import { toast } from "react-toastify";
import deleteImage from "@/utils/deleteImage";


export default function AddProduct({ rows , setRows ,categories=[] }) {

  const [height, setHeight] = useState("h-0");
  const [visibility, setVisibility] = useState("hidden");
  const [loading, setLoading] = useState(false);
  const [loadingFeature, setLoadingFeature] = useState(false);



  const { register, control, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      name: "",
      category: "",
      description:"",
      image: null,
      features: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  const imageFile = watch("image");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setValue("image", file);
    e.target.value = null;
  };

  const handleAddFeature = () => {
    setLoadingFeature(true);
    setTimeout(() => {
      append({ title: "", badge:"", value: "" });
      setLoadingFeature(false);
    }, 300);
  };

  const onSubmit = async (data) => {
    if(!data.name || !data.image)
    {
      toast.warning("please fill all fields");
      return
    }
    // console.log(category)
    
    setLoading(true);
    if(data?.image){
    const {url,public_id} = await generateURL(data?.image);
    data["image"]={url,public_id}
    }
    console.log(data);
   try{
    const response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/add`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
      body: JSON.stringify(data)
    }).then((res)=>(res.json()));
    console.log(response);
    if (response.success){
      setRows((prev)=>([...prev,response.data]))
      toast.success("Data saved successfully");

    }
    else{
      console.log('hii');
      deleteImage(data.image.public_id)
      toast.error(response.message)
    }
    

   }catch (error) {
    console.log('by');
    deleteImage(data.image.public_id)
    toast.error(`Failed To Upload:${error.message}`)
   }
   finally{
      setLoading(false)
      reset()
   }

  };


  return (
    // Redesigned Component Structure

// Note: You must ensure `height`, `visibility`, `setHeight`, `setVisibility`,
// `PackagePlus`, `handleSubmit`, `onSubmit`, `register`, `categories`,
// `handleFileChange`, `imageFile`, `fields`, `remove`, `handleAddFeature`,
// `loadingFeature`, `loading`, and `animationData` are properly defined
// and imported in your React component.

<div>
  {/* Main Container - Adjusted shadow and padding for a cleaner look */}
  <div className={`bg-white shadow-xl rounded-lg w-full relative transition-all duration-300 overflow-hidden ${
      height === "h-0" ? "h-14 p-0" : "p-6"
    }`}
  >
    {/* Header Section (Always Visible) */}
    <div className={`flex items-center justify-between transition-all duration-300 ${height === "h-0" ? "p-4" : "mb-6 border-b border-gray-200 pb-4"}`}>
      
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
        {/* Decorative icon - now integrated and styled cleanly */}
        <span className="text-pink-600">
          <PackagePlus className="w-6 h-6" />
        </span>
        Add New Product
      </h2>

      {/* Collapse/Expand Button - Uses rotation for visual cue */}
      <button
        type="button"
        className="text-gray-500 hover:text-pink-600 transition duration-150 transform"
        onClick={() => {
          setHeight(height === "h-0" ? "auto p-6" : "h-0");
          setVisibility(visibility === "hidden" ? "block" : "hidden");
        }}
        aria-expanded={height !== "h-0"}
        aria-controls="product-form"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${height !== "h-0" ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>

    {/* Form Section (Collapsible) */}
  <form
      id="product-form"
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-6 transition-opacity duration-300 ${visibility === "hidden" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* --- Basic Details Section --- */}
      <div>
        <h3 className="text-base font-semibold text-gray-700 mb-3">Basic Information</h3>
        <div className="flex gap-6">
          {/* Name */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150"
              placeholder="e.g., Kichadi Ponni Rice"
            />
          </div>

          {/* Category */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1 text-gray-700">Category</label>
            <select
              {...register("category")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150 bg-white appearance-none"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id} className="capitalize">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Description (Max 250 chars)</label>
        <textarea
          maxLength={250}
          rows={3}
          {...register("description")}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150 resize-none"
          placeholder="Enter a brief product description..."
        />
      </div>

      {/* --- Image Upload Section --- */}
      <div className="inline-flex flex-col ">
        <h3 className="text-base font-semibold text-gray-700 mb-3">Product Image</h3>
        {/* Image Preview */}
        {imageFile && (
          <div className="mb-4  inline-block rounded-lg shadow-sm">
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Product Preview"
              className="w-64 h-32 object-cover rounded-md"
            />
          </div>
        )}

        <label
          htmlFor="thumbnail"
          className="cursor-pointer inline-block border-2 border-dashed border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600 hover:border-pink-500 hover:bg-pink-50 transition duration-150"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              document.getElementById("thumbnail").click();
            }
          }}
        >
          Click to upload file
          <input
            id="thumbnail"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        
        
      </div>

      {/* --- Features Section --- */}
      <div>
        <h3 className="text-base font-semibold text-gray-700 mb-3">Features & Specifications</h3>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-3 mb-3 items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
            
            <div className="w-full space-y-2">
              <div className="flex gap-2">
                {/* Title */}
                <input
                  {...register(`features.${index}.title`)}
                  placeholder="Feature Title (e.g., Texture)"
                  className="border border-gray-300 px-3 py-2 rounded-md w-1/2 text-sm focus:ring-2 focus:ring-pink-500"
                />
                {/* Badge (Value) */}
                <input
                  {...register(`features.${index}.badge`)}
                  placeholder="Badge Text (e.g., Soft & Creamy)"
                  className="border border-gray-300 px-3 py-2 rounded-md w-1/2 text-sm focus:ring-2 focus:ring-pink-500"
                />
              </div>
              {/* Description/Value */}
              <input
                {...register(`features.${index}.value`)}
                placeholder="Detailed Description (e.g., Ideal for Pongal and Khichdi)"
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            {/* Remove Button - Styled as a simple, effective close icon */}
            <button
              type="button"
              onClick={() => remove(index)}
              className="mt-2 text-red-500 hover:text-red-700 transition duration-150"
              aria-label="Remove feature"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        ))}
        
        {/* Add Feature Button */}
        <button
          type="button"
          onClick={handleAddFeature}
          disabled={loadingFeature}
          className="mt-2 text-sm font-semibold text-pink-600 hover:text-pink-800 transition duration-150 flex items-center gap-1 disabled:opacity-50"
        >
          {loadingFeature && (
            <Lottie animationData={animationData} className="w-4 h-4" />
          )}
          {loadingFeature ? "Adding..." : "+ Add Another Feature"}
        </button>
      </div>
      
      {/* --- Action Buttons --- */}
      <div className="pt-4 border-t border-gray-200 flex justify-end gap-3">
        
        <button
          type="submit"
          disabled={loading}
          className="transition-all w-40 bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-pink-700 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading && (
            <Lottie animationData={animationData} className="w-4 h-4" />
          )}
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </div>
    </form>
  </div>
</div>
  );
}
