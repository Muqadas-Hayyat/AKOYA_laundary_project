import React from 'react'
import FragranceCards from './FragranceCards'

const fragrances = [
  {
    id: 1,
    name: 'Moony Akoya',
    desc: 'A soft, dreamy scent that refreshes your laundry with grace.',
    img: './images/moony.jpg',
    price: '7',
    path:"/book-now"
  },
  {
    id: 2,
    name: 'Orchid Akoya',
    desc: 'Elegant floral notes to enhance freshness in every fabric.',
    img: './images/orchard.jpg',
    price: '7',
    path:"/book-now"

  },
  {
    id: 3,
    name: 'Elixr by Akoya',
    desc: 'A rich, luxurious blend for a signature fragrance finish.',
    img: './images/elixr.jpg',
    price: '7',
    path:"/book-now"

  },
  {
    id: 4,
    name: 'Imperial Akoya',
    desc: 'Royal and bold—crafted for the finest laundry experience.',
    img: './images/imperial.jpg',
    price: '7',
    path:"/book-now"

  }
]

const SignatureFragrances = () => {
  return (
    <div className='w-[100%] bg-white pt-[45px] pb-[38px] box-border relative top-0'>
      <div className='text-center mb-20 ltr' style={{ opacity: 1 }}>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4' data-aos="fade-up" data-aos-dealy="0">
          Akoya Signature Fragrances
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto' data-aos="fade-up" data-aos-dealy="300">
          Premium scents crafted to elevate your laundry experience
        </p>
      </div>

      <div className='w-[93%] flex-wrap lg:flex-nowrap gap-y-8 mx-auto gap-x-5 mt-5 flex justify-between'>
        {fragrances.map((item, index) => {
          return (
            <FragranceCards
              key={item.id}
              img={item.img}
              name={item.name}
              description={item.desc}
              price={item.price}
              path={item.path}
              delay={index*300}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SignatureFragrances
