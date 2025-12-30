import React from 'react';
import Section from '../Section';
import Badge from '../Badge';
import PrimaryHeading from '../PrimaryHeading';
import Paragraph from '../Paragraph';

// Define the data for the service boxes
const services = [
  { name: 'Hygienic processing', icon: 'M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6l7-4zm-1 11l-2-2c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0l1.29 1.29 3.29-3.29c.2-.2.51-.2.71 0 .2.2.2.51 0 .71L11 13z'}, // Placeholder for Advertising
  { name: 'Advanced sorting & grading', icon: 'M4 6h16c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H4c-.28 0-.5.22-.5.5s.22.5.5.5zm0 5h10c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H4c-.28 0-.5.22-.5.5s.22.5.5.5zm0 5h6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H4c-.28 0-.5.22-.5.5s.22.5.5.5zm12.5-2.5l1.5 1.5 3-3'}, // Placeholder for eCommerce
  { name: 'Moisture & impurity checks', icon: 'M12 2C9 6 6 9.5 6 13a6 6 0 0012 0c0-3.5-3-7-6-11zm-1 13l-2-2c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0l1.29 1.29 3.29-3.29c.2-.2.51-.2.71 0 .2.2.2.51 0 .71L11 15z'}, // Placeholder for Segment
  { name: 'Secure packaging', icon: 'M3 7l9-5 9 5v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm9 4a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2zm-3 4h6v2H9v-2z'}, // Placeholder for Illustration
  // { name: 'Web Design', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' }, // Placeholder for Web Design
  // { name: 'Social Media', icon: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.5 13H10v-3h2c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7H9v8h3.5v-2h-2v-1h2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z' }, // Placeholder for Social Media
];

// --- Service Grid Item Component ---
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
const Inovation = () => {
  return (
    <Section className=" ">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start ">
        
        {/* Left Content (Text) */}
        <div className="lg:w-5/12 mb-12 lg:mb-0 ">
          
          {/* Tag */}
          <Badge >QUALITY ASSURANCE SECTION</Badge>
          
          {/* Main Heading */}
          <PrimaryHeading>Quality You Can Trust</PrimaryHeading>
          
          {/* Description */}
        <Paragraph>At Exobase Private Limited, quality is our top priority. From sourcing to packaging, every step follows strict quality control measures to meet international export standards.</Paragraph>
        </div>

        {/* Right Content (Services Grid) */}
        <div className="lg:w-6/12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service) => (
              <ServiceBox key={service.name} name={service.name} iconPath={service.icon} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Inovation;


