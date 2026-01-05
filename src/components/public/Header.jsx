"use client";

import React, { useState } from "react";
import { Fragment } from "react";
import { AtSign, PhoneCall, Facebook, LucideInstagram } from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

export const Header = () => {

  const [showform, setShowForm] = useState(false);

  const pathname = usePathname();

  const navItems = ["Home", "About", "Product", "Blog", "Contact"];

  return (
    <header className="absolute top-0 left-0 w-full py-3 z-3002 text-black">
      {/* Top Contact Bar */}
      <div className="hidden sm:flex px-4 md:px-12 justify-between items-center text-xs font-medium text-gray-700 mb-4 border-b border-gray-200/50 pb-2">
        <div className="flex space-x-6 text-[14px]">
          {[
            [
              <PhoneCall size={18} className="text-gray-500" />,
              "+91 99228-33338",
            ],
            [<AtSign />, "info@exobase.in"],
          ].map((info, index) => (
            <span key={index} className="flex items-center space-x-2">
              {info[0]}
              <span>{info[1]}</span>
            </span>
          ))}
        </div>

        <div className="flex space-x-3 items-center">
          <a href="#" aria-label="Instagram">
            <LucideInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between px-4 md:px-12 items-center h-14 border-b border-gray-200/50 pt-6 pb-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo/logo2.png"
            alt="ExoBase"
            width={200}
            height={50}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex bg-white/60 backdrop-blur-md rounded-md p-1 shadow-xl border border-white">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

            // ✅ Active logic (supports /blog/slug)
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);

            return (
              <Link
                key={item}
                href={path}
                className={`px-5 py-2 text-sm font-medium rounded-md mx-2 transition-all duration-200
                  ${
                    isActive
                      ? "bg-black text-white shadow-md"
                      : "text-gray-700 hover:bg-white/90"
                  }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Fragment>
          <Button className="bg-black text-white hover:bg-gray-200 hover:text-black" onClick={() => setShowForm(true)}>
            Get in Touch
          </Button>
          <Form isVisible={showform} onClose= {() =>setShowForm(false)}/>
        </Fragment>
      </div>
    </header>
  );
};
