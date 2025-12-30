"use client"

import React from "react";
import { Banner } from "@/components/public/container/Banner";
import Brand from "@/components/public/container/Brand";
import ProductContainer from "@/components/public/container/Product";

const page = () => {
  return (
    <>
      <div className="relative font-sans antialiased">
        <Banner
          title={"Our Product"}
          text={
            "Premium Quality Rice Exported to Global Markets."
          }
        />
        {/* <ProductCards/> */}
        <ProductContainer />
        <Brand />
      </div>
    </>
  );
};

export default page;
