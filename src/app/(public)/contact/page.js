import React from 'react'
import { Banner } from '@/components/public/container/Banner'
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Section from '@/components/public/Section';
import Footer from '@/components/public/container/footer';

function page() {
  return (
    <div>
      <div className="relative font-sans antialiased">
        <Banner title={'Contact'} text={"Our team of experts combines deep technical knowledge with creative thinking"}/>
        <Section className='flex flex-col md:flex-row items-center justify-center bg-[url(/image/floating_icons/path-left.svg)] bg-no-repeat bg-top-right bg-cover'>
        <ContactInfo />
        <ContactForm />
        
        </Section>
        <div className="w-full h-[350px] rounded-2xl overflow-hidden mt-8 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991274044013!2d2.29448131567493!3d48.85837007928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf7ec9d3cf%3A0x9fa55ed96b6a5e2!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1689778350323!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
        <Footer/>
    </div>
  )
}

export default page
