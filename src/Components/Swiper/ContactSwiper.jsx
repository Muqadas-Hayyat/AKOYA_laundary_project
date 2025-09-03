import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Swiper.css'

const slidesData = [
  {
    id: 1,
    title: 'Contact Akoya Laundry',
    subtitle: 'Premium laundry services tailored to your needs in Doha, Qatar',
    image: '/images/pCollection.jpg',
    
  },
  {
    id: 2,
    title: 'Professional Crae',
    subtitle: 'Expert fabric handling with eco-friendly detergents',
    image: '/images/platinumCare.jpg',
    
  },
  {
    id: 3,
    title: 'Express Service',
    subtitle: 'Quick turnaround without compromising quality',
    image: '/images/eco.jpg',
    
  }
]

const ContactSwiper = () => {
  return (
    <div className='relative w-full'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {slidesData.map((slide,index) => (
          <SwiperSlide key={slide.id}>
            <div className='relative w-full h-[580px] flex items-center justify-center overflow-hidden'>
              {/* Background */}
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 swiper-slide-active:scale-100'
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className='absolute inset-0 bg-black/60'></div>
              </div>

              {/* Content */}
              <div className='relative z-10 text-center max-w-2xl px-6'>
                <h2 className='text-6xl font-light text-white mb-4' data-aos="fade-up" data-aos-delay="0">
                  {slide.title}
                </h2>
                <div className='w-[650px] flex justify-center items-center mb-6'>
                  <p className='text-lg text-[#D4AF37] tracking-widest font-medium' data-aos="fade-up" data-aos-delay="300">
                    {slide.subtitle}
                  </p>
                </div>
             <div className="mt-8 h-px bg-[#D4AF37] w-32 mx-auto" data-aos="fade-up" data-aos-delay="600"></div>

               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ContactSwiper
