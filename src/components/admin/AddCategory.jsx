"use client";

import { useState } from "react";
import { PackagePlus } from "lucide-react";
import generateURL from "@/utils/urlGenerater";
import { toast } from "react-toastify";

export default function AddCategory({ rows, setRows }) {
  const [category, setCategory] = useState({
    name: "",
    image: null,
    description: "",
    slug: "",
  });
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState("h-0");
  const [visibility, setVisibility] = useState("hidden");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setCategory((prev) => ({ ...prev, image: file }));
    e.target.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category.name) {
      toast.warning("please fill all fields");
      return;
    }
    // console.log(category)

    setLoading(true);
    if (category.image) {
      const { url, public_id } = await generateURL(category.image);
      category["image"] = { url, public_id };
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/category/add`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(category),
        }
      ).then((res) => res.json());
      if (response.success) {
        setRows((prev) => [...prev, response.data]);
        toast.success("Data saved successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Failed To Upload:${error.message}`);
    }
    setCategory(() => ({
      name: "",
      image: null,
      description: "",
      slug: "",
    }));
    setLoading(false);
  };

  return (
    // Redesigned Component Structure for Add New Category

    // Note: Ensure `height`, `visibility`, `setHeight`, `setVisibility`,
    // `PackagePlus`, `handleSubmit`, `handleChange`, `category`, `handleFileChange`,
    // and `loading` are properly defined and imported.

    <div>
      {/* Main Container - Controlled by height state for smooth collapse */}
      <div
        className={`bg-white shadow-xl rounded-lg w-full relative transition-all duration-300 overflow-hidden ${
          height === "h-0" ? "h-14 p-0" : "p-6"
        }`}
      >
        {/* Header Section (Always Visible) */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            height === "h-0" ? "p-4" : "mb-6 border-b border-gray-200 pb-4"
          }`}
          onClick={() => {
            // Note: The logic for setting height and visibility is preserved from your original code
            setHeight(height === "h-0" ? "auto p-4" : "h-0");
            setVisibility(visibility === "hidden" ? "block" : "hidden");
          }}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-pink-600">
              <PackagePlus className="w-6 h-6" />
            </span>
            Add New Category
          </h2>

          {/* Collapse/Expand Button (Chevron Icon) */}
          <button
            type="button"
            className="text-gray-500 hover:text-pink-600 transition duration-150 transform"
            
            aria-expanded={height !== "h-0"}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                height !== "h-0" ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Form Section (Collapsible) */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-opacity duration-300 ${
            visibility === "hidden"
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          {/* Name & Slug Fields (Combined into one row with proper spacing) */}
          <div className="flex gap-6">
            {/* Name */}
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={category.name}
                name="name"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150"
                placeholder="e.g., Rice & Grains"
              />
            </div>

            {/* Slug */}
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Slug
              </label>
              <input
                type="text"
                value={category.slug}
                name="slug"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150"
                placeholder="e.g., rice-grains"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-700">
              Category Thumbnail
            </h3>
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
            </label>
            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Preview */}
            {category.image && (
              <div className="mt-4 border p-1 inline-block rounded-lg shadow-sm">
                <img
                  src={URL.createObjectURL(category.image)}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          {/* Meta Description */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Meta Description (Max 250 chars)
            </label>
            <textarea
              maxLength={250}
              rows={3} // Changed input type to textarea for multi-line description
              value={category.description}
              name="description"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150 resize-none"
              placeholder="Enter a brief SEO meta description for this category"
            />
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={loading}
              className="transition-all w-40 bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-pink-700 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {/* Assuming you have a loading indicator logic */}
              {loading ? "Adding..." : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
