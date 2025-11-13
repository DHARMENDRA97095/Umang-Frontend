"use client";
import PrimaryHeading from "@/components/public/PrimaryHeading";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className=" backdrop-blur-sm w-full lg:w-1/2 flex flex-col justify-center px-8 py-12">
      <PrimaryHeading>Get In Touch.</PrimaryHeading>
      <p className="text-gray-600 text-lg mb-10">
        We are here to answer any question you may have. Feel free to reach via contact form.
      </p>

      <div className="space-y-6 text-gray-700">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6" />
          <span>290 Maryam Springs 260, Paris</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6" />
          <span>hello@liquid-themes.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6" />
          <span>+47 213 5941 295</span>
        </div>
      </div>
    </div>
  );
}
