"use client";
import { useEffect, useState } from "react";

export default function ScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed z-[30002] right-4 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center">
      {/* Text */}
      <div className="color mb-4 text-sm text-gray-600 rotate-[-90deg] -translate-[2.5px] origin-center">scroll</div>

      {/* Scroll line */}
      <div className="relative h-24 w-[2px] bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full bg-gray-700 transition-all duration-200"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
