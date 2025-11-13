import React from 'react'

function Paragraph({children, className=""}) {
  return (
    <p className={`max-w-lg text-base md:text-lg font-medium text-gray-700 ${className}`}>
            {children}
    </p>
  )
}

export default Paragraph