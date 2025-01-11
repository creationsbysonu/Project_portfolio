import React from "react";

const Works = () => {
  const projects = [
    {
      title: "Project One",
      description:
        "A short description of your first project. Showcase your skills and achievements with this project.",
      image: "https://via.placeholder.com/400x300",
      link: "#", // Add your project link
    },
    {
      title: "Project Two",
      description:
        "A brief overview of your second project. Highlight the unique aspects of the project.",
      image: "https://via.placeholder.com/400x300",
      link: "#", // Add your project link
    },
    {
      title: "Project Three",
      description:
        "Overview of your third project. Focus on the most impactful features and technologies used.",
      image: "https://via.placeholder.com/400x300",
      link: "#", // Add your project link
    },
  ];

  return (
    <section id="works" className="bg-black py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-orange-500 text-3xl lg:text-5xl font-bold mb-8">
          My Works
        </h2>

        {/* Content */}
        <p className="text-gray-400 text-lg lg:text-xl mb-12 max-w-3xl mx-auto">
          Here are some of the projects I have worked on. I strive to build
          modern, scalable, and user-friendly applications. Explore my work and
          learn more about what I do.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
