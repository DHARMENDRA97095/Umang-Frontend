"use client";
import Tilt from "react-parallax-tilt";
import React from "react";
import Section from "../Section";
import Image from "next/image";
import Badge from "../Badge";
import PrimaryHeading from "../PrimaryHeading";
import Paragraph from "../Paragraph";
import { motion } from "framer-motion";


function About() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start ">
        {/* Left Content  */}
        <div className="lg:w-3/5 mb-12 lg:mb-0 flex flex-col items-center justify-center md:block">
          <div className="relative bg-radial-[at_50%_50%] from-zinc-500 via-zinc-300 text-z to-white to-70% flex items-center justify-center">
          
          <Tilt
            className="bg-transparent absolute left-16 top-[-30px] rounded-2xl"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1500}
          >
            <Image
              src="/image/about2.jpg"
              alt="Person 3D"
              width={300}
              height={300}
              className=" rounded-xl"
              priority
            />
           
          </Tilt>
         
          <Tilt
            className="bg-transparent"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1500}
          >
            <Image
              src="/image/about1.jpg"
              alt="Person 3D"
              width={300}
              height={300}
              className=" rounded-xl "
              priority
            />
           
          </Tilt>
          
          </div>
        </div>

        {/* Right Content (Trusted by) */}
        <div className="lg:w-5/12 mb-12 lg:mb-0 ">
          <Badge>Tailored Service</Badge>
          <PrimaryHeading>Driven by innovation</PrimaryHeading>
          <h2 className="text-md md:text-md lg:text-xl font-bold">Client Centric Approach</h2>
          <Paragraph>
            Our team of experts combines deep technical knowledge with creative
            thinking to develop AI-driven strategies that drive efficiency, and
            growth.
          </Paragraph>
          <h2 className="text-md md:text-md lg:text-xl font-bold mt-4">Client Centric Approach</h2>
          <Paragraph>
            Our team of experts combines deep technical knowledge with creative
            thinking to develop AI-driven strategies that drive efficiency, and
            growth.
          </Paragraph>
        </div>
      </div>
    </Section>
  );
}

export default About;
