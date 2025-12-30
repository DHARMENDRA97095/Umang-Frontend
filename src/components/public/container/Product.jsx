"use client";

import React from "react";
// import ProductCard from "../Product";
import ProductCard2 from "../Product2";
// import ProductCard2 from "@/components/ProductCard2";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Quality Rice",
    description: "Cost-effective rice ideal for food processing industries.",
    image: { url: "/image/Premium.jpg" },
    features: [],
  },
  {
    id: 2,
    name: "Premium Quality Rice",
    description: "Cost-effective rice ideal for food processing industries.",
    image: { url: "/image/Premium.jpg" },
    features: [],
  },
  {
    id: 3,
    name: "Premium Quality Rice",
    description: "Cost-effective rice ideal for food processing industries.",
    image: { url: "/image/Premium.jpg" },
    features: [],
  },
  {
    id: 4,
    name: "Premium Quality Rice",
    description: "Cost-effective rice ideal for food processing industries.",
    image: { url: "/image/Premium.jpg" },
    features: [],
  },
  {
    id: 5,
    name: "Premium Quality Rice",
    description: "Cost-effective rice ideal for food processing industries.",
    image: { url: "/image/Premium.jpg" },
    features: [],
  },
  {
    id: 6,
    name: "Premium Quality Rice",
    description: "Cost-effective rice ideal for food processing industries.",
    image: { url: "/image/Premium.jpg" },
    features: [],
  },
];

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getAll`); // 🔁 backend API
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);
  
  if (loading) {
    return <p className="text-center py-20">Loading products...</p>;
  }
  return (
    <>
      <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <ProductCard2 key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>

      {/* {products.map((product,index)=>(<ProductCard2 product={product} key={product.id}/>))} */}
    </>
    // <>
    //   <Section>
    //     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start ">
    //       {/* Left Content  */}
    //       <div className="lg:w-3/5 mb-12 lg:mb-0 flex flex-col items-center justify-center md:block">
    //         <div className="relative bg-radial-[at_50%_50%] from-zinc-500 via-zinc-300 text-z to-white to-70% flex items-center justify-center">
    //           <Tilt
    //             className="bg-transparent absolute left-16 top-[-30px] rounded-2xl"
    //             tiltMaxAngleX={20}
    //             tiltMaxAngleY={20}
    //             perspective={1000}
    //             transitionSpeed={1500}
    //           >
    //             <Image
    //               src="/image/about2.jpg"
    //               alt="Person 3D"
    //               width={300}
    //               height={300}
    //               className=" rounded-xl"
    //               priority
    //             />
    //           </Tilt>

    //           <Tilt
    //             className="bg-transparent"
    //             tiltMaxAngleX={20}
    //             tiltMaxAngleY={20}
    //             perspective={1000}
    //             transitionSpeed={1500}
    //           >
    //             <Image
    //               src="/image/about1.jpg"
    //               alt="Person 3D"
    //               width={300}
    //               height={300}
    //               className=" rounded-xl "
    //               priority
    //             />
    //           </Tilt>
    //         </div>
    //       </div>

    //       {/* Right Content (Trusted by) */}
    //       <div className="lg:w-5/12 mb-12 lg:mb-0 ">
    //         <Badge>Our Product</Badge>
    //         <PrimaryHeading>Our Premium Quality Product</PrimaryHeading>
    //         <h2 className="text-md md:text-md lg:text-xl font-bold">
    //           Exobase Private Limited
    //         </h2>
    //         <Paragraph>
    //           Exobase Private Limited is a professionally managed agro-export
    //           company specializing in the export of premium rice and pulses.
    //           Based in Nagpur, Maharashtra, we are committed to delivering
    //           agricultural products that meet international quality standards
    //           while maintaining competitive pricing and timely delivery.
    //         </Paragraph>
    //         {/* <h2 className="text-md md:text-md lg:text-xl font-bold mt-4">
    //           Client Centric Approach
    //         </h2> */}
    //         {/* <Paragraph>
    //           Our team of experts combines deep technical knowledge with
    //           creative thinking to develop AI-driven strategies that drive
    //           efficiency, and growth.
    //         </Paragraph> */}
    //       </div>
    //     </div>
    //   </Section>

    //   <section className="py-16 bg-gray-50">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {products.map((product) => (
    //           <div
    //             key={product.id}
    //             className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
    //           >
    //             {/* IMAGE */}
    //             <div className="overflow-hidden rounded-t-xl h-72">
    //               <Image
    //                 src={product.image}
    //                 alt={product.title}
    //                 width={400}
    //                 height={400}
    //                 className="w-full h-72 object-cover"
    //                 priority
    //               />
    //             </div>

    //             {/* CONTENT */}
    //             <div className="p-6 flex flex-col flex-grow">
    //               <h5 className="text-lg font-semibold text-gray-900">
    //                 {product.title}
    //               </h5>

    //               <p className="text-gray-600 text-sm mt-3 flex-grow">
    //                 {product.desc}
    //               </p>

    //               <button className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition">
    //                 View Product
    //               </button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}

export default ProductContainer;
