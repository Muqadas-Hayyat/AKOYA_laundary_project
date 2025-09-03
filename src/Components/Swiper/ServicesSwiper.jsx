import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Swiper.css'
import { Link } from 'react-router-dom'

const slidesData = [
  {
    id: 1,
    title: 'Premium Garment Care',
    subtitle: 'SEAMLESS PICKUP PROCESS',
    image: '/images/eco.jpg',
    button: 'Book a Collection',
    path:"/book-now"
  },
  {
    id: 2,
    title: 'Eco-Conscious Cleaning',
    subtitle: 'SEAMLESS PICKUP PROCESS',
    image: '/images/pCollection.jpg',
    button: 'Book a Collection',
    path:"/book-now"

  },
  {
    id: 3,
    title: 'Precision Pressing',
    subtitle: 'SEAMLESS PICKUP PROCESS',
    image: '/images/expert.jpg',
    button: 'Book a Collection',
    path:"/book-now"

  }
]

const ServicesSwiper = () => {
  return (
    <div className='relative w-full'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        preventClicks={true}
        preventClicksPropagation={false}
      >
        {slidesData.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className='relative w-full h-[580px] flex items-center justify-center overflow-hidden'>
              {/* Background */}
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 swiper-slide-active:scale-100'
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className='absolute inset-0 bg-black/40'></div>
              </div>

              {/* Content */}
              <div className='relative z-10 text-center max-w-2xl px-6'>
                <h2 className='text-6xl font-light text-white mb-4' data-aos="fade-up" data-aos-delay="0">
                  {slide.title}
                </h2>
                <div className='flex justify-center items-center mb-6'>
                  <div className='w-12 h-px bg-[#D4AF37] mx-4' data-aos="fade-right" data-aos-delay="300"></div>
                  <p className='text-lg text-[#D4AF37] tracking-widest font-medium' data-aos="fade-up" data-aos-delay="300">
                    {slide.subtitle}
                  </p>
                  <div className='w-12 h-px bg-[#D4AF37] mx-4' data-aos="fade-left" data-aos-delay="300"></div>
                </div>
                <Link to={slide.path}>
                <button className='bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-8 py-3 rounded-full text-lg font-medium transform transition duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="600">
                  {slide.button}
                </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ServicesSwiper
