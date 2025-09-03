import React from 'react'

import { Link } from 'react-router-dom'

const FragranceCards = ({ img, name, description, price,path,delay }) => {
  return (
    <div
      className='lg:w-[290px] sm:w-[290px] w-[100%] bg-white rounded-2xl shadow-lg overflow-hidden 
                 hover:shadow-xl transition-all duration-500 ease-in-out delay-100 
                 hover:scale-[1.05] transform' data-aos="fade-up"  data-aos-delay={delay}
    >
      <img src={img} alt={name} className='w-full h-48 object-cover' />
      <div className='p-5'>
        <h3 className='text-xl font-semibold text-gray-800 mb-2'>{name}</h3>
        <p className='text-sm text-gray-600 mb-4'>{description}</p>

        <div className='flex justify-between items-center'>
          <span className='text-lg font-bold text-[#D4AF37]'>{price} QAR</span>
          <Link to={path}>
            <button className='px-4 py-1 bg-[#D4AF37] text-white rounded-full text-sm hover:opacity-90 transition'>
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FragranceCards
