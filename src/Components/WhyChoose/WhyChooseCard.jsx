import React from 'react'

const WhyChooseCard = ({icon,title,description,delay}) => {
  return (

     <div className="bg-[#f8f5f2] p-8 rounded-xl text-center" data-aos="fade-up" data-aos-delay={delay}>
           {icon}
            <h3 className="text-xl font-medium mb-4">{title}</h3>
            <p className="text-[#2C2C2C]">
             {description}
            </p>
          </div>
  )
}

export default WhyChooseCard;