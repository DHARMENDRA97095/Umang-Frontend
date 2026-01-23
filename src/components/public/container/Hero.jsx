import React from "react";
import Image from "next/image";
import Button from "../Button";
import Section from "../Section";
import Video from "./Video";
import Link from "next/link";
import { Contact } from "lucide-react";
import TenorGif from "../TenorGif";

export const Hero = () => {
  // Custom Gradient Background: Adjusted to match the soft, multi-point color distribution.
  const gradientStyle = [
    {
      background: `
              /* Layer 1: Radial - Creates the bright, soft, lighter area (like the bottom left) */
              radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
              
              /* Layer 2: Conic - Adds a whirl of the main colors (yellow, orange, pink) */
              conic-gradient(from 120deg at 70% 50%, 
                rgba(255, 220, 100, 0.6),  /* Soft Yellow */
                rgba(255, 180, 150, 0.5),  /* Pastel Orange/Peach */
                rgba(255, 150, 200, 0.6),  /* Light Pink */
                rgba(255, 220, 100, 0.6)   /* Soft Yellow again */
              ),
              
              /* Layer 3: Linear - The primary color base (mostly yellow/orange in the image) */
              linear-gradient(180deg, 
                rgba(255, 200, 100, 0.9) 0%, /* Bright Yellow-Orange Top */
                rgba(255, 150, 150, 0.9) 100% /* Pastel Coral Bottom */
              )
            `,
      backgroundBlendMode: "soft-light, overlay, normal",
    },
    {
      background: `url('/image/hero-bg.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "overlay, soft-light, normal",
    },

    {
      background: `
              /* Layer 1: Radial - Soft white highlight bottom-left */
              radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.9) 0%, transparent 60%),
          
              /* Layer 2: Radial - Subtle warm spot top-right */
              radial-gradient(circle at 90% 20%, rgba(255, 220, 180, 0.4) 0%, transparent 60%),
          
              /* Layer 3: Radial - Pinkish hue middle-left */
              radial-gradient(circle at 30% 40%, rgba(255, 180, 200, 0.35) 0%, transparent 70%),
          
              /* Layer 4: Linear - very soft white base */
              linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)
            `,
      backgroundBlendMode: "soft-light, overlay, normal",
    },
    {
      background: `
              repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 220, 0.08) 0, transparent 10px, rgba(255, 255, 255, 0.04) 20px),
              conic-gradient(from 270deg at -50% -50%, rgba(0, 230, 180, .55), rgba(0, 200, 160, 0.6), rgba(50, 255, 200, 0.5), #014878),
              linear-gradient(120deg, rgba(255, 255, 255, .9) 0%, #014878 100%)
            `,
      backgroundBlendMode: "soft-light, overlay, normal",
    },
  ];

  // Placeholder Logos (Adjusted to look more like the screenshot)
  const logos = [
    {
      name: "Nike",
      element: (
        <Image
          src="/image/logo/nike.svg"
          alt="Nike"
          height={150}
          width={150}
        ></Image>
      ),
    },
    {
      name: "Marvel",
      element: (
        <Image
          src="/image/logo/marvel.svg"
          alt="Marvel"
          height={150}
          width={150}
        ></Image>
      ),
    },
    {
      name: "Lyft",
      element: (
        <Image
          src="/image/logo/lyft.svg"
          alt="Lyft"
          height={100}
          width={100}
        ></Image>
      ),
    },
  ];

  return (
    <main  className=" py-5 px-5">
      <div className="relative px-10 overflow-hidden rounded-4xl">
      <video autoPlay loop muted playsInline className="absolute inset-0 -z-10 h-full w-full object-cover">
            <source src="/video/banner2.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 -z-1 bg-black opacity-50"></div>
      <Section>
        <div className=" sm:pt-16  pb-12 sm:pb-16 lg:pb-14 flex flex-col lg:flex-row items-center md:items-start md:justify-between justify-center ">
          {/* Left Content (Text and Buttons) */}
          <div className=" mb-12 flex flex-col text-center items-center justify-center ">
            {/* Main Heading - large, bold, and tightly spaced */}
            <h1 className="text-center  text-3xl sm:text-5xl lg:text-6xl xl:text-5xl font-extrabold leading-none tracking-tighter mb-6 text-white w-[70%]">
              Delivering Premium Quality Rice to Global Markets
            </h1>

            {/* Description */}
            <p className=" text-base sm:text-lg font-medium text-white mb-10 text-center  w-[50%]">
              Exobase Private Limited is a trusted exporter of high-quality rice
              and pulses, delivering excellence from Indian farms to
              international destinations with consistency, purity, and
              reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              {/* Get in Touch (Black button) */}
              <Link href="product">
                <Button className="bg-black text-white hover:text-black">
                  Explore Products
                </Button>
              </Link>

              {/* View Works (Light button) */}
              <Link href="contact">
                <Button className={"bg-gray-200 text-black"}>Contact Us</Button>
              </Link>
            </div>
          </div>

          {/* Right Content (Trusted by) */}
          
        </div>
      </Section>
      {/* <Video/> */}
      </div>
    </main>
  );
};
