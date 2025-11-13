import React from "react";
import Section from "../Section";


export const Banner = ({title, text=""}) => {
    const gradientStyle =   [
        {
            background: `
              /* Layer 1: Radial - Creates the bright, soft, lighter area (like the bottom left) */
              radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
              
              /* Layer 2: Conic - Adds a whirl of the main colors (yellow, orange, pink) */
              conic-gradient(from 120deg at 70% 50%, 
                rgba(255, 255, 255, 0.6),  /* Soft Yellow */
                rgba(255, 255, 255, 0.5),  /* Pastel Orange/Peach */
                rgba(255, 150, 200, 0.6),  /* Light Pink */
                rgba(255, 220, 100, 0.6)   /* Soft Yellow again */
              ),
              
              /* Layer 3: Linear - The primary color base (mostly yellow/orange in the image) */
              linear-gradient(180deg, 
                rgba(54, 148, 186,.9) 0%, /* Bright Yellow-Orange Top */
                rgba(0, 74, 122,.9) 100% /* Pastel Coral Bottom */
              )
            `,
            backgroundBlendMode: 'soft-light, overlay, normal'
          },
        {
          background: `
            radial-gradient(circle at 60% 40%, rgba(255, 255, 200, 0.15) 0%, transparent 50%),
            repeating-linear-gradient(45deg, rgba(0, 200, 255, 0.3) 0px, rgba(0, 150, 220, 0.3) 25px, rgba(0, 180, 240, 0.3) 50px),
            linear-gradient(180deg, rgba(0, 180, 255, 0.85) 0%, rgba(0, 120, 200, 0.9) 100%)
          `,
          backgroundBlendMode: 'screen, overlay, normal'
        },
        {
          background: `
            conic-gradient(from 90deg at 50% 50%, rgba(0, 180, 255, 0.5), rgba(0, 140, 220, 0.6), rgba(0, 200, 255, 0.4), rgba(0, 180, 255, 0.5)),
            radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            linear-gradient(180deg, rgba(0, 160, 240, 0.9) 0%, rgba(0, 100, 180, 0.95) 100%)
          `,
          backgroundBlendMode: 'overlay, soft-light, normal'
        },
        {
          background: `
            repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 220, 0.08) 0, transparent 10px, rgba(255, 255, 255, 0.04) 20px),
            conic-gradient(from 270deg at -50% -50%, rgba(0, 230, 180, .55), rgba(0, 200, 160, 0.6), rgba(50, 255, 200, 0.5), #014878),
            linear-gradient(120deg, rgba(255, 255, 255, .9) 0%, #014878 100%)
          `,
          backgroundBlendMode: 'soft-light, overlay, normal'
        }
      ];
      
    return (

        <main style={gradientStyle[3]} className={`relative z-3001`} >
            <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1440 150"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fill="#fff"
                d="M0,80 C480,200 960,0 1440,100 L1440,150 L0,150 Z"
                />
            </svg>
            <div className="pt-12 sm:pt-16 lg:pt-24 pb-20 sm:pb-32 lg:pb-36"> {/* Increased bottom padding */}
                <div className="mt-20 lg:mt-14">
                    <div className="text-center flex flex-col justify-center items-center">
                    {/* ... (Your H1 and P elements) ... */}
                    <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-7xl font-semibold text-black leading-none mb-3">{title}</h1>
                    <p className=" sm:text-xs lg:text-lg text-gray-800 max-w-2xl font-medium px-4 ">{text}</p>
                    </div>
                </div>
            </div>
            </main>
        
    );
}
