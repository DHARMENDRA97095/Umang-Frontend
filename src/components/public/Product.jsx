"use client";
// components/ProductCard.jsx

import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal"; // Import the new modal component

const ProductCard = ({ product }) => {
  // State to manage the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { image, name, description, features } = product;

  return (
    <>
      {/* Product Card Container */}
      <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
        {/* Image */}
        <div className="relative h-64 w-full">
          <Image
            src={image?.url || "/image/placeholder.jpg"}
            alt={name}
            fill
            className="rounded-t-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h2 className="mb-2 text-xl font-bold capitalize text-gray-900">
            {name}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

          <div className="mt-4 border-t pt-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Features
            </h3>

            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-700"
                >
                  <svg
                    className="mr-2 h-4 w-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    {feature.title}
                    {feature.badge && `: ${feature.badge}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            View Detail
          </button>
        </div>
      </div>

      {/* The Product Modal Component */}
      <ProductModal product={product} isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default ProductCard;
