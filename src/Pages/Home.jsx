import React from 'react'
import HomeSwiper from '../Components/Swiper/HomeSwiper'
import SignatureLine from '../Components/SignatureLine/SignatureLine'
import WashedExperience from '../Components/WashedExperience/WashedExperience'
import SignatureFragrances from '../Components/SignatureFragrances/SignatureFragrances.jsx'
import FinalTouch from '../Components/FinalTouch/FinalTouch.jsx'
import PickupProcess from '../Components/PickupProcess/PickupProcess.jsx'
import TestimonialSwiper from "../Components/Swiper/TestimonialSwiper.jsx"
import AkoyaClub from '../Components/AkoyaClubSection/AkoyaClub.jsx'


const Home = () => {
  return (
    <div className='w-[100%] relative'>
      <HomeSwiper />
      <SignatureLine/>
      <WashedExperience/>
      <SignatureFragrances/>
      <FinalTouch/>
      <PickupProcess/>
      <TestimonialSwiper/>
      <AkoyaClub/>
     
     
    </div>
  )
}

export default Home
