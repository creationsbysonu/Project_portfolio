import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-8 lg:px-16">
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-start space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all text-2xl"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all text-2xl"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all text-2xl"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all text-2xl"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>

          {/* Medium */}
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all text-2xl"
            aria-label="Medium"
          >
            <i className="fab fa-medium"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center lg:justify-end space-x-8">
          <a
            href="#about"
            className="hover:text-orange-500 transition-all text-sm lg:text-base"
          >
            About
          </a>
          <a
            href="#works"
            className="hover:text-orange-500 transition-all text-sm lg:text-base"
          >
            Works
          </a>
          <a
            href="#experiences"
            className="hover:text-orange-500 transition-all text-sm lg:text-base"
          >
            Experiences
          </a>
          <a
            href="#contact"
            className="hover:text-orange-500 transition-all text-sm lg:text-base"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm">
        <p>
          © {new Date().getFullYear()} Your Name. All Rights Reserved. Built
          with ❤️ using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
