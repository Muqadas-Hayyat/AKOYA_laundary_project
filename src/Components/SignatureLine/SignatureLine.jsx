import React from 'react'
import { Link } from 'react-router-dom';  // <-- import Link
import SignatureCard from './SignatureCard'

const SignatureArray = [
  {
    id: 1,
    image: './images/platinumCare.jpg',
    icon: '✨',
    title: 'The Platinum Care',
    para: 'Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.',
    path:"/services"
  },
  {
    id: 2,
    image: './images/exectiveCollection.jpg',
    icon: '👔',
    title: 'Executive Collection',
    para: 'Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.',
    path:"/services"
  },
  {
    id: 3,
    image: './images/professionalCollection.jpg',
    icon: '🧵',
    title: 'Couture Preservation',
    para: 'Specialized care for designer pieces and delicate fabrics. Museum-quality cleaning to maintain texture and color integrity.',
    path:"/services"
  }
]

const SignatureLine = () => {
  return (
    <div className='w-[100%] bg-[#faf9f7] pt-[45px] pb-[38px] box-border relative top-0'>
      <div className='text-center mb-20'>
        <h2 className='text-4xl md:text-5xl font-light text-[#1C1C1C] mb-3 tracking-tight' data-aos="fade-up" data-aos-dealy="0">
          Signature Lines
        </h2>
        <div className='flex justify-center items-center'>
          <div className='w-16 h-px bg-[#D4AF37] mx-4' data-aos="fade-right" data-aos-dealy="300"></div>
          <p className='text-xl text-[#D4AF37] tracking-widest font-medium' data-aos="fade-up" data-aos-dealy="300">
            THE AKOYA COLLECTION
          </p>
          <div className='w-16 h-px bg-[#D4AF37] mx-4' data-aos="fade-left" data-aos-dealy="300"></div>
        </div>
      </div>

      {/* ✅ Cards */}
      <div className=" lg:w-[86%] w-[96%] mx-auto mt-5 flex flex-col gap-y-6 lg:flex-row lg:gap-x-[38px] justify-center items-center md:flex-row md:flex-wrap lg:flex-nowrap md:gap-x-7  ">
        {SignatureArray.map((item,index) => (
          <SignatureCard
            key={item.id}
            img={item.image}
            icon={item.icon}
            heading={item.title}
            description={item.para}
            path={item.path}
            delay={index*300}
          />
        ))}
      </div>

      <Link to="/services">
        <button className='px-8 py-3 mt-[68px] border border-[#1C1C1C] text-[#1C1C1C] rounded-full hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 flex items-center mx-auto gap-2' data-aos="fade-up" data-aos-dealy="300">
          View All Collections
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3'/>
          </svg>
        </button>
      </Link>
    </div>
  )
}

export default SignatureLine
