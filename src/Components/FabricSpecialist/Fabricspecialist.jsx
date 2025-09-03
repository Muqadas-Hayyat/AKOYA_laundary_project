import React from 'react'
import FabricSpecialistCard from './FabricSpecialistCard'

const specialistsArray = [
  {
    id: 1,
    name: 'Ahmed Al-Mansoori',
    role: 'Head of Couture Care',
    desc: '20+ years in luxury garment care',
    img: './images/testimonial-2.webp'
  },
  {
    id: 2,
    name: 'Layla Hassan',
    role: 'Fabric Technology Expert',
    desc: 'Fabric scientist and preservation expert',
    img: './images/testimonial-1.webp'
  },
  {
    id: 3,
    name: 'Yousef Ibrahim',
    role: 'Operations Director',
    desc: 'Ensuring seamless service delivery',
    img: './images/fabric-specialist.webp'
  }
]

const FabricSpecialist = () => {
  return (
    <section className='py-20 px-6 md:px-16 lg:px-24 bg-white'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-light mb-4' data-aos="fade-up" data-aos-dealy="0">
          Meet Our Fabric Specialists
        </h2>
        <div className='w-24 h-px bg-[#D4AF37] mx-auto my-6' data-aos="fade-up" data-aos-dealy="300"></div>
        <p className='text-[#2C2C2C] max-w-2xl mx-auto mb-12' data-aos="fade-up" data-aos-dealy="600">
          Our team of garment care experts brings decades of combined experience
          in handling luxury fabrics
        </p>

        <div className='grid md:grid-cols-3 gap-10'>
          {specialistsArray.map((person,index) => (
            <FabricSpecialistCard
              key={person.id}
              img={person.img}
              name={person.name}
              role={person.role}
              desc={person.desc}
              delay={index*300}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FabricSpecialist
