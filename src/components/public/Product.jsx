// components/ProductCard.jsx
import Image from 'next/image';
import { useState } from 'react';
import ProductModal from './ProductModal'; // Import the new modal component

const ProductCard = ({ product }) => {
  // State to manage the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { image, name, description, features } = product;

  return (
    <>
      {/* Product Card Container */}
      <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] ">
        
        {/* Product Image */}
        <div className="relative h-64 w-full">
          <Image
            src={image.url}
            alt={name}
            layout="fill"
            objectFit="fill"
            className="rounded-t-xl"
          />
        </div>

        {/* Product Details */}
        <div className="p-5">
          
          {/* Product Name (Capitalize) */}
          <h2 className="mb-2 text-2xl font-bold capitalize text-gray-900 ">
            {name}
          </h2>
          
          {/* Product Description (Line-Clamp) */}
          <p className="mb-1 text-base text-gray-600 line-clamp-2">
            {description}
          </p>

          {/* Additional Features (Variable) - Keeping the truncated view here */}
          <div className="mt-1 border-t border-gray-200 pt-4 ">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600 ">
              Features
            </h3>
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, index) => ( // Show max 3 features on the card
                <li key={index} className="flex items-start text-sm text-gray-700 ">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="first-letter:capitalize">{feature.title}: { feature?.badge}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-sm text-indigo-500 italic">...and {features.length - 3} more details</li>
              )}
            </ul>
          </div>
          
          {/* Action Button: Triggers the Modal */}
          <button 
            onClick={openModal} // Handler to open the modal
            className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View Details
          </button>

        </div>
      </div>

      {/* The Product Modal Component */}
      <ProductModal 
        product={product} 
        isOpen={isOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default ProductCard;