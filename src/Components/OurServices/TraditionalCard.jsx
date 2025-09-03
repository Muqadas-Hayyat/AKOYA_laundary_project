import React from 'react'

const traditional=[

   {
    id: 1,
    title: 'Dishdasha',
    price: 'From 45 QAR',
    description: "Professional care for men's traditional Qatari garment",
    emoji: '👳‍♂️',
    image: './images/dishdasha.webp'
  },
  {
    id: 2,
    title: 'Child Dishdasha',
    price: 'From 35 QAR',
    description: "Specialized care for children's traditional garments",
    emoji: '👦',
    image: './images/child_dishdasha.jpg'
  },
  {
    id: 3,
    title: 'Bisht',
    price: 'From 90 QAR',
    description: 'Premium care for ceremonial cloak with gold detailing',
    emoji: '🪔',
    image: './images/bisht.jpg'
  },
  {
    id:4,
    title: 'Ghutra',
    price: 'From 25 QAR',
    description: 'Gentle cleaning for traditional headwear',
    emoji: '🧕',
    image: './images/ghutra.jpg'
  },
  {
    id:5,
    title: 'Kurta',
    price: 'From 40 QAR',
    description: 'Care for traditional South Asian tunic',
    emoji: '👘',
    image: './images/kurta.jpg'
  },
  {
    id:6,
    title: 'Kurta Pyjama (Set)',
    price: 'From 60 QAR',
    description: 'Complete set cleaning for traditional attire',
    emoji: '👖',
    image: './images/kurtaPajama.jpg'
  },
  {
    id:7,
    title: 'Kameez',
    price: 'From 45 QAR',
    description: 'Professional care for traditional long shirts',
    emoji: '👕',
    image: './images/kameez.jpg'
  },  {
    id:8,
    title: 'Jalabiya',
    price: 'From 55 QAR',
    description: 'Specialized care for flowing traditional gowns',
    emoji: '👚',
    image: './images/jalabiya.jpg'
  },
  {
    id: 9,
    title: 'Abaya',
    price: 'From 50 QAR',
    description: 'Professional cleaning for everyday abayas',
    emoji: '🧕',
    image: './images/abaya.jpg'
  },
  {
    id:10,
    title: 'Abaya Special',
    price: 'From 80 QAR',
    description: 'Premium care for embellished abayas',
    emoji: '✨',
    image: './images/abaya_special.jpg'
  },
  {
    id:11,
    title: 'Hijab',
    price: 'From 20 QAR',
    description: 'Delicate cleaning for headscarves',
    emoji: '🧣',
    image: './images/hijab.png'
  },
]

const TraditionalCard = () => {
  return (
    <>
      {traditional.map((service,index) => {
        return (
          <div
            key={service.id}
            className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
          data-aos="fade-up" data-aos-delay={index*300}>
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

export default TraditionalCard