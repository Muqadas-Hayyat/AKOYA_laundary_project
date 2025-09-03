import React from 'react'
import {Link} from "react-router-dom"

const services = [
  {
    id: 1,
    title: 'Dry Cleaning',
    price: 'From 50 QAR',
    description:
      'Expert care for suits and delicate fabrics using eco-friendly solvents',
    emoji: '🧥',
    image: './images/dryCleaning.jpg',
    path:"/book-now"
  },
  {
    id: 2,
    title: 'Executive Pressing',
    price: 'From 35 QAR',
    description:
      'Crisp finishes for business attire with precision steam technology',
    emoji: '👔',
    image: './images/exectivePressing.jpg',
     path:"/book-now"
  },
  {
    id: 3,
    title: 'Couture Care',
    price: 'From 120 QAR',
    description: 'Hand-cleaning for designer garments and delicate fabrics',
    emoji: '👗',
    image: './images/care.jpg',
     path:"/book-now"
  },
  {
    id: 4,
    title: 'Bisht Restoration',
    price: 'From 80 QAR',
    description: 'Traditional cleaning and pressing for Qatari formal wear',
    emoji: '🕌',
    image: './images/resturation.jpg',
     path:"/book-now",

  },
  {
    id: 5,
    title: 'Express Service',
    price: '+30% Premium',
    description: '3-hour turnaround for urgent garment needs',
    emoji: '⚡',
    image: './images/sehedulePickup.jpg',
     path:"/book-now"
  },
  {
    id: 6,
    title: 'Fragrance Infusion',
    price: '20 QAR',
    description: 'Luxury scent options for your garments',
    emoji: '🌸',
    image: './images/fragrance.jpg',
     path:"/book-now"
  },
  {
    id: 7,
    title: 'Dishdasha',
    price: 'From 45 QAR',
    description: "Professional care for men's traditional Qatari garment",
    emoji: '👳‍♂️',
    image: './images/dishdasha.webp',
     path:"/book-now"
  },
  {
    id: 8,
    title: 'Child Dishdasha',
    price: 'From 35 QAR',
    description: "Specialized care for children's traditional garments",
    emoji: '👦',
    image: './images/child_dishdasha.jpg',
     path:"/book-now"
  },
  {
    id: 9,
    title: 'Bisht',
    price: 'From 90 QAR',
    description: 'Premium care for ceremonial cloak with gold detailing',
    emoji: '🪔',
    image: './images/bisht.jpg',
     path:"/book-now"
  },
  {
    id: 10,
    title: 'Ghutra',
    price: 'From 25 QAR',
    description: 'Gentle cleaning for traditional headwear',
    emoji: '🧕',
    image: './images/ghutra.jpg',
     path:"/book-now"
  },
  {
    id: 11,
    title: 'Kurta',
    price: 'From 40 QAR',
    description: 'Care for traditional South Asian tunic',
    emoji: '👘',
    image: './images/kurta.jpg',
     path:"/book-now"
  },
  {
    id: 12,
    title: 'Kurta Pyjama (Set)',
    price: 'From 60 QAR',
    description: 'Complete set cleaning for traditional attire',
    emoji: '👖',
    image: './images/kurtaPajama.jpg',
     path:"/book-now"
  },
  {
    id: 13,
    title: 'Kameez',
    price: 'From 45 QAR',
    description: 'Professional care for traditional long shirts',
    emoji: '👕',
    image: './images/kameez.jpg',
     path:"/book-now"
  },
  {
    id: 14,
    title: 'Jalabiya',
    price: 'From 55 QAR',
    description: 'Specialized care for flowing traditional gowns',
    emoji: '👚',
    image: './images/jalabiya.jpg',
     path:"/book-now"
  },
  {
    id: 15,
    title: 'Abaya',
    price: 'From 50 QAR',
    description: 'Professional cleaning for everyday abayas',
    emoji: '🧕',
    image: './images/abaya.jpg',
     path:"/book-now"
  },
  {
    id: 16,
    title: 'Abaya Special',
    price: 'From 80 QAR',
    description: 'Premium care for embellished abayas',
    emoji: '✨',
    image: './images/abaya_special.jpg',
     path:"/book-now"
  },
  {
    id: 17,
    title: 'Hijab',
    price: 'From 20 QAR',
    description: 'Delicate cleaning for headscarves',
    emoji: '🧣',
    image: './images/hijab.png',
     path:"/book-now"
  },
  {
    id: 18,
    title: 'Gent Suit (3pcs)',
    price: 'From 75 QAR',
    description: 'Complete care for 3-piece suits',
    emoji: '👔',
    image: './images/gent_suit.jpg',
     path:"/book-now"
  },
  {
    id: 19,
    title: 'Dress (Short)',
    price: 'From 45 QAR',
    description: 'Care for cocktail and summer dresses',
    emoji: '👗',
    image: './images/dress.jpg',
     path:"/book-now"
  },
  {
    id: 20,
    title: 'Dress (Long)',
    price: 'From 65 QAR',
    description: 'Specialized care for evening gowns',
    emoji: '👰',
    image: './images/dressLong.jpg',
     path:"/book-now"
  },
  {
    id: 21,
    title: 'Overcoat',
    price: 'From 70 QAR',
    description: 'Winter coat cleaning and preservation',
    emoji: '🧥',
    image: './images/overcoat.jpg',
     path:"/book-now"
  },
  {
    id: 22,
    title: 'Military Uniform',
    price: 'From 85 QAR',
    description: 'Regimental standard cleaning and pressing',
    emoji: '🎖️',
    image: './images/military_suite.jpg',
     path:"/book-now"
  },
  {
    id: 23,
    title: 'Blouse (Special)',
    price: 'From 55 QAR',
    description: 'Delicate care for embellished tops',
    emoji: '👚',
    image: './images/blouse.jpg',
     path:"/book-now"
  },
  {
    id: 24,
    title: 'Bath Robe',
    price: 'From 40 QAR',
    description: 'Deep cleaning for plush bathrobes',
    emoji: '🛁',
    image: './images/bathrob.jpg',
     path:"/book-now"
  }
]

const AllServicesCard = () => {
  return (

    <>
    {
        services.map((service,index)=>{
            return(
             <div
  key={service.id}
  className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col '
   data-aos="fade-up" data-aos-dealy={index*300}
>
  <div className='relative h-48 overflow-hidden'>
    <img
      alt={service.title}
      className='w-full h-full object-cover transform transition-transform duration-700 delay-50 ease-in-out hover:scale-110'
      src={service.image}
    />
    <div className='absolute top-4 right-4 bg-[#D4AF37] text-[#1C1C1C] text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg'>
      {service.emoji}
    </div>
  </div>

  <div className='p-6 flex flex-col flex-grow'>
    <div className='flex justify-between items-start mb-3'>
      <h3 className='text-xl font-medium text-[#1C1C1C]'>
        {service.title}
      </h3>
      <span className='text-[#D4AF37] font-medium'>
        {service.price}
      </span>
    </div>

    <p className='text-[#2C2C2C] mb-4 flex-grow'>{service.description}</p>

    <div className='h-px bg-[#D4AF37]/30 my-3'></div>

    <Link to={service.path} className="mt-auto">
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
    </Link>
  </div>
</div>

            )
             
        })
    }
    
    
    </>

   
   
  )
}

export default AllServicesCard
