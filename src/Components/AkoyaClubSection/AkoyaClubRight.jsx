import React from 'react'

const AkoyaClubRight = () => {
  return (
    <div data-aos="fade-left" data-delay="400">
      <h2 className='text-3xl md:text-4xl font-light text-[#D4AF37] mb-4 tracking-tight' data-aos="fade-up" data-aos-dealy="0">
        Akoya Club
      </h2>
      <p className='text-lg text-white/80 mb-2 tracking-widest font-medium' data-aos="fade-up" data-aos-dealy="300">
        FOR THE FEW WHO KNOW
      </p>
      <div className='w-20 h-0.5 bg-[#D4AF37] my-6' data-aos="fade-left" data-aos-dealy="400"></div>
      <p className='text-white/90 mb-8 leading-relaxed' data-aos="fade-up" data-aos-dealy="600">
        Our invitation-only membership program offers unparalleled benefits for
        those who demand the absolute best in garment care and convenience.
      </p>

      <ul className='space-y-4 mb-10'>
        {[
          'Priority scheduling with 2-hour pickup windows',
          'Dedicated garment concierge',
          'Complimentary fragrance infusion',
          'Luxury packaging as standard',
          'Bi-annual complimentary couture care',
          'Exclusive seasonal offers'
        ].map((item, index) => (
          <li key={index} className='flex items-start text-white/90'>
            <svg
              className='w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className='flex flex-col sm:flex-row gap-4'>
        <button className='px-8 py-3 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition duration-300 ease-in-out'>
          Request Invitation
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
              strokeWidth='2'
              d='M12 4v16m8-8H4'
            />
          </svg>
        </button>

        <button className='px-8 py-3 bg-[#D4AF37] text-[#1C1C1C] rounded-full font-medium flex items-center justify-center gap-2 active:scale-105 transition-transform duration-100'>
          Learn More
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
              strokeWidth='2'
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default AkoyaClubRight
