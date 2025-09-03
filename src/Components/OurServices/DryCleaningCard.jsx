import React from 'react'
const dryCleaning = [
  {
    id: 1,
    title: 'Dry Cleaning',
    price: 'From 50 QAR',
    description:
      'Expert care for suits and delicate fabrics using eco-friendly solvents',
    emoji: '🧥',
    image: './images/dryCleaning.jpg'
  },
  {
    id: 2,
    title: 'Gent Suit (3pcs)',
    price: 'From 75 QAR',
    description: 'Complete care for 3-piece suits',
    emoji: '👔',
    image: './images/gent_suit.jpg'
  },
  {
    id: 3,
    title: 'Dress (Short)',
    price: 'From 45 QAR',
    description: 'Care for cocktail and summer dresses',
    emoji: '👗',
    image: './images/dress.jpg'
  },
  {
    id: 4,
    title: 'Dress (Long)',
    price: 'From 65 QAR',
    description: 'Specialized care for evening gowns',
    emoji: '👰',
    image: './images/dressLong.jpg'
  },
  {
    id: 5,
    title: 'Overcoat',
    price: 'From 70 QAR',
    description: 'Winter coat cleaning and preservation',
    emoji: '🧥',
    image: './images/overcoat.jpg'
  }
]

const DryCleaningCard = () => {
  return (
    <>
      {dryCleaning.map((service,index) => {
        return (
          <div
            key={service.id}
            className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300' data-aos="fade-up" data-aos-dealy={index*300}
          >
            <div className='relative h-48 overflow-hidden'>
              <img
                alt={service.title}
                className='w-full h-full object-cover'
                src={service.image}
              />
              <div className='absolute top-4 right-4 bg-[#D4AF37] text-[#1C1C1C] text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg'>
                {service.emoji}
              </div>
            </div>

            <div className='p-6'>
              <div className='flex justify-between items-start mb-3'>
                <h3 className='text-xl font-medium text-[#1C1C1C]'>
                  {service.title}
                </h3>
                <span className='text-[#D4AF37] font-medium'>
                  {service.price}
                </span>
              </div>

              <p className='text-[#2C2C2C] mb-4'>{service.description}</p>

              <div className='h-px bg-[#D4AF37]/30 my-4'></div>

              <a href='/book-now'>
                <button className='w-full px-4 py-2.5 bg-[#D4AF37] text-[#1C1C1C] rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-black hover:text-[#D4AF37] transition duration-300 ease-in-out '>
                  Order
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
                      d='M12 4v16m8-8H4'
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default DryCleaningCard;
