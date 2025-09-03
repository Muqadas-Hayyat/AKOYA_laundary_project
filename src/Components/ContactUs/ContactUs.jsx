import React from "react";
import ContactLeftCard from "./ContactLeftCArd";
import ContactRightCard from "./ContactRightCard";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#f8f5f2] py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      

      <div className="max-w-7xl mx-auto relative">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight" data-aos="fade-up" data-aos-dealy="0">
            Contact Us
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-12 h-px bg-[#D4AF37] mx-4" data-aos="fade-right" data-aos-dealy="300"></div>
            <p className="text-lg text-[#D4AF37] tracking-widest font-medium" data-aos="fade-up" data-aos-dealy="300">
              GET IN TOUCH
            </p>
            <div className="w-12 h-px bg-[#D4AF37] mx-4" data-aos="fade-left" data-aos-dealy="300"></div>
          </div>
        </div>
        </div>


       

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <ContactLeftCard/>

          {/* Contact Form */}
         <ContactRightCard/>
        </div>
      
    </section>
  );
};

export default ContactUs;
