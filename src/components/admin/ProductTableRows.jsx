"use client";
import React, { useState, useEffect } from "react";
import ActionButton from "@/components/admin/ActionButton";
import { Edit, XOctagonIcon, View } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import generateURL from "@/utils/urlGenerater";

export default function ProductTableRow({ item, categories, onDelete, onUpdate }) {
  const [canEdit, setCanEdit] = useState(false);
  const [product, setProduct] = useState({ ...item, image: null });
  const [preview, setPreview] = useState(null);

  // cleanup object URL on unmount or change
  useEffect(() => {
    if (product.image) {
      const objectUrl = URL.createObjectURL(product.image);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [product.image]);

  const handleCancel = (state) => {
    setProduct({ ...item, image: null });
    setCanEdit(false);
    state(false)
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setProduct((prev) => ({ ...prev, image: file }));
    e.target.value = null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (state) => {
    try {
      let payload = { ...product };

      // handle slug normalization
      if (!payload.slug || payload.slug.trim() === "") {
        payload.slug = payload.name.replace(/\s+/g, "_").toLowerCase();
      } else {
        payload.slug = payload.slug.replace(/\s+/g, "_").toLowerCase();
      }

      // upload new image first
    //   console.log("hii",item);
      if (product.image) {
        const { url, public_id } = await generateURL(product.image);
        payload.image = { url, public_id };
        console.log(url);

        // delete old image only if new upload succeeded
      console.log("hi2",item.image?.public_id);

        if (item.image?.public_id) {
          await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/image/delete/${item.image.public_id}`
          );
        }
      } else {
        delete payload.image;
      }

      // remove unchanged fields
      Object.keys(payload).forEach((key) => {
        if (key !== "image" && payload[key] === item[key]) {
          delete payload[key];
        }
      });

      if (Object.keys(payload).length === 0) {
        toast.warn("No updates to save");
        setCanEdit(false);
        state(false)
        return;
      }

      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/product/update/${item._id}`,
        payload,
        { withCredentials: true }
      );
      if (data.success) {
        toast.success("Product updated successfully");
        onUpdate(item._id, { ...item, ...payload });
        setCanEdit(false);
      } else {
        toast.error("Update failed dasa");
      }
    } catch (err) {
      console.error("Update failed", err);
      toast.error("Error updating product");
    }
    state(false)

  };

  return (
    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
      <td className="w-4 p-4">
        <input type="checkbox" className="w-4 h-4" />
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {canEdit ? (
          <input
            className="border p-1 w-full"
            name="name"
            value={product.name || ""}
            onChange={handleChange}
          />
        ) : (
          item.name
        )}
      </td>

      <td className="px-6 py-4">
        {canEdit ? (
          <div className="flex flex-col items-start">
            <img
              src={preview || item?.image?.url || "/image/default-category.png"}
              alt="preview"
              className="w-24 h-16 object-cover rounded mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="text-xs"
            />
          </div>
        ) : (
          <img
            src={item?.image?.url || "/image/default-category.png"}
            alt={item.name}
            className="w-24 h-16 object-cover rounded"
          />
        )}
      </td>

      <td className="px-6 py-4">
        {canEdit ? (
          <select
            name="category"
            value={product.category || ""}
            onChange={handleChange}
            className="border p-1"
          >
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        ) : (
          categories.find((c) => c._id === item.category)?.name
        )}
      </td>

      <td className="px-6 py-4">{item.status || "Active"}</td>

      <td className="flex items-center px-6 py-4 gap-2">
        {!canEdit ? (
          <>
            <ActionButton
              style="bg-amber-500"
              icon={<Edit />}
              handler={(state) => {setCanEdit(true);state(false)}}
            />
            <ActionButton
              style="bg-[#f44336]"
              icon={<XOctagonIcon />}
              handler={(state) => onDelete(item, state)}
            />
          </>
        ) : (
          <>
            <ActionButton
              text="Save"
              style="bg-pink-500"
              handler={(state)=>{handleUpdate(state)}}
            />
            <ActionButton
              text="Cancel"
              style="bg-gray-400"
              handler={(state)=>{handleCancel(state)}}
            />
          </>
        )}
      </td>
    </tr>
  );
}
