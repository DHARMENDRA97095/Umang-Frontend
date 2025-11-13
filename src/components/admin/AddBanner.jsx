"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";
// Assuming 'generateURL' and 'ToastContainer/toast' are correctly imported and defined in your environment
// import generateURL from "@/utils/urlGenerater"; 
// import { ToastContainer, toast, Bounce } from "react-toastify";


export default function AddBanner({ rows, setRows }) {
  const [banner, setBanner] = useState({
    title: "",
    image: null,
    order: rows?.length + 1 || 1,
  });
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState("h-0");
  const [visibility, setVisibility] = useState("hidden");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBanner((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setBanner((prev) => ({ ...prev, image: file }));
    // Reset file input value to allow the same file to be selected again
    e.target.value = null; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!banner.title || !banner.order || !banner.image) {
      // toast.warning("Please fill all fields"); // Assuming toast is available
      console.warn("Please fill all fields");
      return;
    }
  
    setLoading(true);
  
    try {
      // Simplified mock logic as external functions/APIs are not available here
      // const order = Math.min(banner.order, rows.length + 1);
      // const { public_id, url } = await generateURL(banner.image);
      // const saveData = { ...banner, order, image: { public_id, url } };
      
      const newBanner = { 
        ...banner, 
        order: Number(banner.order), 
        id: Date.now(), 
        image: { url: URL.createObjectURL(banner.image), public_id: 'mock-id' }
      };

      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000)); 

      // Mock update to rows
      let updatedRows = [...rows, newBanner];
      updatedRows.sort((a, b) => a.order - b.order);
      updatedRows = updatedRows.map((item, idx) => ({ ...item, order: idx + 1 }));

      setRows(updatedRows);
      // toast.success("Banner added successfully"); // Assuming toast is available
      console.log("Banner added successfully:", newBanner);
  
      resetBanner(updatedRows.length + 1);
    } catch (error) {
      console.error("Error adding banner:", error);
      // toast.error(error.message || "Network issue, please try later"); // Assuming toast is available
      resetBanner(rows.length + 1);
    } finally {
      setLoading(false);
    }
  };
  
  const resetBanner = (order) => {
    setBanner({
      title: "",
      image: null,
      order,
    });
    // Optional: Collapse form after successful submission
    setHeight("h-0");
    setVisibility("hidden");
  };
  

  return (
    <div>
      {/* Main Container - Apply modern styling and transition control */}
      <div
        className={`bg-white shadow-xl rounded-lg w-full mb-6 relative transition-all duration-300 overflow-hidden ${
          height === "h-0" ? "h-14 p-0" : "p-6"
        }`}
      >
        {/* Header Section (Always Visible) - Clean and professional look */}
        <div 
          className={`flex items-center justify-between transition-all duration-300 ${height === "h-0" ? "p-4" : "mb-6 border-b border-gray-200 pb-4"}`}
          onClick={() => {
            // Ensure consistent toggle behavior
            setHeight(height === "h-0" ? "auto p-6" : "h-0");
            setVisibility(visibility === "hidden" ? "block" : "hidden");
          }}
        >
          
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            {/* Icon integrated into title */}
            <span className="text-pink-600">
              <ImagePlus className="w-6 h-6" />
            </span>
            Add New Banner
          </h2>

          {/* Collapse/Expand Button - Uses a rotating chevron */}
          <button
            type="button"
            className="text-gray-500 hover:text-pink-600 transition duration-150 transform"
           
            aria-expanded={height !== "h-0"}
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

        {/* Form Section (Collapsible) - Smooth opacity transition */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-opacity duration-300 ${visibility === "hidden" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          
          {/* Title and Order (Combined Row) */}
          <div className="flex gap-6">
            {/* Title Input */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={banner.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150"
                placeholder="Enter banner title"
              />
            </div>

            {/* Order Input */}
            <div className="w-1/4 min-w-[100px]">
              <label className="block text-sm font-medium mb-1 text-gray-700">Order</label>
              <input
                type="number"
                name="order"
                value={banner.order}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150"
                placeholder="e.g., 1"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-3 text-gray-700">Upload Banner Image</label>
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
              Click to select image file
            </label>
            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Preview */}
          {banner.image && (
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Image Preview:</p>
              <div className="border p-1 inline-block rounded-lg shadow-sm">
                <img
                  src={URL.createObjectURL(banner.image)}
                  alt="Banner Preview"
                  className="w-48 h-24 object-cover rounded-md"
                />
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="pt-4 border-t border-gray-200 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="transition-all w-40 bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-pink-700 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  {/* Assuming Lottie animation component is available */}
                  {/* <Lottie animationData={animationData} className="w-4 h-4" /> */}
                  Uploading...
                </>
              ) : (
                "Add Banner"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container (assuming react-toastify setup is correct) */}
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> */}
    </div>
  );
}
