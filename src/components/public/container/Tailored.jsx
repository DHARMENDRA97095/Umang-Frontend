"use client";

import Tilt from "react-parallax-tilt";
import React from "react";
import Section from "../Section";
import Image from "next/image";
import Badge from "../Badge";
import PrimaryHeading from "../PrimaryHeading";
import Paragraph from "../Paragraph";
import { motion } from "framer-motion";
import Link from "next/link";

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
                transition: { type: "spring", stiffness: 300 },
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
          <PrimaryHeading>About the Company</PrimaryHeading>
          <Paragraph>
            We are an India-based export house operating across the agri and
            natural commodities sector, backed by decades of hands-on experience
            in cotton ginning and pressing, along with shellac sourcing and
            processing. This strong operational legacy forms the backbone of our
            approach to global trade, enabling us to work with structure,
            discipline, and a deep understanding of quality at the ground level.
          </Paragraph>
          <br />
          <Paragraph>
            Our export portfolio is led by rice and cotton, supported by the
            supply of select agricultural commodities such as maize, wheat, and
            sugar, based on buyer requirements and market demand. We focus on
            working with international partners who value consistency, organised
            execution, and transparent communication rather than short-term
            trading.
          </Paragraph>
          <br />

<Link href="/about">
        <button  className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition">→ Read more about the company</button>

</Link>        
        </div>
      </div>

    </Section>
  );
}

export default Tailored;
