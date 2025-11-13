// components/ProductCard.jsx
import Image from 'next/image';
import { useState } from 'react';
import ProductModal from './ProductModal'; // Import the new modal component

const ProductCard2 = ({ product }) => {
  // State to manage the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { image, name, description, features } = product;

  return (
    <>
      {/* Product Card Container (Horizontal Layout)
        Using flex for side-by-side. On small screens (sm:), it stays horizontal.
      */}
      <div className=" w-2xl h-full sm:h-2/4 overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-row">
        
        {/* Left Side: Product Image 
          Takes up 1/3 of the width on small screens and up (sm:w-1/3)
        */}
        <div className="relative  sm:h-80 w-1/3 flex-shrink-0">
          <Image
            src={image.url}
            alt={name}
            layout="fill"
            objectFit="cover" // Changed to cover for a better look in a fixed aspect ratio area
            className="sm:rounded-l-xl sm:rounded-tr-none rounded-t-xl" // Adjust rounded corners for horizontal layout
          />
        </div>

        {/* Right Side: Product Details 
          Takes up 2/3 of the width on small screens and up (sm:w-2/3)
        */}
        <div className="p-5 flex flex-col sm:w-2/3">
          
          {/* Product Name */}
          <h2 className="mb-2 text-2xl font-bold capitalize text-gray-900">
            {name}
          </h2>
          
          {/* Product Description */}
          <p className="mb-4 text-base text-gray-600 line-clamp-3"> {/* Increased line clamp for more content */}
            {description}
          </p>

          {/* Additional Features (Variable) */}
          <div className=" border-t border-gray-200 pt-4"> {/* mt-auto pushes this and the button to the bottom */}
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Features
            </h3>
            <ul className="space-y-2">
              {features.slice(0, 2).map((feature, index) => ( // Show max 2 features for a compact look
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="first-letter:capitalize">{feature.title}: { feature?.badge}</span>
                </li>
              ))}
              {features.length > 2 && (
                <li className="text-sm text-indigo-500 italic">...and {features.length - 2} more details</li>
              )}
            </ul>
          </div>
          
          {/* Action Button: Triggers the Modal */}
          <button 
            onClick={openModal} 
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

export default ProductCard2;