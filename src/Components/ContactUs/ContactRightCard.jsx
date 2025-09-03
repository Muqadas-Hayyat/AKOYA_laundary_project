import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactRightCard = () => {
  const formData = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

  
   

    emailjs
      .sendForm("service_5j2dkbr", "template_urpycks", formData.current, {
        publicKey: "uBQXNvri7hw9bDA5B",
      })
      .then(() => {
        toast("Sent Successfully!", {
          type: "success",
          theme: "dark",
          transition: Bounce,
        });

        // Clear form after success
        formData.current.reset();
      })
      .catch((err) => {
        toast("Error from server. Try again!", {
          type: "error",
          theme: "dark",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10" data-aos="fade-left" data-aos-delay="0">
      <h3 className="text-xl font-medium text-[#1C1C1C] mb-6">
        Send us a message
      </h3>
      <form ref={formData} onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#2C2C2C] mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            name="user_name" // <-- required for EmailJS
            type="text"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border border-[#00000010] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition bg-[#fafafa]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#2C2C2C] mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="user_email" // <-- required for EmailJS
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-[#00000010] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition bg-[#fafafa]"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#2C2C2C] mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message" // <-- required for EmailJS
            rows="5"
            placeholder="How can we help you?"
            required
            className="w-full px-4 py-3 border border-[#00000010] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition bg-[#fafafa]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#1C1C1C] text-white font-medium rounded-lg transition-colors hover:bg-[#D4AF37] hover:text-black"
        >
          Send Message
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ContactRightCard;
