import React from 'react'
import WashedCards from './WashedCards'
import { Link } from 'react-router-dom'

const WashedExperience = () => {
  const WashedArray = [
    {
      id: 1,
      icon: '🧼',
      title: 'Standard Wash',
      para: 'Our signature 48-hour service with gentle cleaning, eco-friendly detergents, and basic folding.',
      price: '50'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Express Wash',
      para: 'Need it fast? Get 24-hour turnaround, priority processing, and premium care.',
      price: '80'
    }
  ]

  return (
    <div className='w-[100%] white pt-[45px] pb-[38px] box-border relative top-0'>
      <div className='text-center mb-20 ltr' style={{ opacity: 1 }}>
        <h2 className='text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4' data-aos="fade-up" data-aos-dealy="0">
          How Would You Like It Washed?
        </h2>
        <p className='text-[#D4AF37] font-semibold text-lg tracking-wide uppercase' data-aos="fade-up" data-aos-dealy="300">
          Choose your experience
        </p>
      </div>

      <div className='w-[86%] gap-y-8 lg:flex-row flex-col md:flex-row bg- mx-auto mt-5 flex gap-x-[38px]'>
        {WashedArray.map((item, index) => {
          return (
            <WashedCards
              key={item.id}
              icon={item.icon}
              heading={item.title}
              para={item.para}
              price={item.price}
              delay={index*300}
            />
          )
        })}
      </div>

      <Link to='/services'>
        <button
          className='
    mx-auto mt-[45px]
    bg-[#D4AF37] text-[#1C1C1C] font-semibold 
    px-8 py-4 rounded-full shadow-md 
    hover:shadow-lg hover:scale-105 
    transition-transform duration-150
    block
  '
  data-aos="fade-up" data-aos-dealy="600"
        >
          Continue to Garment Selection
        </button>
      </Link>
    </div>
  )
}

export default WashedExperience
