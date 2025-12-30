// components/ProductCard.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal"; // Import the new modal component

const ProductCard2 = ({ product }) => {
  if (!product) return null;
  // State to manage the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { image, name, description, features = [] } = product;

  return (
    <>
      {/* Product Card Container (Horizontal Layout)
        Using flex for side-by-side. On small screens (sm:), it stays horizontal.
      */}
      <div className="w-full h-150 overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col">
        {/* IMAGE (TOP) */}
        <div className="relative h-100 w-full">
          {product.image && (
            <Image
              src={product.image.url}
              alt={product.name}
              fill
              className="object-cover rounded-t-xl"
            />
          )}
        </div>

        {/* CONTENT (BOTTOM) */}
        <div className="p-5 flex flex-col flex-grow">
          <h2 className="mb-2 text-xl font-bold capitalize text-gray-900">
            {product.name}
          </h2>

          <p className="mb-4 text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>

          <div className="mt-auto border-t pt-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Features
            </h3>

            <ul className="space-y-2">
              {product.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex text-sm text-gray-700">
                  <span className="mr-2 text-green-500">✔</span>
                  <span className="capitalize">
                    {feature.title}
                    {feature.badge && `: ${feature.badge}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>

      {/* The Product Modal Component */}
      <ProductModal product={product} isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default ProductCard2;
