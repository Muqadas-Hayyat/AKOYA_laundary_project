import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="relative h-[580px] bg-gradient-to-r from-[#6b6b6b] to-[#ffffff] flex items-center justify-center text-center px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6" data-aos="fade-up" data-aos-delay="0">
          Luxury Laundry. Reimagined.
        </h1>

        <div className="flex items-center mb-8 justify-center">
          <div className="w-16 h-px bg-[#D4AF37] mx-4" data-aos="fade-right" data-aos-delay="300"></div>
          <p className="text-xl text-[#D4AF37] tracking-widest" data-aos="fade-up" data-aos-delay="300">
            AKOYA COLLECTION
          </p>
          <div className="w-16 h-px bg-[#D4AF37] mx-4" data-aos="fade-left" data-aos-delay="300"></div>
        </div>

        <button className='bg-[#D4AF37] text-black font-semibold py-3 px-8 rounded-full  hover:bg-[#b8962e] hover:scale-105 transition duration-300 ease-in-out mb-[20px]' data-aos="fade-up" data-aos-delay="600">
          Schedule Your Pickup
        </button>
      </div>
    </section>
  );
};

export default AboutHeroSection;
