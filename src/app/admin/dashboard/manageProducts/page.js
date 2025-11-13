"use client";
import React from 'react'
import { useEffect, useState } from "react";
import {FileText} from "lucide-react";
import AddProducts from "@/components/admin/AddProducts";
import axios from "axios";
import { toast } from "react-toastify";
import ProductTableRow from '@/components/admin/ProductTableRows';





export default function productsSection() {
    
    const [loading, setLoading]=useState(false)
    const [categories,setCategories] = useState([])
    const [obj,setObj] = useState({})
    const [filter, setFilter] = useState("");
    const [rows, setRows] = useState([]);
    


    useEffect( ()=>{
        const controller = new AbortController;
        (async ()=>{
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/getCategory`,{
                    signal:controller.signal
                })
    
                if(data?.success)
                {
                    setCategories(data.data)
                }
            } catch (error) {
                if (error?.message!="canceled")
                toast.error(error.message);
            }
            
        })();

        (async ()=>{
            setLoading(true)
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getAll`,{
                    signal:controller.signal
                })

                if(data.success)
                {
                    setRows(data?.data||[])
                }
            } catch (error) {
                if (error?.message!="canceled")
                toast.error(error.message);
            }
            setLoading(true)
            
        })();

        
    
        return ()=>(controller.abort())
    },[])

    useEffect(()=>{
        (()=>{
            categories.forEach((doc)=>{
                obj[doc._id] = doc.name
            })
            setObj(obj);
        })();
    },[categories])
  
  const handleDeleteAction = async(item,state)=>{
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/product/delete/${item._id}/${item.image?.public_id|| 0}`
      );
    
      if (response.status === 200) {
        const newRows = rows.filter((r) => r._id !== item._id); // immutably remove deleted row
        setRows(newRows);
        toast.success("Products deleted successfully");
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
  const handleFilter = (e)=>{
        setFilter(e.target.value);

        const controller = new AbortController;
        (async ()=>{
            setLoading(true)
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/get/${e.target.value}`,{
                    signal:controller.signal
                })

                if(data.success)
                {
                    setRows(data?.data||[])
                }
            } catch (error) {
                toast.error(error.message);
            }
            setLoading(true)
            
        })();


  }

  return (
    <div className="p-6">
        <AddProducts rows={rows} setRows={setRows} categories={categories} />
        <div className=" mt-15">
            <div className="bg-white shadow rounded-sm w-full relative mt-5">
                <div className="flex items-center gap-3 p-4">
                <div className="bg-pink-500 text-white p-2 rounded shadow absolute -top-3 z-10">
                    <FileText />
                </div>
                <h2 className="text-lg font-semibold pl-12">Manage Products</h2>
                </div>

                <div className="px-2 max-h-[70vh] flex justify-between">
                    <div>
                        
                        <select
                            value={filter}
                            onChange={handleFilter}
                            className="w-48 border rounded-lg px-2 py-1 text-sm text-gray-700  bg-white "
                            >
                            <option value="">Select catagory</option>
                            {categories.map((cat) => (
                                <option key={cat._id} value={cat._id} className="capitalize">
                                    {cat.name}
                                </option>
                            ))}
                            
                        </select>
                    </div>
                    {/* <div className="relative">
                        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500    " placeholder="Search for items"/>
                    </div> */}
                </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2  "/>
                                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.length === 0 ? (
                                    <tr>
                                    <td colSpan={6} className="text-center py-4">
                                        No Product added yet
                                    </td>
                                    </tr>
                                ) : (
                                    rows.map((item) => (
                                    <ProductTableRow
                                        key={item._id}
                                        item={item}
                                        categories={categories}
                                        onDelete={handleDeleteAction}
                                        onUpdate={(id, updated) =>
                                        setRows((prev) =>
                                            prev.map((row) => (row._id === id ? updated : row))
                                        )
                                        }
                                    />
                                    ))
                                )}
                                </tbody>

                        </table>
                    </div>

                </div>
            </div>
    </div>
  );
}
