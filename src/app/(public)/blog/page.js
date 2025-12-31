"use client"

import React from "react";
import { Banner } from "@/components/public/container/Banner";
import Brand from "@/components/public/container/Brand";
import Blog from "@/components/public/container/Blog";

const page = () => {
  return (
    <>
      <div className="relative font-sans antialiased">
        <Banner
          title={"Our Blog"}
          text={
            "Premium Quality Rice Exported to Global Markets."
          }
        />
        
        {/* <Brand /> */}
        <Blog/>
      </div>
    </>
  );
};

export default page;
