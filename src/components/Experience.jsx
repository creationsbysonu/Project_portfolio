import React from "react";

const Experiences = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Digital Pathshala",
      duration: "Dec 2024 - Current",
      description:
        "Developed and optimized web applications using React and Node.js, improving performance by 25%. Collaborated with cross-functional teams to deliver scalable solutions.",
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      duration: "Jul 2022 - Dec 2024",
      description:
        "Designed and implemented responsive websites for clients, integrating APIs and ensuring excellent user experience.",
    },
    {
      title: "Bachelor of Computer Engineering",
      company: "Tribhuvan University",
      duration: "2021 - 2025",
      description:
        "Studying BE in Computer Engineering. Completed projects in AI, machine learning, and web development, showcasing technical expertise and innovative problem-solving.",
    },
  ];

  return (
    <section id="experiences" className="bg-black py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-orange-500 text-3xl lg:text-5xl font-bold text-center mb-12">
          Experiences
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 pl-8 relative flex flex-col lg:flex-row items-start lg:items-center"
            >
              {/* Marker */}
              <div className="absolute -left-4 w-8 h-8 bg-orange-500 rounded-full border-4 border-black"></div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-white text-xl font-semibold">{exp.title}</h3>
                <h4 className="text-gray-400 text-lg font-medium">{exp.company}</h4>
                <span className="text-gray-500 text-sm">{exp.duration}</span>
                <p className="text-gray-400 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
