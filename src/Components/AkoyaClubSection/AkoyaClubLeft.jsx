import React from 'react'

const AkoyaClubLeft = () => {
  return (
    <div className='relative'>
      <div className='relative rounded-2xl overflow-hidden shadow-2xl' data-aos="fade-right" data-delay="300">
        <img
          alt='VIP Laundry Service'
          className='w-full h-auto object-cover'
          src='./images/luxury-2.jpg'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent'></div>
      </div>
      <div className='absolute -top-5 -right-5 bg-[#D4AF37] text-[#1C1C1C] px-6 py-3 rounded-full font-bold flex items-center shadow-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 mr-2'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
          />
        </svg>
        EXCLUSIVE
      </div>
    </div>
  )
}

export default AkoyaClubLeft
