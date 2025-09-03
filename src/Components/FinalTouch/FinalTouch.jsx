import React from 'react'
import FinalTouchCards from './FinalTouchCards'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const packagingOptions = [
  {
    id: 1,
    title: 'Plastic Wrap',
    image: './images/plastic.jpg',
    price: 'Included',
    priceStyle: 'bg-[#D4AF37] text-[#1C1C1C]',
    description:
      'Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.',
    features: [
      'Medical-grade transparency',
      'Anti-static interior',
      'Recyclable material',
      'Tamper-evident closure'
    ]
  },
  {
    id: 2,
    title: 'Luxury Fabric Wrap',
    image: './images/luxury.jpg',
    price: '+25 QAR',
    priceStyle: 'bg-[#1C1C1C] text-[#D4AF37]',
    description:
      'Cashmere-lined protective casing with magnetic closure and monogram option.',
    features: [
      'Italian wool exterior',
      'Silk-lined interior',
      'Magnetic seal',
      'Reusable design'
    ]
  },
  {
    id: 3,
    title: 'Premium Gift Box',
    image: './images/premium.jpg',
    price: '+50 QAR',
    priceStyle: 'bg-[#D4AF37] text-[#1C1C1C]',
    description:
      'Handcrafted wooden presentation case with velvet interior and scent capsule.',
    features: [
      'Sandalwood construction',
      'French velvet lining',
      'Integrated scent capsule',
      'Heirloom quality'
    ]
  }
]

const FinalTouch = () => {
   const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div className='w-[100%] bg-white pt-[45px] pb-[38px]'>
      <div className='text-center mb-20'>
        <h2 className='text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight' data-aos="fade-up" data-aos-dealy="0">
          The Final Touch
        </h2>
        <div className='flex justify-center items-center'>
          <div className='w-12 h-px bg-[#D4AF37] mx-4' data-aos="fade-right" data-aos-dealy="300"></div>
          <p className='text-lg text-[#D4AF37] tracking-widest font-medium' data-aos="fade-up" data-aos-dealy="300">
            PACKAGING OPTIONS
          </p>
          <div className='w-12 h-px bg-[#D4AF37] mx-4' data-aos="fade-left" data-aos-dealy="300"></div>
        </div>
      </div>

      {/* Cards */}
      <div className=' w-[94%] mx-auto mt-5 flex flex-col gap-y-6 
  sm:w-[80%]  gap-x-5 
  md:w-[70%] 
  lg:w-[86%] lg:flex-row'>
        {packagingOptions.map((item,index) => (
          <FinalTouchCards
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            description={item.description}
            features={item.features} // pass array
            selected={selectedIndex === index} //selected logic
            onClick={() => setSelectedIndex(index)}
            delay={index*300}
          />
        ))}
      </div>

      <div className='text-center mt-16'>
        <Link to="/book-now">
       

        <button className='px-8 py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-3 text-sm tracking-wider transform transition-transform duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="600">
          Book Your Order
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
              d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
            />
          </svg>
        </button>
         </Link>
      </div>
    </div>
  )
}

export default FinalTouch
