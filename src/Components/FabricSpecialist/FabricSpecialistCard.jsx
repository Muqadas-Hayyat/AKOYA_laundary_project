import React from 'react'

const FabricSpecialistCard = ({ img, name, role, desc, delay }) => {
  return (
    <div className='bg-[#f8f5f2] p-8 rounded-xl shadow-sm hover:shadow-md transition' data-aos="fade-up" data-aos-delay={delay}>
      <img
        src={img}
        alt={name}
        className='w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#D4AF37]'
      />
      <h4 className='text-xl font-medium'>{name}</h4>
      <p className='text-[#D4AF37] mb-4'>{role}</p>
      <p className='text-[#2C2C2C] text-sm'>{desc}</p>
    </div>
  )
}

export default FabricSpecialistCard
