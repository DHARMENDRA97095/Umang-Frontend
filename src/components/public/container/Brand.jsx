import React from 'react'
import Section from '../Section'
import Image from 'next/image'
import PrimaryHeading from '../PrimaryHeading'
import Badge from '../Badge'



function Brand() {

    const brandLogo = [
        '/image/logo/License-1.jpg',
        '/image/logo/Licence-2.jpg',
        '/image/logo/Licence-3.jpg',
        '/image/logo/Licence-4.jpg',
        
    ]
  return (
    <Section className='relative flex flex-col justify-center items-center overflow-hidden '>
                           {/* <div className="absolute left-0 top-0 h-full w-5 lg:w-20 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none z-1"></div> */}

        {/* Right blur overlay */}
        {/* <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none z-2000"></div> */}
        <Badge>Certifications and Compliance</Badge>
        <PrimaryHeading className='text-gray-800 text-2xl font-semibold text-center mb-8'>Certifications and Compliance</PrimaryHeading> 
        <div className="relative w-full overflow-hidden">

            <div className="flex w-max animate-scroll border-blue-500">
                {brandLogo.concat(brandLogo).map((image, index) => (
                <div key={index} className="mx-8 flex-shrink-0 ">
                    <Image
                    src={image}
                    alt="Brand logo"
                    width={350}
                    height={200}
                    className="object-contain border-blue-500"
                    />
                </div>
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Brand
