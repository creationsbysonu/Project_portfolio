import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Intro from "./Intro";
import About from "./About";
import Works from "./Works";
import Experiences from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import ThemedEye from "./ThemedEye";

const Body = () => {
  return (
    <>
      <ThemedEye />
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Works />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Body;
