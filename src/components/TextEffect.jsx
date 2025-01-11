import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TextEffect = () => {
  const texts = ["Building webistes ?", " or UI/UX Design ?", " or Problem Solving ?"];
  const [currentText, setCurrentText] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // State for fading out the page
  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setFadeIn(true);
      }, 500);
    }, 3000);

    // Navigate to MainPage after the whole sequence (9 seconds) with fading out
    const timeout = setTimeout(() => {
      setFadeOut(true); // Start the fade-out effect
      setTimeout(() => {
        navigate('/main'); // Redirect to the "MainPage" after fade-out is complete
      }, 1000); // Wait for the fade-out effect to finish (1000ms)
    }, 9000); // 9 seconds for the full text effect duration

    return () => {
      clearInterval(interval); // Cleanup interval
      clearTimeout(timeout);   // Cleanup timeout
    };
  }, [texts.length, navigate]);

  return (
    <div
      className={`h-screen bg-black flex flex-col justify-center items-center px-4 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`} // Apply the fade-out class
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
        Hi there !, Are you seeking for {" "}
        <span
          className={`inline-block transition-opacity duration-500 ${
            fadeIn ? "opacity-100" : "opacity-0"
          } text-orange-500`}
        >
          {texts[currentText]}
        </span>
      </h1>
      <p className="mt-4 text-gray-400 text-sm md:text-lg text-center max-w-lg">
        Explore the world of software, AI, ML and Design magic with me :)
      </p>
    </div>
  );
};

export default TextEffect;
