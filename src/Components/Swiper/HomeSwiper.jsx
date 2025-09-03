import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Swiper.css'

const slides = [
  {
    id: 1,
    image: '/images/platinumCare.jpg',
    title: 'Premium Garment Care',
    description: 'Expert cleaning for your most delicate fabrics',
    button: 'Schedule Pickup',
    path: '/book-now'
  },
  {
    id: 2,
    image: '/images/eco.jpg',
    title: 'Eco-Conscious Cleaning',
    description: 'Sustainable methods without compromising quality',
    button: 'Schedule Pickup',
    path: '/book-now'
  },
  {
    id: 3,
    image: '/images/pressing.jpg',
    title: 'Precision Pressing',
    description: 'Impeccable finishes for business and formalwear',
    button: 'Schedule Pickup',
    path: '/book-now'
  }
]

const HomeSwiper = () => {
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
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className='relative w-full h-[580px] flex items-center justify-center overflow-hidden'>
              {/* Background */}
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105'
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className='absolute inset-0 bg-black/60 pointer-events-none'></div>
              </div>

              {/* Content */}
              <div
                className='relative z-10 w-full sm:w-[80%] md:w-[60%] lg:w-[60%] 
                sm:px-6 md:px-10 flex flex-col gap-y-3 items-start text-left 
                left-[16px] sm:-left-[80px] md:-left-[120px] lg:-left-[200px] ' 
              >
                <h2 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 max-w-2xl' data-aos="fade-up" data-aos-delay="0">
                  {slide.title}
                </h2>

                <p className='text-[20px] sm:text-lg md:text-xl lg:text-2xl text-[#D4AF37] mb-6 sm:mb-8 max-w-xl'data-aos="fade-up" data-aos-delay="300">
                  {slide.description}
                </p>

                <Link to={slide.path}>
                  <button
                    className='bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] 
                       px-7 sm:px-6 md:px-8 py-3 sm:py-3 rounded-full 
                       text-lg sm:text-base md:text-lg font-medium 
                       transform transition duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="600"
                  >
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

export default HomeSwiper
