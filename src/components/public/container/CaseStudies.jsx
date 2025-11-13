import React from 'react';
import Section from '../Section';
import Badge from '../Badge';
import PrimaryHeading from '../PrimaryHeading';
import Paragraph from '../Paragraph';


const ServiceBox = ({ name, iconPath }) => (
  <div 
  style={{
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
    }}
  className="bg-gray-200 p-2 md:p-4 rounded-md border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-200 cursor-pointer h-full flex flex-col items-center justify-center text-center hover:scale-110 active:scale-95 transform">
    {/* Icon Area - styled to match the faint blue/gray line-art look */}
    <div className="w-full mb-4 md:mb-6 flex justify-start">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* The icon itself is just a placeholder path for visual representation */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={iconPath} />
        </svg>
    </div>
    
    {/* Name */}
    <p className="text-lg font-semibold text-gray-800 self-start">{name}</p>
  </div>
);


// --- Main AI Solutions Component ---
const CaseStudies= () => {
  return (
    <Section className=" ">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center ">
        {/* Left Content (Text) */}
        <div className="lg:w-full flex flex-col items-center">
          {/* Tag */}
          <Badge >Innovation</Badge>
          {/* Main Heading */}
          <PrimaryHeading className='text-center'>Developing AI Solutions.</PrimaryHeading>
          {/* Description */}
          <Paragraph className='text-center'>Whether you are looking to create a new website from scratch or revamp your existing one Lorem ipsum dolor sit amet consectetur adipisicing.</Paragraph>
        </div>

        <div className="lg:w-full h-[100vh]">

        </div>

      </div>
    </Section>
  );
};

export default CaseStudies;
