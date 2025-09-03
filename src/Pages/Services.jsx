import React from 'react'
import ServicesSwiper from '../Components/Swiper/ServicesSwiper';
import PersonalizedService from '../Components/PersonalizedService/PersonalizedService';
import OurServices from '../Components/OurServices/OurServices';

const Services = () => {
  return (
    <div className='w-[100%] border-2 border-green-950'>


      <ServicesSwiper/>
      <OurServices/>
      <PersonalizedService/>
    </div>
  )
}

export default Services;