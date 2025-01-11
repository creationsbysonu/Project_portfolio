import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="bg-black w-full py-16 px-8 lg:px-16">
        {/* Section Container */}
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-orange-500 text-3xl lg:text-5xl font-bold mb-8">
            About
          </h2>

          {/* Content */}
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl">
            I am a dedicated and passionate developer with a keen eye for detail
            and a commitment to delivering high-quality, user-focused solutions.
            My expertise lies in creating modern, responsive, and visually
            appealing applications that seamlessly integrate functionality with
            aesthetics. Whether it's front-end design, back-end logic, or both, I
            strive to bring ideas to life through code.
          </p>

          {/* Highlighted Skillset */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-400">
            <div className="bg-gray-700 p-6 rounded-lg hover:shadow-lg hover:bg-gray-800 transition-all">
              <h3 className="text-white text-xl font-semibold">Front-End Development</h3>
              <p className="mt-2 text-sm">
                Expertise in crafting pixel-perfect interfaces using modern tools like React, Tailwind CSS, and more.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg hover:shadow-lg hover:bg-gray-800 transition-all">
              <h3 className="text-white text-xl font-semibold">Back-End Development</h3>
              <p className="mt-2 text-sm">
                Proficient in building robust server-side logic and APIs using Node.js, Express, and MongoDB.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg hover:shadow-lg hover:bg-gray-800 transition-all">
              <h3 className="text-white text-xl font-semibold">Problem Solving</h3>
              <p className="mt-2 text-sm">
                Analytical problem-solver with experience in optimizing performance and tackling complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
