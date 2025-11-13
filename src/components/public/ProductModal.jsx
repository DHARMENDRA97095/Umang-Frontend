// components/ProductModal.jsx
import Image from 'next/image';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const { image, name, description, features } = product;

  return (
    // Modal Overlay (Fixed position, covers the whole screen)
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-opacity-75 p-4 transition-opacity duration-300">
      
      {/* Modal Content */}
      <div className="relative max-h-full w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-500 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className='flex items-center justify-center gap-10 flex-col sm:flex-row'>
            {/* Modal Header (Image and Name) */}
            <div className="flex-col items-center justify-center  border-gray-900 sm:pb-6 sm:flex-row sm:space-x-8">
            
                {/* Full Image */}
                <div className="relative h-64 w-64 flex-shrink-0 sm:h-100 sm:w-100">
                    <Image
                    src={image.url}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg border border-gray-100"
                    />
                </div>

                {/* Product Title */}
                <div className="mt-4 sm:mt-0">
                    <h2 className="text-center text-2xl font-extrabold capitalize text-gray-900">
                    {name}
                    </h2>
                    
                </div>
            </div>

            {/* Full Description Section */}
            <div className="mt-6 sm:w-1/2">
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                    Product Description
                </h3>
                <p className="text-gray-600">
                    {description} {/* This is the full description */}
                </p>
            </div>
        
            
        </div>
        {/* All Features Section */}
        <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                    Key Features & Specifications
                </h3>
                <ul className="grid grid-cols-1 gap-4 ">
                    {features.map((feature, index) => (
                    <li key={index} className="flex items-start rounded-md bg-gray-50 p-3 text-gray-700">
                        <svg className="mr-3 h-5 w-5 flex-shrink-0 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                        <strong className="first-letter:capitalize">{feature.title}:</strong> {feature.value}
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
        
        
        {/* CTA Button: Contact Now */}
        <a 
          href="mailto:contact@example.com?subject=Inquiry about product: [Product Name]" 
          className="mt-8 block w-full rounded-lg bg-green-600 px-6 py-3 text-center text-lg font-bold text-white transition duration-200 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2"
        >
          Contact Now! 📞
        </a>

      </div>
    </div>
  );
};

export default ProductModal;