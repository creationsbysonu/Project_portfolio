import React from "react";

const Testimonial = () => {
  return (
    <section id="testimonial" className="bg-black w-full py-16 px-8 lg:px-16">
      {/* Section Container */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-orange-500 text-3xl lg:text-5xl font-bold mb-12">
          What People Say About Me
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <p className="text-gray-400 text-lg mb-4">
              "Working with Sonu was an incredible experience. The level
              of professionalism and attention to detail was unparalleled. Highly
              recommend!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzwVKQG5n0OqBE0MzziiKRh2m_4WX4y-K5A&s"
                alt="Testimonial 1"
                className="rounded-full w-12 h-12 object-cover mr-4"
              />
              <div>
                <h4 className="text-white font-semibold">Chanda Gupta</h4>
                <p className="text-gray-400 text-sm">Optometrist and M.Sc. student at Univeristy of IndianaPollis</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <p className="text-gray-400 text-lg mb-4">
              "Amazing work! The website you created exceeded all expectations.
              It was exactly what we needed, and the design was beautiful. Thank
              you for your dedication!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
                alt="Testimonial 2"
                className="rounded-full w-12 h-12 object-cover mr-4"
              />
              <div>
                <h4 className="text-white font-semibold">Dipesh Yadav</h4>
                <p className="text-gray-400 text-sm">Chartered Acoountant</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <p className="text-gray-400 text-lg mb-4">
              "The team at Sonu brought our vision to life. The
              attention to detail and user experience focus made the project a huge success. looking forward to work more with him."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
                alt="Testimonial 3"
                className="rounded-full w-12 h-12 object-cover mr-4"
              />
              <div>
                <h4 className="text-white font-semibold">Ritesh Sahani</h4>
                <p className="text-gray-400 text-sm">Bachelors in Computer Engineering at IOE Purwanchal Campus, Dharan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
