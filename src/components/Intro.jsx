import React, { useState } from "react";
import photo from "../files/photo.jpg"; // Correct import path

const Intro = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Intro part with full height */}
      <div className="bg-black min-h-screen w-full flex items-center px-8 lg:px-16">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-6xl">
          {/* Intro Text */}
          <div className="text-center lg:text-left space-y-4 lg:w-1/2">
            <h1 className="text-orange-500 text-3xl lg:text-5xl font-bold">
              Hey, it's me Sonu!
            </h1>
            <div
              className="relative group inline-block px-6 py-4 transition-all duration-300 hover:bg-opacity-10 hover:bg-orange-500 rounded-lg"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <p className="text-gray-400 text-lg lg:text-xl transition-all duration-300 group-hover:text-orange-500">
                {hovered
                  ? "It's a big lie haha ahhahahhahahaahhaaaahdhsadjsahdsajdsajdhsahdkjsahdkhajs"
                  : "I'm a passionate developer focused on creating clean, efficient, and user-friendly applications."}
              </p>
            </div>
          </div>

          {/* Photo Frame */}
          <div className="relative mt-8 lg:mt-0 lg:ml-12 lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={photo} // Use the imported image path
              alt="Your Photo"
              className="rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover border-4 border-orange-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
