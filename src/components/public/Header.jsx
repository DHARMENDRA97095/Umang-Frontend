import React from "react";
import { AtSign, PhoneCall, UserCircle, Facebook, LucideInstagram } from 'lucide-react';
import Button from "./Button";
import Image from "next/image";

export const Header = () => (
    <header className="absolute top-0 left-0 w-full  py-3 z-3002 text-black">
      {/* Top Contact Bar (Hidden on small mobile, more accurate styling) */}
      <div className="hidden sm:flex px-4 md:px-12 justify-between items-center text-xs font-medium text-gray-700 mb-4 border-b border-gray-200/50 pb-2">
          <div className="flex space-x-6 text-[14px]">
              {/* Contact Info */}
              {[[<PhoneCall size={18} className="text-gray-500"/>,'+1 234 9091'], [<AtSign/>,'starthub@email.com'], [<UserCircle/>,'5th Ave, NYC']].map((info, index) => (
                  <span key={index} className="flex items-center space-x-2">
                      {/* Placeholder Icon */}
                      {info[0]}
                      <span>{info[1]}</span>
                  </span>
              ))}
          </div>
          <div className="flex space-x-3 items-center text-white">
              {/* Social Icons (Placeholder for alignment) */}
              <a href="#" aria-label="Pinterest"><LucideInstagram/></a>
                <a href="#" aria-label="Pinterest"><Facebook/></a>
          </div>
      </div>
  
      {/* Main Navigation Bar */}
      <div className="flex justify-between px-4 md:px-12 items-center h-14 border-b border-gray-200/50 pt-6 pb-10">
        {/* Left Section: Menu Grid and Logo */}
        <div className="flex items-center space-x-4">
          {/* Menu Grid Icon - simplified */}
        
          
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            {/* Star Icon (using an icon similar to a star/bolt for "starthub") */}
            <Image src="/image/logo/logo2.png" alt="ExoBase"  width={150} height={50} className=" text-white"/>
            {/* <div className=" rounded-full flex items-center justify-center"> */}
              {/* <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> */}
            {/* </div> */}
          </a>
        </div>
  
        {/* Center Section: Navigation Links (The prominent pill-shaped area) */}
        <nav className="hidden lg:flex bg-white/60 backdrop-blur-md rounded-md p-1 shadow-xl border border-white top-0">
          {['Home', 'About', 'Solutions', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={item == 'Home'?`/`:`/${item.toLowerCase()}`}
              className={`px-5 py-2 text-sm font-medium rounded-md mx-2 transition-colors duration-200 ${
                item === 'Home' 
                  ? 'bg-black text-white shadow-md' 
                  : 'text-gray-700 hover:bg-white/90'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
  
        {/* Right Section: Language and CTA */}
        <div className="flex items-center space-x-4">
          {/* Language Dropdown - simplified */}
          
  
          {/* Get in Touch Button (Black background as per design) */}
          <Button className={"bg-black text-white hover:bg-gray-200 hover:text-black "}>Get in Touch</Button>
          
        </div>
      </div>
    </header>
  );