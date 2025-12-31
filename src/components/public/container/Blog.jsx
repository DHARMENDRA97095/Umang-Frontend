"use client";

import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Future of Web Development",
    description:
      "Discover the latest trends in web development including AI, performance optimization frameworks.",
    image: "/image/premium.jpg",
    date: "Sep 20, 2025",
  },
  {
    id: 2,
    title: "Why UI/UX Matters in 2025",
    description:
      "Learn how user experience and interface design directly impact business growth and customer trust.",
    image: "/image/premium.jpg",
    date: "Sep 18, 2025",
  },
  {
    id: 3,
    title: "Building Scalable Applications",
    description:
      "Best practices for creating scalable and secure applications using modern technologies.",
    image: "/image/premium.jpg",
    date: "Sep 15, 2025",
  },
  {
    id: 4,
    title: "Cloud Computing Trends",
    description:
      "Explore how cloud-native technologies are shaping the future of scalable applications.",
    image: "/image/premium.jpg",
    date: "Sep 12, 2025",
  },
  {
    id: 5,
    title: "AI in Modern Business",
    description:
      "Understand how artificial intelligence is transforming decision-making and automation.",
    image: "/image/premium.jpg",
    date: "Sep 10, 2025",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices",
    description:
      "Learn essential cybersecurity practices to protect applications and user data.",
    image: "/image/premium.jpg",
    date: "Sep 08, 2025",
  },
  {
    id: 7,
    title: "Microservices Architecture",
    description:
      "A deep dive into microservices and how they help build scalable systems.",
    image: "/image/premium.jpg",
    date: "Sep 05, 2025",
  },
  {
    id: 8,
    title: "DevOps Culture Explained",
    description:
      "How DevOps practices improve collaboration and deployment speed.",
    image: "/image/premium.jpg",
    date: "Sep 02, 2025",
  },
];

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Blog</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Read our latest articles, insights, and updates from the world of technology and innovation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, visibleCount).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-indigo-600 font-medium">
                  {blog.date}
                </span>

                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600 text-sm line-clamp-3 flex-grow">
                  {blog.description}
                </p>

                <button className="mt-6 text-indigo-600 font-semibold text-sm hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < blogs.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
