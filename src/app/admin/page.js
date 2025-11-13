"use client";
import React from 'react'
import { useRouter } from "next/navigation";

function Admin() {

    const router = useRouter()
  return (
    <div>
   { router.push("admin/dashboard")}     
    </div>
  )
}

export default Admin
