"use client";

import React, { useState, Fragment } from "react";
import { AtSign, PhoneCall, Facebook, LucideInstagram } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import Form from "./Form";

export const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();
  const navItems = ["Home", "About", "Product", "Blog", "Contact"];

  return (
    <header className="absolute top-0 left-0 w-full py-3 z-3002 text-black">
      
      {/* ================= TOP BAR (Desktop Only) ================= */}
      <div className="hidden sm:flex px-4 md:px-12 justify-between items-center text-xs font-medium text-gray-700 mb-4 border-b border-gray-200/50 pb-2">
        <div className="flex space-x-6 text-[14px]">
          <span className="flex items-center space-x-2">
            <PhoneCall size={18} className="text-gray-500" />
            <span>+91 99228-33338</span>
          </span>
          <span className="flex items-center space-x-2">
            <AtSign size={18} className="text-gray-500" />
            <span>info@exobase.in</span>
          </span>
        </div>

        <div className="flex space-x-3 items-center">
          <LucideInstagram />
          <Facebook />
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="relative flex justify-between px-4 md:px-12 items-center h-14 border-b border-gray-200/50 pt-4 pb-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo/logo2.png"
            alt="ExoBase"
            width={180}
            height={45}
            priority
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex bg-white/60 backdrop-blur-md rounded-md p-1 shadow-xl border border-white">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);

            return (
              <Link
                key={item}
                href={path}
                className={`px-5 py-2 text-sm font-medium rounded-md mx-1 transition-all duration-200
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

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden lg:block">
          <Button
            className="bg-black text-white hover:bg-gray-200 hover:text-black"
            onClick={() => setShowForm(true)}
          >
            Get in Touch
          </Button>
        </div>

        {/* ================= MOBILE / TABLET MENU BUTTON ================= */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="lg:hidden p-2 rounded-md border border-gray-300"
        >
          ☰
        </button>

        {/* ================= MOBILE / TABLET MENU ================= */}
        {openMenu && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 lg:hidden">
            <nav className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive =
                  path === "/" ? pathname === "/" : pathname.startsWith(path);

                return (
                  <Link
                    key={item}
                    href={path}
                    onClick={() => setOpenMenu(false)}
                    className={`px-4 py-3 rounded-md text-sm font-medium
                      ${
                        isActive
                          ? "bg-black text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {item}
                  </Link>
                );
              })}

              {/* MOBILE CTA */}
              <Button
                className="mt-4 bg-black text-white w-full"
                onClick={() => {
                  setShowForm(true);
                  setOpenMenu(false);
                }}
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* ================= FORM MODAL ================= */}
      <Fragment>
        <Form isVisible={showForm} onClose={() => setShowForm(false)} />
      </Fragment>
    </header>
  );
};
