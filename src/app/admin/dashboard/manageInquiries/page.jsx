"use client"
import React from 'react'
import { FileText } from 'lucide-react'

function InqueriesSection() {
  const filter = 0
  const handleFilter=()=>{}
  return (
    <div className="p-6">
        <div className=" mt-15">
            <div className="bg-white shadow rounded-sm w-full relative mt-5">
                <div className="flex items-center gap-3 p-4">
                <div className="bg-pink-500 text-white p-2 rounded shadow absolute -top-3 z-10">
                    <FileText />
                </div>
                <h2 className="text-lg font-semibold pl-12">Manage Inquiries</h2>
                </div>

                <div className="px-2 max-h-[70vh] flex justify-between">
                    <div>
                        
                        <select
                            value={filter}
                            onChange={handleFilter}
                            className="w-48 border rounded-lg px-2 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700"
                            >
                            <option value="">Select catagory</option>
                            {/* {categories?.map((cat) => (
                                <option key={cat._id} value={cat._id} className="capitalize">
                                    {cat.name}
                                </option>
                            ))} */}
                            
                        </select>
                    </div>
                    {/* <div className="relative">
                        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                    </div> */}
                </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone No
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
                                {/* table Rows */}
                                {1 && <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4 text-center" colSpan={7}>
                                        No Inquiries added Yet!!
                                    </td>
                                    
                                </tr>}
                                {/* {0 && rows?.map((item,index)=>(
                                    <tr key={item._id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       { item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        
                                        <img
                                        src={item?.image?.url}
                                        alt={`banner-${item.name}`}
                                        className="w-24 h-16 object-cover rounded"
                                    />
                                    </td>
                                    <td className="px-6 py-4">
                                        {obj[item.category]}
                                        
                                    </td>
                                    
                                    <td className="px-6 py-4">
                                        {obj[item._id]}
                                        
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <ActionButton text="" style= "bg-amber-500 mr-2" icon={<Edit/>} handler = {(state)=>{}}/> 
                                        <ActionButton text="" style= "bg-[#f44336] mr-2" icon={<XOctagonIcon />} handler = {(state)=>{handleDeleteAction(item,state)}} />
                                        <ActionButton text="" style= "bg-[#007acc] mr-2" icon={<View/>} handler = {(state)=>{}}/>
                                    </td>
                                </tr>
                                ))} */}
                                
                               
                                

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default InqueriesSection
