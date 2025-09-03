import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Swiper.css'

const testimonials = [
  {
    id: 1,
    name: 'Sheikha Al-Thani',
    role: 'Fashion Designer',
    image: './images/testimonial-1.webp',
    text: "Akoya's attention to detail is unmatched. My delicate couture pieces return looking better than when they were new. The only service I trust with my collection.",
    rating: 5
  },
  {
    id: 2,
    name: 'Mr. Khalid Al-Mansoori',

    role: 'Executive Director',
    image: './images/testimonial-2.webp',
    text: "As someone who wears bespoke suits daily, Akoya's executive service saves me hours each week. Their precision pressing is worth every dirham.",
    rating: 5
  },
  {
    id: 3,
    name: 'Mrs. Eleanor Rutherford',
    role: `Diplomat's Wife`,
    image: './images/testimonial-3.webp',
    text: "The fragrance infusion option is divine. My clothes return smelling like a Parisian boutique. It's become my signature scent in Doha's social circles.",
    rating: 4
  }
]

const TestimonialSwiper = () => {
  return (
    <div className='w-[100%] bg-[#FAF9F7] pt-[45px] pb-[38px]' >
      <div className='text-center mb-20'>
        <h2 className='text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight' data-aos="fade-up" data-aos-dealy="0">
          Loved by Doha's Finest
        </h2>
        <div className='flex justify-center items-center'>
          <div className='w-12 h-px bg-[#D4AF37] mx-4' data-aos="fade-right" data-aos-dealy="300"></div>
          <p className='text-lg text-[#D4AF37] tracking-widest font-medium' data-aos="fade-up" data-aos-dealy="300">
            CLIENT TESTIMONIALS
          </p>
          <div className='w-12 h-px bg-[#D4AF37] mx-4' data-aos="fade-left" data-aos-dealy="300"></div>
        </div>
        <div className='max-w-4xl mx-auto mt-[50px]'>
          {/* Swiper Container with shadow + rounded + overflow hidden */}
          <div className='rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden bg-white py-4 px-6' data-aos="fade-right" data-aos-delay="200">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ el: '.custom-pagination', clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
            >
              {testimonials.map(item=> (
                <SwiperSlide key={item.id}>
                  <div className='p-10 flex flex-col md:flex-row items-center md:items-start gap-6' >
                    {/* Profile Image */}
                    <div className='flex-shrink-0'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-36 h-36 rounded-full border-4 border-[#D4AF37] object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105'
                      />
                    </div>

                    {/* Content */}
                    <div className='flex-1 text-center md:text-left'>
                      {/* Stars */}
                      <div className='flex justify-center md:justify-start mb-3 gap-1'>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                            className={`w-4 h-4 ${
                              i < item.rating
                                ? 'text-[#D4AF37]'
                                : 'text-gray-300'
                            }`}
                          >
                            <path d='M12 .587l3.668 7.425L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.738z' />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className='text-[#2C2C2C] italic leading-relaxed mb-4 max-w-xl'>
                        "{item.text}"
                      </p>

                      {/* Name & Role */}
                      <h4 className='font-semibold text-[#1C1C1C]'>
                        {item.name}
                      </h4>
                      <p className='text-sm text-[#D4AF37]'>{item.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 👇 Custom Pagination ab card se bahar hai */}
          <div className='custom-pagination flex justify-center gap-2 mt-6'></div>
        </div>
      </div>
      <div className='text-center mt-16'>
        <button className='px-8 py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-3 text-sm tracking-wider transform transition-transform duration-300 hover:scale-105' data-aos="fade-up" data-aos-dealy="600">
          Join Our Discerning Clients
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TestimonialSwiper
