import React from 'react'
import AboutHeroSection from '../Components/AboutHeroSection/AboutHeroSection'
import WhyChooseSection from '../Components/WhyChoose/WhyChooseSection'
import AboutJourney from '../Components/AboutJourney/AboutJourney'
import Fabricspecialist from '../Components/FabricSpecialist/Fabricspecialist'

const About = () => {
  return (
    <div className='w-[100%]'>

<AboutHeroSection/>
<WhyChooseSection/>
<AboutJourney/>
<Fabricspecialist/>

    </div>
  )
}

export default About