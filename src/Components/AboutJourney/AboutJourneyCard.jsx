import React from 'react'

const AboutJourneyCard = ({icon,title,desc,delay}) => {
  return (
    <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition' data-aos="fade-up" data-aos-delay={delay}>
      <div className='text-center'>
        {icon}
        <h3 className='text-lg font-medium mb-2'>{title}</h3>
        <p className='text-[#2C2C2C] text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default AboutJourneyCard
