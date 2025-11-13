import React from "react";
import Section from "../Section";
import Button from "../Button";
import Image from "next/image";

function CTA() {
  return (
    <Section className=" ">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col  justify-between items-center ">
        <div className="relative z-[-301] flex md:gap-15 gap-2 justify-center items-center">
          <div><Image src="/image/logo/partner.svg" alt="Logo" height={150} width={150}/></div>
          <div className="h-10 w-[2px] rounded bg-gray-400"></div>
          <div><Image src="/image/logo/partner.svg" alt="Logo" height={150} width={150}/></div>
          <div className="h-10 w-[2px] rounded bg-gray-400"></div>
          <div><Image src="/image/logo/partner.svg" alt="Logo" height={150} width={150}/></div>
        </div>
        <div>
          <div className="relative z-30 flex flex-col items-center text-center mt-20 sm:mt-24 md:mt-32 ">
            <section className="relative  flex flex-col items-center justify-center  px-4 ">

              {/* Large Central White Oval/Cloud */}
              <div
                className="absolute top-0  w-full max-w-[300px] h-[270px] sm:h-[270px] lg:h-[270px] 
                        backdrop-blur-2xl rounded-t-full z-[-200] "
                style={{
                  // Custom CSS for a slightly wider oval shape on desktop
                  width: "90%",
                  maxWidth: "850px",
                  transform: "scaleY(1.3)",
                }}></div>

              <div className="absolute z-[-300]   w-sm h-10 bottom-80 md:bottom-90 animate-custom-bounce">
                {/* Floating Spheres (Styled to match the design) */}
                <div className="absolute top-0    right-20  w-16 h-16  bg-radial from-pink-400 from-40% to-fuchsia-700 rounded-full z-[-10]"></div>
                <div className="absolute top-2  left-20 w-18 h-18 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-full z-[-10]"></div>
                <div className="absolute bottom-10  right-40  w-12 h-12 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% rounded-full z-[-10]"></div>
                <div className="absolute bottom-10 right-20  w-4 h-4 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% rounded-full z-[-10] hidden sm:block"></div>
              </div>

              {/* --- Text and CTA Content --- */}

              <div className="relative z-30 flex flex-col items-center text-center mt-20 sm:mt-24 md:mt-32">
                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
                  Let's talk.
                </h1>

                {/* Descriptive Paragraph */}
                <p className="text-base sm:text-md lg:text-md text-gray-700 max-w-xl mb-10 px-4">
                  Ready to transform your business with our cutting-edge AI and
                  digital solutions? Don't wait any longer to take the next step
                  towards innovation and growth.
                </p>

                {/* CTA Buttons */}
                <div className="flex space-x-4">
                  <Button className="bg-gray-900 text-white hover:bg-gray-300 hover:text-gray-900 hover:border-2 hover:border-gray-900">
                    Get In Touch
                  </Button>
                  <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900 hover:border-2 hover:border-gray-900">
                    View Works
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CTA;
