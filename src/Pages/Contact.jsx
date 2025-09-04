import React from 'react'
import ContactSwiper from '../Components/Swiper/ContactSwiper'
import ContactUs from '../Components/ContactUs/ContactUs'


const Contact = () => {
  return (
    <div className='w-[100%] border border-red-950'>
      <ContactSwiper />
      <ContactUs/>
    </div>
  )
}

export default Contact
