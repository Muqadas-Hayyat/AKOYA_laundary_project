import React from 'react'
import { Link } from 'react-router-dom' // <-- use react-router-dom here

const SignatureCard = ({ img, icon, heading, description, path,delay }) => {
  return (
    <div
      className='
  w-full                
  sm:w-full             
  md:w-[350px] 
  lg:w-[360px]          
  h-[320px] 
  relative 
  
  rounded-2xl 
  shadow-lg 
  overflow-hidden 
  transform transition-transform 
   ease-in-out delay-300 duration-700
  hover:-translate-y-1 
  group
'

data-aos="fade-up"  data-aos-delay={delay} >
      {/* Background Image */}
      <img
        src={img}
        alt='Signature Service'
        className='w-full h-full object-cover transition duration-700 ease-in-out group-hover:brightness-[69%]'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50 z-10 transition duration-700 ease-in-out group-hover:bg-transparent'></div>

      {/* Content */}
      <div className='absolute bottom-0 left-0 w-full pl-6 pb-6 text-left z-20'>
        <div className='w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-[#D4AF37] text-white shadow-lg text-4xl hover:scale-110 duration-700 transition transform ease-in-out'>
          {icon}
        </div>

        <h3 className='text-2xl font-medium text-white mb-2'>{heading}</h3>

        <p className='text-sm leading-relaxed text-white/90'>{description}</p>

        {/* ✅ Discover Button with Link */}
        <Link to={path}>
          <button className='mt-4 px-6 py-2 flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#1C1C1C] text-sm font-medium shadow-md hover:bg-black hover:text-[#D4AF37] transition duration-300'>
            Discover
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SignatureCard
