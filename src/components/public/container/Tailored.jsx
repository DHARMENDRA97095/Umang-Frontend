"use client";

import Tilt from "react-parallax-tilt";
import React from "react";
import Section from "../Section";
import Image from "next/image";
import Badge from "../Badge";
import PrimaryHeading from "../PrimaryHeading";
import Paragraph from "../Paragraph";
import { motion } from "framer-motion";


function Tailored() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start ">
        {/* Left Content  */}
        <div className="lg:w-3/5 mb-12 lg:mb-0 flex flex-col items-center justify-center md:block">
          <div className="bg-radial-[at_60%_40%] from-pink-300 via-white to-white to-40% flex items-center justify-center">
          <motion.div
          animate={{
            y: [0, -20, 0], // move up then down
          }}
          transition={{
            duration: 2, // total time per bounce
            repeat: Infinity, // keep looping
            ease: "easeInOut", // smooth bounce
          }}
          // ✨ 2. Stop bouncing and slightly scale when hovered
          whileHover={{
            y: 0, // stop vertical motion
            transition: { type: "spring", stiffness: 300},
          }}
        >
          <Tilt
            className="bg-transparent"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
          >
            <Image
              src="/image/person3D.png"
              alt="Person 3D"
              width={450}
              height={450}
              className="inner-image select-none"
              priority
            />
          </Tilt>
          </motion.div>
          </div>
        </div>

        {/* Right Content (Trusted by) */}
        <div className="lg:w-5/12 mb-12 lg:mb-0 ">
          <Badge>About Us Section</Badge>
          <PrimaryHeading>Who We Are</PrimaryHeading>
          <Paragraph>
            Exobase Private Limited is a professionally managed agro-export company specializing in 
            the export of premium rice and pulses. Based in Nagpur, Maharashtra, we are committed to 
            delivering agricultural products that meet international quality standards while maintaining 
            competitive pricing and timely delivery.
          </Paragraph>
        </div>
      </div>
    </Section>
  );
}

export default Tailored;
