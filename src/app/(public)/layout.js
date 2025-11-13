// app/(public)/layout.js

import { Header } from "@/components/public/Header";
import ScrollTracker from "@/components/public/ScrollTracker";
import Footer from "@/components/public/container/footer";

export default function PublicSiteLayout({ children }) {
  return (
    <>
     <Header/>
    <ScrollTracker/>
      <main>{children}</main>
    <Footer/>
    </>
  );
}
