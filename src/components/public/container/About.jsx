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
    <>
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
            <Badge>ABOUT US</Badge>
            <PrimaryHeading>About the Company</PrimaryHeading>
            <h2 className="text-md md:text-md lg:text-xl font-bold">
              Exobase Private Limited
            </h2>
            <Paragraph>
              We are an India-based export house operating in the agri and
              natural commodities sector, built on businesses that deal with
              material, processes, and scale on a daily basis. Our background
              lies in cotton ginning and pressing, along with shellac sourcing
              and processing—operations that demand discipline, consistency, and
              an understanding of quality that comes only from working on the
              ground.
            </Paragraph>
            <br />
            <Paragraph></Paragraph>
            {/* <h2 className="text-md md:text-md lg:text-xl font-bold mt-4">
              Client Centric Approach
            </h2> */}
            {/* <Paragraph>
              Our team of experts combines deep technical knowledge with
              creative thinking to develop AI-driven strategies that drive
              efficiency, and growth.
            </Paragraph> */}
          </div>
        </div>
        <br />
        <p className="text-base md:text-lg font-medium text-gray-700">
          These activities shaped the way we think long before we entered
          exports. Handling raw material, managing storage, dealing with
          variations in quality, and meeting practical delivery requirements
          have been part of our working environment for decades. This experience
          continues to guide how we approach international trade today—with
          caution, preparation, and respect for execution.
        </p>
        <br />
        <p className="text-base md:text-lg font-medium text-gray-700">
          Our export portfolio is led by rice and cotton, supported by select
          agricultural commodities such as maize, wheat, and sugar, supplied
          based on buyer requirements and market conditions. We deliberately
          keep our focus narrow. Rather than trading across everything
          available, we prefer to understand a limited set of products
          deeply—how they behave, how they are handled, and where risks
          typically arise.
        </p>
        <br />
        <p className="text-base md:text-lg font-medium text-gray-700">
          What sets us apart is the way we approach commitments. We do not treat
          exports as transactions alone. Every shipment is planned with an
          understanding of storage conditions, handling practices, documentation
          requirements, and realistic timelines. Many issues in exports arise
          not during negotiation, but after confirmation. Our emphasis is on
          reducing those gaps through preparation rather than explanations.
        </p>
        <br />
        <p className="text-base md:text-lg font-medium text-gray-700">
          At an operational level, we place strong importance on organisation
          and clarity. From sourcing and bulk storage to shipment coordination,
          we follow processes that are practical rather than theoretical. We pay
          attention to details that are often overlooked—how material is
          stacked, how moisture and handling are managed, and how information
          flows between parties—because these details directly affect outcomes.
        </p>
        <br />
        <p className="text-base md:text-lg font-medium text-gray-700">
          Our interactions with buyers are straightforward. We believe trust is
          built through honest communication, not assurances. Specifications,
          timelines, and documentation are discussed early and aligned with what
          can actually be executed. Where inspections or certifications are
          required, we coordinate them with a clear understanding of both buyer
          expectations and on-ground realities.
        </p>
        <br />
        <p className="text-base md:text-lg font-medium text-gray-700">
          The company is guided by a management structure that brings together
          experience in finance, compliance, operations, and export
          coordination. This allows decisions to be taken with a long-term
          perspective, balancing growth with operational stability. Being
          process-driven helps us remain consistent, especially as volumes and
          responsibilities increase.
        </p>
        <br />
        <p className="text-base md:text-lg font-medium text-gray-700">
          Looking ahead, our aim is not rapid expansion for its own sake. We
          intend to grow steadily—adding products, capabilities, and markets at
          a measured pace—while preserving the operational discipline that
          defines how we work. Through careful execution, realistic commitments,
          and long-term thinking, we seek to build an export house that buyers
          can rely on year after year.
        </p>
      </Section>

      
    </>
  );
}

export default About;
