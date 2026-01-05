import React from 'react';
import axios from "axios";
import { toast } from "react-toastify"; 
import { Header } from '@/components/public/Header';
import { Hero } from '@/components/public/container/Hero';
import Video from '@/components/public/container/Video';
import Inovation from '@/components/public/container/Inovation';
import ScrollTracker from '@/components/public/ScrollTracker';
import Tailored from '@/components/public/container/Tailored';
import Digital2 from '@/components/public/card/Digital';
import Digital from '@/components/public/container/Digital';
import CaseStudies from '@/components/public/container/CaseStudies';
import Footer from '@/components/public/container/footer';
import CTA from '@/components/public/container/CTA';
import Brand from '@/components/public/container/Brand';

export default function Home() {

  return (
    <div className="relative font-sans antialiased ">
       
        <Hero/>
        <Inovation/>
        <Tailored/>

        {/* <Digital2/> */}
        <CTA/>
        {/* <Brand/> */}

        <Digital/>
        {/* <CaseStudies/> */}
        
    </div>
  );
}


