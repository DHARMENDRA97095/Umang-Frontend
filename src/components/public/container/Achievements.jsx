import React from 'react'
import Section from '../Section'
import Badge from '../Badge'
import PrimaryHeading from '../PrimaryHeading'
import Paragraph from '../Paragraph'

function Achievements() {
  return (
    <Section className='flex flex-col justify-center items-center bg-[url(/image/floating_icons/path-left.svg)] bg-cover' >
        <div className='flex flex-col justify-center items-center mb-8'>
            <Badge>Our Achievements</Badge>
            <PrimaryHeading>Building The Future</PrimaryHeading>
            <Paragraph className='text-center'>Discover the success stories from our clients who have benefited from our cutting-edge AI solutions.</Paragraph>
        </div>
        <div className='md:w-2xl md:shadow-xl flex flex-col backdrop-blur-sm'>
            <div className='flex  justify-around gap-10 md:gap-0 md:border-b-[1px] border-gray-700 '>
                <div className='md:border-r-[1px] border-gray-700 w-full flex flex-col justify-center items-center py-4 '>
                    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight `}>
                            19+
                    </h2>
                    <Paragraph>Total Top Services</Paragraph>
                </div>
                <div className=' w-full flex flex-col justify-center items-center py-4 '>
                    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight  `}>
                            19+
                    </h2>
                    <Paragraph>Total Top Services</Paragraph>
                </div>
            </div>
            <div className='flex  justify-around gap-10 md:gap-0  '>
                <div className='md:border-r-[1px] border-gray-700 w-full flex flex-col justify-center items-center py-4 '>
                    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight `}>
                            19+
                    </h2>
                    <Paragraph>Total Top Services</Paragraph>
                </div>
                <div className=' w-full flex flex-col justify-center items-center py-4 '>
                    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight  `}>
                            19+
                    </h2>
                    <Paragraph>Total Top Services</Paragraph>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Achievements
