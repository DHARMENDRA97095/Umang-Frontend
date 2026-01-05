// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// export default function PageTransition() {
//   const pathname = usePathname();
//   const [active, setActive] = useState(true);

//   useEffect(() => {
//     setActive(true);

//     const timer = setTimeout(() => {
//       setActive(false);
//     }, 800); // animation duration

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   return (
//     <div
//       className={`
//         fixed inset-0 z-[9999] bg-black
//         transition-all duration-800 ease-in-out
//         ${active
//           ? "translate-x-0 opacity-100"
//           : "-translate-x-full opacity-0"}
//       `}
//     />
//   );
// }
