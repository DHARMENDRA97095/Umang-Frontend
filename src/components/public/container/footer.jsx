import {Instagram, Facebook, Youtube } from "lucide-react";
import Section from "../Section";
import Image from "next/image";

export default function Footer() {
  return (
   <Section>
     <footer className="relative bg-white py-10 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8  border-b border-gray-200 pb-10">
        {/* Left: Logo + text */}
        <div className="flex flex-col items-start gap-4 text-sm text-gray-600 max-w-sm">
          <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <Image src="/image/logo/logo2.png" alt="ExoBase"  width={150} height={50} className=" text-white"/>
          </a>
          </div>
        </div>

        {/* Center: Nav links */}
        <nav className="flex items-center gap-6 text-gray-700 md:text-md text-sm">
          <a href="#" className="hover:text-gray-900 transition">Careers</a>
          <a href="#" className="hover:text-gray-900 transition">GitHub</a>
          <a href="#" className="hover:text-gray-900 transition">Community</a>
          <a href="#" className="hover:text-gray-900 transition">Subscribe</a>
          <a href="#" className="hover:text-gray-900 transition">Ads</a>
        </nav>
      </div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between  pt-10" >
        <div className="flex flex-col items-start gap-4 text-sm text-gray-600 max-w-sm">
          <p>
            All images are for demo purposes only. I am bound by the terms of
            the Service. I accept Privacy Policy.
          </p>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-6 text-gray-600">
          <Youtube className="hover:text-gray-900 cursor-pointer" size={32}/>
          <Facebook className="hover:text-gray-900 cursor-pointer" size={32}/>
          <Instagram className="hover:text-gray-900 cursor-pointer" size={32}/>
        </div>
      </div>

  
    </footer>
   </Section>
  );
}
