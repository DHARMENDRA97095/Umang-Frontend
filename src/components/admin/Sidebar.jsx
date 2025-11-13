"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  LayoutDashboard,
  Image,
  Box,
  FileText,
  Table,
  MapPin,
  LayoutGrid,
  BarChart3,
  Calendar,
  ChevronDown,
  Newspaper,
  Boxes,
  User,
  LogOut,
  UserCircle2
} from "lucide-react";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

    // close dropdown when clicking outside
    useEffect(() => {
      const close = (e) => {
        if (!e.target.closest(".user-dropdown")) setOpen(false);
      };
      if (open) document.addEventListener("click", close);
      return () => document.removeEventListener("click", close);
    }, [open]);

    const handleLogout = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
          method: "POST",
          credentials: "include", // ensures cookies are sent
        });
    
        const data = await response.json();
    
        if (data.success) {
          // clear client state and redirect
          localStorage.removeItem("user");
          window.location.href = "/admin";
        } else {
          console.error("Logout failed:", data.message);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };
    

  const menuItems = [
    { text: "Dashboard", icon: <LayoutDashboard />, href: "/admin/dashboard" },
    { text: "Banner", icon: <Image />, href: "/admin/dashboard/manageBanner" },
    { text: "Categories", icon: <Box />, href: "/admin/dashboard/manageCategory" },
    { text: "Products", icon: <Boxes />, href: "/admin/dashboard/manageProducts" },
    // { text: "Inquiries", icon: <Table />, href: "/admin/dashboard/manageInquiries" },
    { text: "Blogs", icon: <Newspaper/>, href:"/admin/dashboard/manageBlogs"}
  ];

  return (
    <>
      {/* Toggle button for small screens */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-black/70 text-white p-2 rounded"
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-[url("/image/sidebar-1.jpg")] fixed inset-y-0 left-0 z-40 w-64 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:flex-shrink-0 bg-cover bg-center`}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Logo */}
          <div className="border-b border-white/30 p-4">
            <h1 className="text-white text-2xl font-bold text-center">
              Admin Panel
            </h1>
          </div>

          {/* User */}
          <div className="relative user-dropdown">
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 p-3 border-b border-white/30 w-full hover:bg-white/10 transition"
      >

        <UserCircle2 className="w-10 h-10 rounded-full object-cover bg-amber-50"/>
        
        <span className="font-semibold text-sm text-white">Tania Andrew</span>
        <ChevronDown
          size={16}
          className={`ml-auto transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className={`absolute w-full bg-white text-gray-800  shadow-lg overflow-hidden transition-transform duration-900 ${
          open ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-2"
        }`}>
          <button className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100">
            <User size={16} /> Profile
          </button>
          <button className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
          onClick={handleLogout}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>

          {/* Nav links */}
          <nav className="flex-1 p-2 space-y-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                text={item.text}
                href={item.href}
                active={pathname === item.href}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

function SidebarItem({ icon, text, href, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 p-3 rounded transition-colors ${
        active
          ? "bg-cyan-500 text-white"
          : "text-gray-200 hover:bg-white/20 hover:text-white"
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

export default Sidebar;
