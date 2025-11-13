import React from 'react'
import Section from '../Section'
import Image from 'next/image'



function Brand() {

    const brandLogo = [
        '/image/logo/partner.svg',
        '/image/logo/partner.svg',
        '/image/logo/partner.svg',
        '/image/logo/partner.svg',
        '/image/logo/partner.svg',
        '/image/logo/partner.svg',
       
    ]
  return (
    <Section className='flex flex-col justify-center items-center'>
        {/* Left blur overlay */}
       <div className="absolute left-0 top-0 h-full w-5 lg:w-20 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none z-3000"></div>

        {/* Right blur overlay */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none z-3000"></div>
        <h1 className='text-gray-800 text-2xl font-semibold text-center mb-8'>Trusted by global brands. <span className='text-blue-800'>Join Millions of customers around the globe.</span></h1>
        <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll">
                {brandLogo.concat(brandLogo).map((image, index) => (
                <div key={index} className="mx-8 flex-shrink-0">
                    <Image
                    src={image}
                    alt="Brand logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    />
                </div>
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Brand
