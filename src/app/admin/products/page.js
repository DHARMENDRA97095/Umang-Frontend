"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify"; 
import ProductCard from "@/components/public/Product.jsx";
import ProductCard2 from '@/components/public/Product2';

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getAll`);

        // Axios resolves on 2xx status codes. We only proceed if data is present.
        if (response.data && response.data.data && response.data.data.length > 0) {
          setProducts(response.data.data);
        } else {
          // Handle cases where the API returns success but the product list is empty
          toast.warning("No products are currently available.");
          // setProducsts([]); // Ensure state is an empty array
        }

      } catch (error) {
        // This handles network errors or non-2xx status codes (4xx, 5xx)
        console.error("Failed to fetch products:", error);
        // You might want to display a more user-friendly error toast here
        toast.error("Error fetching products. See console for details.");
      } finally {
        // Crucial: Always stop loading after the request completes or fails
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="min-h-screen bg-gray-50 p-8 ">
      
      {/* Admin Button */}
      <button 
        className="mb-12 rounded-lg bg-amber-500 p-4 text-white shadow-md transition hover:bg-amber-600" 
        onClick={() => router.push("/admin/dashboard")}
      >
        Go to dashboard
      </button>


      {loading ? (
        // Loading State
        <h1 className="text-center text-xl font-semibold text-gray-700 ">
          <span className="animate-pulse">Loading Products...</span>
        </h1>
      ) : products.length === 0 ? (
        // No Products State
        <h1 className="text-center text-xl font-semibold text-gray-700 ">
          No products found. 😔
        </h1>
      ) : (
        // Product Grid Layout
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products?.map((product) => (
            // Pass the whole product object to the card component
            <ProductCard key={product._id || product.id} product={product} />
          ))}
          {products?.map((product) => (
            // Pass the whole product object to the card component
            <ProductCard2 key={product._id || product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}