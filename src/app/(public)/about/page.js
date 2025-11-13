import { Banner } from "@/components/public/container/Banner";
import axios from "axios";
import About from "@/components/public/container/About";
import Brand from "@/components/public/container/Brand";
import Footer from "@/components/public/container/footer";
import Achievements from "@/components/public/container/Achievements";

export default function Home() {

  return (
    <div className="relative font-sans antialiased">
        <Banner title={'About Us'} text={"Our team of experts combines deep technical knowledge with creative thinking"}/>
        <About/>
        <Achievements/>
        <Brand/>
    </div>
  );
}


