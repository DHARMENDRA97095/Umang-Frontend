"use client"
import React from 'react'

function Button({children, className, action}) {
  return (
    <button
        style={{
            transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
        }}
        className={` px-5 py-3 rounded-[8px] text-base font-medium
                    shadow-md hover:bg-gray-200 
                    hover:-translate-y-1 hover:shadow-2xl hover:brightness-110
                    active:scale-95 transform ${className}`}
        >
        {children}
    </button>
  )
}

export default Button