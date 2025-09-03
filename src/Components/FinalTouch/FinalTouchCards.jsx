import React from 'react'

const FinalTouchCards = ({
  title,
  image,
  price,
  description,
  features,
  onClick,
  selected,delay
}) => {
  return (
    <div
     className="
  w-full 
  sm:w-[90%] 
  md:w-[80%] 
  lg:w-[360px] 
  rounded-2xl shadow-lg 
  transform transition-transform duration-700 ease-in-out delay-100 
  hover:-translate-y-2 
  group mt-10 relative mx-auto
" 
data-aos="fade-up" data-aos-delay={delay}
      onClick={onClick}
    >
      <div
        className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
          selected ? 'ring-4 ring-[#D4AF37]' : 'ring-1 ring-[#00000010]'
        }`}
      >
        {/* Ribbon if selected */}
        {selected && (
          <div className='absolute top-3 right-[-30px] z-20 bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-white px-10 py-1 font-medium text-xs shadow-lg font-serif transform rotate-45'>
            SELECTED
          </div>
        )}

        {/* Image Section */}
        <div className='relative h-[300px] rounded-t-2xl overflow-hidden'>
          <img
            alt={title}
            src={image}
            className='w-full h-full object-cover transform transition-transform duration-700 delay-150 ease-in-out group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
          <span className={`absolute bottom-4 left-4 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-md  ${
          selected ?  'text-[#D4AF37] bg-[#1C1C1C] ' : 'text-[#1C1C1C] bg-[#D4AF37]'
        }` }>
            {price}
          </span>
        </div>

        {/* Content Section */}
        <div className='p-6 flex flex-col'>
          <h3 className='text-xl text-left font-medium text-[#1C1C1C] mb-2'>
            {title}
          </h3>
          <p className='text-[#2C2C2C] text-left mb-4 text-sm leading-relaxed'>
            {description}
          </p>

          {/* Features */}
          <div className='space-y-2.5'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='flex items-start hover:text-[#D4AF37] transition-all duration-300 transform hover:translate-x-2'
              >
                <svg
                  className='w-4 h-4 text-[#D4AF37] mt-0.5 mr-2.5 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='text-sm text-[#1C1C1C] leading-tight'>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalTouchCards
