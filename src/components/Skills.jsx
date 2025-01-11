import React from "react";

const Skills = () => {
  const skillData = [
    {
      name: "React.js",
      description: "Building dynamic UIs and SPAs.",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png", // React Icon
    },
    {
      name: "Node.js",
      description: "Server-side development and APIs.",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png", // Node.js Icon
    },
    {
      name: "MongoDB",
      description: "NoSQL database management.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzlF0cI1C-682U2HcOpqjigAIxmhmEuBmdA&s", // MongoDB Icon
    },
    {
      name: "Tailwind CSS",
      description: "Modern, responsive styling.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png", // Tailwind CSS Icon
    },
    {
      name: "MySQL",
      description: "Handling database through use of PhpMyAdmin in built in XAMPP.",
      image: "https://cdn-icons-png.flaticon.com/512/919/919836.png", // JavaScript Icon
    },
    {
      name: "Git & GitHub",
      description: "Version control and collaboration.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", // Git Icon
    },
    {
      name: "Python",
      description: "Data analysis and scripting.",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", // Python Icon
    },
    {
      name: "Problem Solving",
      description: "Algorithms and logical reasoning.",
      image: "https://cdn-icons-png.flaticon.com/512/3050/3050509.png", // Problem Solving Icon
    },
  ];

  return (
    <section id="skills" className="bg-black w-full py-16 px-8 lg:px-16">
      {/* Section Container */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-orange-500 text-3xl lg:text-5xl font-bold mb-8">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:bg-gray-700 transition-all flex flex-col items-center"
            >
              {/* Skill Image */}
              <img
                src={skill.image}
                alt={`${skill.name} Icon`}
                className="w-16 h-16 mb-4 object-contain"
              />

              {/* Skill Name */}
              <h3 className="text-white text-lg font-semibold">{skill.name}</h3>

              {/* Skill Description */}
              <p className="text-gray-400 text-sm mt-2 text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
