import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section id="contact" className="bg-black w-full py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-orange-500 text-3xl lg:text-5xl font-bold mb-8">
          Contact Me
        </h2>
        <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto mb-8">
          Have a project in mind, or just want to say hello? Feel free to reach
          out to me through this form. I'd love to hear from you!
        </p>

        <form
          action="https://formspree.io/f/xyzzlepe"  // Replace with your Formspree form ID
          method="POST"
          className="max-w-3xl mx-auto grid gap-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 mt-2 bg-gray-800 text-white rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 mt-2 bg-gray-800 text-white rounded-lg"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 mt-2 bg-gray-800 text-white rounded-lg"
              rows="6"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-6 text-white">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
