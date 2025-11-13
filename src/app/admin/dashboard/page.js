"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { Image, LayoutDashboard, Box, Boxes, Table, Newspaper } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import InqueriesSection from '@/components/admin/InquriesSection';

export default function AdminDashboard() {
const [Loading,setLoading] = useState(false)
const [stats,setStats] = useState({})

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analytics/count`);
        const data = await res.json();
        if (data.success) setStats(data.data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const menuItems = [
    { text: "Banner", icon: <Image size={40} />, href: "/admin/dashboard/manageBanner", color: "bg-pink-500", shadow: "shadow-pink-300/50", count:stats?.banner | 0},
    { text: "Categories", icon: <Box size={40} />, href: "/admin/dashboard/manageCategory", color: "bg-emerald-500", shadow: "shadow-emerald-300/50" , count:stats?.categories | 0},
    { text: "Products", icon: <Boxes size={40} />, href: "/admin/dashboard/manageProducts", color: "bg-orange-500", shadow: "shadow-orange-300/50" , count:stats?.products | 0 },
    // { text: "Inquiries", icon: <Table size={40} />, href: "/admin/dashboard/manageInquiries", color: "bg-cyan-500", shadow: "shadow-cyan-300/50" , count:stats?.inquiries | 0},
    { text: "Blogs", icon: <Newspaper size={40} />, href: "/admin/dashboard/manageBlogs", color: "bg-purple-500", shadow: "shadow-purple-300/50" , count:stats?.blogs | 0},
  ];

  return (
    <div>
      <div className="p-4 mt-6 flex flex-wrap gap-4 justify-center">
      {menuItems.map((item, index) => (
        <Link href={item.href} key={index} className='w-[22%]'>
          <div
            className={`relative w-full h-[120px] bg-white rounded-[5px] p-4 pt-8 shadow-md hover:shadow-lg transition-all duration-300 group`}
          >
            <div
              className={`icon ${item.color} ${item.shadow} p-4 rounded-[10px] absolute -top-6 left-6 text-white group-hover:scale-110 transition-transform duration-300`}
            >
              {item.icon}
            </div>
            <div className="text-right pr-4">
              <h3 className="text-gray-500 text-lg capitalize font-medium">{item.text}</h3>
              <p className="text-3xl font-semibold text-gray-700">{item.count}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <InqueriesSection/>
    </div>
  );
}
