import React, { useEffect, useState } from "react";

const ThemedEye = () => {
  const [pupilStyle, setPupilStyle] = useState({
    transform: "translate(0px, 0px)",
  });
  const [isVisible, setIsVisible] = useState(true); // Visibility state for the eye
  const [isHovered, setIsHovered] = useState(false); // Hover state for the eye

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye = document.getElementById("eye-container");
      if (!eye) return; // Exit if the eye is not visible

      const eyeRect = eye.getBoundingClientRect();
      const centerX = eyeRect.left + eyeRect.width / 2;
      const centerY = eyeRect.top + eyeRect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Calculate pupil movement (max 5px in any direction for smaller size)
      const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 3); // Adjusted max movement
      const angle = Math.atan2(deltaY, deltaX);

      const offsetX = distance * Math.cos(angle);
      const offsetY = distance * Math.sin(angle);

      setPupilStyle({
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isVisible) return null; // Don't render the eye if it's turned off

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-0"
      style={{ pointerEvents: "none" }}
    >
      {/* Eye Container */}
      <div
        id="eye-container"
        className="relative w-8 h-8 bg-gray-700 rounded-full shadow-md flex justify-center items-center border border-gray-500"
        style={{ pointerEvents: "auto" }} // Allow interactions with the eye
        onMouseEnter={() => setIsHovered(true)} // Set hover state on entering the eye
        onMouseLeave={() => setIsHovered(false)} // Set hover state on leaving the eye
      >
        {/* Iris */}
        <div className="w-5 h-5 bg-orange-400 rounded-full flex justify-center items-center relative">
          {/* Pupil */}
          <div
            className="w-2 h-2 bg-gray-800 rounded-full"
            style={pupilStyle}
          ></div>

          {/* Close Button (X) */}
          {isHovered && (
            <button
              className="absolute top-0 right-0 text-white text-xs font-bold px-1 py-0.5 bg-red-500 rounded-full hover:bg-red-600 transition-all"
              style={{ pointerEvents: "auto" }} // Allow interaction with the button
              onClick={() => setIsVisible(false)} // Close eye on click
            >
              X
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemedEye;
