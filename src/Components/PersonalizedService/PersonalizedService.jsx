import React from 'react'

const PersonalizedService = () => {
  return (
    <div className='bg-[#1C1C1C] py-20 px-6 md:px-16 lg:px-24 text-center'>
      <div className='max-w-4xl mx-auto'>
        <h3 className='text-2xl md:text-3xl font-light text-[#D4AF37] mb-6' data-aos="fade-up" data-aos-dealy="0">
          Need Personalized Service?
        </h3>
        <p className='text-white/80 mb-8' data-aos="fade-up" data-aos-dealy="300">
          Our VIP concierge team is available 24/7 to handle special requests,
          delicate items, or bulk orders for businesses and residences.
        </p>

        <a href='/contact'>
          <button
            className='px-8 py-3 bg-[#D4AF37] text-[#1C1C1C] rounded-full font-medium inline-flex items-center gap-2 
                       transform transition-transform duration-300 hover:scale-105 hover:bg-[#c9a227] shadow-lg' data-aos="fade-up" data-aos-dealy="600"
          >
            Contact Concierge
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 
                   4.418-4.03 8-9 8a9.863 9.863 0 
                   01-4.255-.949L3 20l1.395-3.72C3.512 
                   15.042 3 13.574 3 12c0-4.418 
                   4.03-8 9-8s9 3.582 9 8z'
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  )
}

export default PersonalizedService
