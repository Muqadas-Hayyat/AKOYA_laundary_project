import React from 'react'

const WashedCards = ({icon,heading,para,price,delay}) => {
  return (
    <div className='lg:w-[555px] w-[100%] bg-[#F5E1DA] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 opacity-100 transform-none' data-aos="fade-up" data-aos-delay={delay}>
      <div className='text-5xl mb-4'>{icon}</div>
      <h3 className='text-2xl font-bold text-[#1C1C1C] mb-2'>{heading}</h3>
      <p className='text-[#2C2C2C] mb-4'>
       {para}
      </p>
      <div className='text-[#D4AF37] font-medium text-lg'> From {price} QAR</div>
    </div>
  )
}

export default WashedCards
