"use client";
import PrimaryHeading from "@/components/public/PrimaryHeading";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className=" backdrop-blur-sm w-full lg:w-1/2 flex flex-col justify-center px-8 py-12">
      <PrimaryHeading>Get In Touch.</PrimaryHeading>
      <p className="text-gray-600 text-lg mb-10">
        Connect with Exobase Private Limited for consistent quality, competitive pricing, and dependable export solutions.
      </p>

      <div className="space-y-6 text-gray-700">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6" />
          <span>
            Tata Capitol Heights, Tower 4, Room 1202, Rambagh, Near VR Mall,
            Nagpur, Maharashtra – 440003
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6" />
          <span>info@exobase.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6" />
          <span>+47 213 5941 295</span>
        </div>
      </div>
    </div>
  );
}
