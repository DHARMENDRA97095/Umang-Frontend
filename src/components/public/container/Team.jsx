import React from "react";
import Section from "../Section";
import Badge from "../Badge";
import PrimaryHeading from "../PrimaryHeading";
import Paragraph from "../Paragraph";

const Team = () => {
  return (
    <>
      <Section className="flex flex-col justify-center items-center">
  {/* Heading */}
  <div className="flex flex-col justify-center items-center mb-12">
    <Badge>Our Teams</Badge>
    <PrimaryHeading>Trusted Experience</PrimaryHeading>
    <Paragraph className="text-center max-w-2xl">
      Discover the success stories from our clients who have benefited from our cutting-edge AI solutions.
    </Paragraph>
  </div>

  {/* Team Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">

    {/* Card 1 */}
    <div className="bg-white h-100 rounded-xl  p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <img
        src="/image/director.jpeg"
        alt="Team Member"
        className="w-50 h-50 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">Siddhika Agrawa</h3>
      <p className="text-sm font-medium text-indigo-600">Director</p>
      <p className="text-sm text-gray-600 mt-3">
        She holds a degree in Finance from NMIMS and brings experience in consulting and business analysis to support the company’s strategic growth.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white h-100 rounded-xl  p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <img
        src="/image/Premium.jpg"
        alt="Team Member"
        className="w-50 h-50 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">Aisha Khan</h3>
      <p className="text-sm font-medium text-indigo-600">AI Specialist</p>
      <p className="text-sm text-gray-600 mt-3">
        Designs intelligent AI-driven solutions to improve efficiency and business growth.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg- h-100 rounded-xl  p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <img
        src="/image/Premium.jpg"
        alt="Team Member"
        className="w-50 h-50 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">Rahul Verma</h3>
      <p className="text-sm font-medium text-indigo-600">Full Stack Developer</p>
      <p className="text-sm text-gray-600 mt-3">
        Builds scalable web applications with clean architecture and modern technologies.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white h-100 rounded-xl  p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <img
        src="/image/Premium.jpg"
        alt="Team Member"
        className="w-50 h-50 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">Neha Sharma</h3>
      <p className="text-sm font-medium text-indigo-600">UI/UX Designer</p>
      <p className="text-sm text-gray-600 mt-3">
        Crafts intuitive and visually engaging user experiences focused on usability.
      </p>
    </div>

  </div>
</Section>

    </>
  );
};

export default Team;
