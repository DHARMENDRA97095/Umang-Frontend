import React from 'react'
import Image from 'next/image' 
import {useForm, useFieldArray} from 'react-hook-form'
import { FilePenLine } from 'lucide-react'


function EditProduct({product, setRows, categories=[] }) {
  const {register, control, handleSubmit, setValue, watch, reset} = useForm({
    defaultValues:{
      name:product.name,
      category:product.category,
      description:product.description,
      image:product.image,
      features:product.features
    }
  })

  const {append, remove, fields} = useFieldArray({
  control, 
  name:"feature",
})

const imageFile = watch ("image");

const handleFileChange = (e)=>{
    const  file = e.target.files?.[0] || null;
    setValue("image", file);
    e.target.value = null;
  }

const onSubmit = async (data)=>{
  // handle form submit

}



    return(
      <>
        <div className={``}>

          <div className={``}>
              <h2>
                <span className='text-pink-600'>
                <FilePenLine className='w-6 h-6'/>
                </span>
                Edit product
              </h2>
          </div>
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
              <div>
                <h3 className="text-base font-semibold text-gray-700 mb-3">Product Image</h3>
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
                
                {/* Image Preview */}
                {imageFile && (
                  <div className="mt-4 border p-1 inline-block rounded-lg shadow-sm">
                    <Image
                      src={URL.createObjectURL(imageFile)}
                      alt="Product Preview"
                      className="w-24 h-24 object-cover rounded-md"
                      fill
                      
                    />
                  </div>
                )}
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
      </>
    )
  
}

export default EditProduct
