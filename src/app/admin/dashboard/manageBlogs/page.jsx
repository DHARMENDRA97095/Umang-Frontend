// src\app\admin\dashboard\manageBlogs\page.jsx
"use client"

import dynamic from 'next/dynamic';
import AddBlog from '@/components/admin/AddBlog.jsx'; // Assuming this is where AddBlog lives
import BlogCategories from '@/components/admin/BlogCategory';

// Dynamically import the AddBlog component, disabling SSR for it.
// The TiptapEditor is inside AddBlog, so rendering AddBlog client-side fixes the issue.
const ClientSideAddBlog = dynamic(() => import('@/components/admin/AddBlog'), {
  ssr: false, // <-- This is the key
  loading: () => <p>Loading editor...</p> // Optional: Show a loading state
});

export default function BlogsSection() {
  // ... (You'll need to pass the props like rows, setRows, and categories here)

  return (
    <div className="p-6">
      <BlogCategories/>
      {/* Use the dynamically imported component */}
      <div className='mt-14'>
      <ClientSideAddBlog /* pass required props here */ /> 
      </div>
    </div>
  );
}