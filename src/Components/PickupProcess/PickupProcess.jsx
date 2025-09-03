


import React from 'react'

const PickupProcess = () => {
  return (
    
    <section className="bg-[#f8f5f2] py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden text-left">
    

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3" data-aos="fade-up" data-aos-dealy="0">How It Works</h2>
          <div className="flex justify-center items-center">
            <div className="w-12 h-px bg-[#D4AF37] mx-4" data-aos="fade-right" data-aos-dealy="300"></div>
            <p className="text-lg text-[#D4AF37] tracking-widest font-medium" data-aos="fade-up" data-aos-dealy="300">SEAMLESS PICKUP PROCESS</p>
            <div className="w-12 h-px bg-[#D4AF37] mx-4" data-aos="fade-left" data-aos-dealy="300"></div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative bodrer border-amber-900">
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#D4AF37] transform -translate-x-1/2"></div>
          <div className="space-y-24 md:space-y-32">
            
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16" data-aos="fade-up" data-aos-delay="0">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
                <video className="w-full h-64 md:h-80 object-cover" autoPlay loop muted playsInline>
                  <source src="/videos/Pickup.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="hidden md:flex absolute -left-24 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#D4AF37] text-white items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                  <div className="md:hidden absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold shadow-md">
                    1
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#D4AF37]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-[#1C1C1C]">Schedule Your Pickup</h3>
                  </div>
                  <p className="text-[#2C2C2C] mb-6">
                    Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.
                  </p>
                  <ul className="space-y-2 text-sm text-[#2C2C2C] pt-4 border-t border-[#00000010]">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>24/7 booking availability</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Recurring pickup scheduling available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16" data-aos="fade-up" data-aos-delay="300">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
                <video className="w-full h-64 md:h-80 object-cover" autoPlay loop muted playsInline>
                  <source src="/videos/professional_collection.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="hidden md:flex absolute -left-24 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#D4AF37] text-white items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                  <div className="md:hidden absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold shadow-md">
                    2
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#D4AF37]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-[#1C1C1C]">Professional Collection</h3>
                  </div>
                  <p className="text-[#2C2C2C] mb-6">
                    Our uniformed valets arrive in discreet luxury vehicles with garment bags.
                  </p>
                  <ul className="space-y-2 text-sm text-[#2C2C2C] pt-4 border-t border-[#00000010]">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Contactless pickup available</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Digital receipt provided</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16" data-aos="fade-up" data-aos-delay="600">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
                <video className="w-full h-64 md:h-80 object-cover" autoPlay loop muted playsInline>
                  <source src="/videos/ExpertProcessing.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="hidden md:flex absolute -left-24 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#D4AF37] text-white items-center justify-center font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                  <div className="md:hidden absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold shadow-md">
                    3
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#D4AF37]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-[#1C1C1C]">Expert Processing</h3>
                  </div>
                  <p className="text-[#2C2C2C] mb-6">
                    Your garments receive specialized care at our state-of-the-art facility.
                  </p>
                  <ul className="space-y-2 text-sm text-[#2C2C2C] pt-4 border-t border-[#00000010]">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Individual garment tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Quality control at every stage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16" data-aos="fade-up" data-aos-delay="900">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
                <img className="w-full h-64 md:h-80 object-cover" src="/images/luxury-2.jpg" alt="Luxury Delivery" />
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="hidden md:flex absolute -left-24 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#D4AF37] text-white items-center justify-center font-bold text-xl shadow-lg">
                  4
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                  <div className="md:hidden absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold shadow-md">
                    4
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#D4AF37]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-[#1C1C1C]">Luxury Delivery</h3>
                  </div>
                  <p className="text-[#2C2C2C] mb-6">Impeccably packaged garments returned at your preferred time.</p>
                  <ul className="space-y-2 text-sm text-[#2C2C2C] pt-4 border-t border-[#00000010]">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Same-day delivery available</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hanger-ready with protective covers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA button */}
        <div className="text-center mt-20">
          <button className="px-8 py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-3 text-sm tracking-wider transform transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="1000">
            Schedule Your Pickup
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
  
}

export default PickupProcess