// src/components/AddBlog.js

"use client";

import { useState } from "react";
import { BookOpenText } from "lucide-react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/loadingV2.json"; // Adjust path
import { toast } from "react-toastify";
import generateURL from "@/utils/urlGenerater"; // Used for image upload
import deleteImage from "@/utils/deleteImage"; // Used for cleanup

// 💡 NEW IMPORT: The TipTap Editor Component
import TiptapEditor from '@/components/admin/TiptapEditor'; 
// 💡 NEW IMPORT: TipTap styles. Tiptap doesn't mandate a CSS file, 
// but you might need a simple global style for the prose class. 
// For this example, we'll rely on Tailwind's 'prose' plugin 
// and custom classes defined in the useBlogEditor hook. 


export default function AddBlog({ rows , setRows ,categories=[] }) {
  const [height, setHeight] = useState("h-0");
  const [visibility, setVisibility] = useState("block");
  const [loading, setLoading] = useState(false);
  const [showSeo, setShowSeo] = useState(false);

  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      title: "",
      category: "",
      content: "", // This will hold the HTML content from TipTap
      thumbnail: null,
      slug: "",
      metaTitle: "",
      metaDescription: "",
      tags: "",
    },
  });

  const thumbnailFile = watch("thumbnail");
  const blogContent = watch("content"); // Get the current content for TipTap's value

  // Function to handle TipTap content change - passed to TiptapEditor
  const handleContentChange = (html) => {
    console.log(html);
    setValue("content", html, { shouldValidate: true }); 
  };
  
  // (Rest of the file handling and onSubmit logic remains the same)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setValue("thumbnail", file);
    e.target.value = null;
  };

  const onSubmit = async (data) => {
    // Check if content is just empty p-tags or truly empty (common TipTap initial state)
    const isContentEmpty = !data.content || data.content === "<p></p>";

    if(!data.title || isContentEmpty ) {
      toast.warning("Please fill in the blog title, category, and content.");
      return;
    }
    
    setLoading(true);
    let uploadedImage = null;

    // 1. Upload Thumbnail Image
    if(data?.thumbnail){
      try {
        const {url,public_id} = await generateURL(data.thumbnail);
        uploadedImage = { url, public_id };
        data["thumbnail"] = uploadedImage;
      } catch (error) {
        setLoading(false);
        toast.error(`Failed to upload thumbnail: ${error.message}`);
        return; 
      }
    }
    
    // 2. Format Tags
    if (data.tags) {
      data.tags = data.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    } else {
        data.tags = [];
    }

    // 3. Post Data to API (API endpoint must handle the HTML content)
    try{
        // const response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/add`,{
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   credentials: "include", 
        //   body: JSON.stringify(data)
        // }).then((res)=>(res.json()));

        // if (response.success){
        //   setRows((prev)=>([...prev,response.data]))
        //   toast.success("Blog posted successfully! 🚀");
        // }
        // else{
        //   if(uploadedImage) await deleteImage(uploadedImage.public_id);
        //   toast.error(response.message || "Failed to post blog.")
        // }

        console.log(data);
    } catch (error) {
        if(uploadedImage) await deleteImage(uploadedImage.public_id);
        toast.error(`A network error occurred: ${error.message}`)
    }
    
    // 4. Cleanup
    reset();
    setLoading(false);
  };


  return (
    <div>
      <div className={`bg-white shadow rounded-sm w-full relative p-4 transition-all duration-300 `}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="bg-pink-500 text-white p-2 rounded shadow absolute -top-3 cursor-pointer"
            
          >
            <BookOpenText />
          </div>
          <h2 className="text-lg font-semibold pl-12">Create New Blog Post</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 `}>
          
          {/* Title & Category */}
          <div className="flex justify-between gap-4">
            <div className="w-2/3">
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                {...register("title")}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="The amazing power of modern web development"
              />
            </div>

            <div className="w-1/3">
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                {...register("category")}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300 capitalize"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id} className="capitalize">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 💡 TipTap Editor Integration */}
          <div>
            <label className="block text-sm font-medium mb-1">Blog Content</label>
            <TiptapEditor
              content={blogContent}
              onContentChange={handleContentChange}
            />
          </div>
          {/* Note: TipTap handles its own internal height, so the extra spacer might not be needed, 
               but kept for safety if the form's natural flow is problematic. */}
          {/* <div className="h-4"></div> */} 


          {/* Thumbnail Image */}
          <div>
            <label className="block text-sm font-medium mb-3">Blog Thumbnail</label>
            <label
              htmlFor="thumbnail"
              className="cursor-pointer w-fit border rounded px-3 py-2 text-sm bg-gray-500 text-white hover:bg-gray-600 transition-colors"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  document.getElementById("thumbnail").click();
                }
              }}
            >
              Choose Thumbnail File
              <input
                id="thumbnail"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {thumbnailFile && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(thumbnailFile)}
                  alt="Thumbnail Preview"
                  className="w-48 h-32 object-cover rounded"
                />
              </div>
            )}
          </div>

          {/* SEO Toggler */}
          <div className="border-t pt-4">
              <button
                type="button"
                onClick={() => setShowSeo(!showSeo)}
                className="text-pink-600 font-semibold hover:text-pink-700 transition-colors flex items-center"
              >
                {showSeo ? "Hide SEO Settings" : "Show SEO Settings (Optional)"}
              </button>
          </div>
          

          {/* SEO Fields (Unchanged - they correctly address your SEO requirements) */}
          {showSeo && (
            <div className="space-y-4 p-4 border rounded bg-gray-50">
                <h3 className="text-md font-semibold text-gray-700">Search Engine Optimization (SEO)</h3>
                
                {/* Slug/URL */}
                <div>
                  <label className="block text-sm font-medium mb-1">SEO Slug (URL Path)</label>
                  <input
                    type="text"
                    {...register("slug")}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="e.g., amazing-power-modern-web-dev"
                  />
                  <p className="text-xs text-gray-500 mt-1">Short, hyphenated, descriptive URL part.</p>
                </div>

                {/* Meta Title */}
                <div>
                  <label className="block text-sm font-medium mb-1">Meta Title (for SERP)</label>
                  <input
                    type="text"
                    maxLength={60} 
                    {...register("metaTitle")}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="Concise, keyword-rich title (max 60 characters)"
                  />
                    <p className="text-xs text-gray-500 mt-1">Characters remaining: {60 - watch("metaTitle")?.length || 60}</p>
                </div>

                {/* Meta Description */}
                <div>
                  <label className="block text-sm font-medium mb-1">Meta Description</label>
                  <textarea
                    maxLength={160} 
                    {...register("metaDescription")}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="A brief summary of the blog post's content (max 160 characters)"
                  />
                  <p className="text-xs text-gray-500 mt-1">Characters remaining: {160 - watch("metaDescription")?.length || 160}</p>
                </div>
                
                {/* Tags */}
                  <div>
                  <label className="block text-sm font-medium mb-1">Tags/Keywords</label>
                  <input
                    type="text"
                    {...register("tags")}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="e.g., web development, react, javascript, tutorial"
                  />
                  <p className="text-xs text-gray-500 mt-1">Comma-separated keywords for categorization.</p>
                </div>

            </div>
          )}

          {/* Submit */}
          <div className="flex pt-4">
            <button
              type="submit"
              disabled={loading}
              className="transition-all w-[200px] overflow-hidden bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-400 disabled:opacity-50 flex items-center justify-center font-semibold"
            >
              {loading && (
                <Lottie animationData={animationData} className="w-4 h-4 mr-2" />
              )}
              {loading ? "Publishing..." : "Publish Blog Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}