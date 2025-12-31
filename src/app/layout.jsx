import PageTransition from "@/components/PageTransition";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
