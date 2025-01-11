import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "works", label: "Works" },
    { id: "experiences", label: "Experiences" },
    { id: "testimonial", label: "Testimonial" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-black py-4 flex items-center justify-center space-x-8 lg:space-x-16 sticky top-0 z-50">
      {navLinks.map((link) => (
        <ScrollLink
          key={link.id}
          to={link.id}
          smooth={true}
          duration={500}
          className={`text-sm lg:text-base font-medium hover:underline transition-all ${
            activeSection === link.id ? "text-orange-500" : "text-white"
          }`}
        >
          {link.label}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default Navbar;
