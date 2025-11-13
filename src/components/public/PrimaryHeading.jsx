import React from 'react'

function PrimaryHeading({children, className=''}) {
  return (
    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight  mb-6 ${className}`}>
            {children}
    </h2>
  )
}

export default PrimaryHeading