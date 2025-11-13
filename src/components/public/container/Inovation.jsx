import React from 'react';
import Section from '../Section';
import Badge from '../Badge';
import PrimaryHeading from '../PrimaryHeading';
import Paragraph from '../Paragraph';

// Define the data for the service boxes
const services = [
  { name: 'Advertising', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 15h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5zm1.5-3h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5zm1.5-3h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5z' }, // Placeholder for Advertising
  { name: 'eCommerce', icon: 'M19 8h-4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H19V3H5v4.5c.28 0 .5.22.5.5s-.22.5-.5.5H5v11h14V8zm-2 1h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2z' }, // Placeholder for eCommerce
  { name: 'Segment', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' }, // Placeholder for Segment
  { name: 'Illustration', icon: 'M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H20zm-7-7.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-5 4.5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v6z' }, // Placeholder for Illustration
  { name: 'Web Design', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' }, // Placeholder for Web Design
  { name: 'Social Media', icon: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.5 13H10v-3h2c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7H9v8h3.5v-2h-2v-1h2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z' }, // Placeholder for Social Media
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
          <Badge >Innovation</Badge>
          
          {/* Main Heading */}
          <PrimaryHeading>Developing AI Solutions.</PrimaryHeading>
          
          {/* Description */}
        <Paragraph>Whether you are looking to create a new website from scratch or revamp your existing one, our team of skilled designers and developers is here to help you achieve your goals.</Paragraph>
        </div>

        {/* Right Content (Services Grid) */}
        <div className="lg:w-6/12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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


