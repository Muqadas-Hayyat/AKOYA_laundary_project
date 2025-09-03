import React, { useState } from 'react'
import AllServicesCard from './AllServicesCard'
import DryCleaningCard from './DryCleaningCard'
import AddOnCard from './AddOnCard'
import ExecutivePressingCard from './ExecutivePressingCard'
import SpecialityCard from './SpecialityCard'
import TraditionalCard from './TraditionalCard'
import Express from './Express'

const categories = [
  'All',
  'Dry Cleaning',
  'Pressing',
  'Specialty',
  'Traditional',
  'Express',
  'Add-on'
]

const OurServices = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <section className='py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <div className='absolute top-20 left-10 w-40 h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl'></div>
        <div className='absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#1C1C1C] mix-blend-multiply filter blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto relative'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight'  data-aos="fade-up">
            Our Services
          </h2>
          <div className='flex justify-center items-center'>
            <div className='w-12 h-px bg-[#D4AF37] mx-4'  data-aos="fade-right"></div>
            <p className='text-lg text-[#D4AF37] tracking-widest font-medium'  data-aos="fade-up"  >
              LUXURY GARMENT CARE
            </p>
            <div className='w-12 h-px bg-[#D4AF37] mx-4'  data-aos="fade-left"></div>
          </div>
        </div>

        {/* Category filters */}
        <div className='flex flex-wrap justify-center gap-2 mb-12'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ease-in-out transform ${
                activeCategory === category
                  ? 'bg-[#1C1C1C] text-[#D4AF37] scale-105'
                  : 'bg-white text-[#1C1C1C] hover:bg-[#1C1C1C]/10 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {(activeCategory==="All") && (<AllServicesCard/>)}
          {(activeCategory === 'Dry Cleaning') && (
            <DryCleaningCard />
          )}
          {(activeCategory === 'Pressing') && (
            <ExecutivePressingCard />
          )}
          {(activeCategory === 'Specialty') && (
            <SpecialityCard />
          )}
          {( activeCategory === 'Traditional') && (
            <TraditionalCard />
          )}
          {(activeCategory === 'Express') && (
            <Express />
          )}
          {(activeCategory === 'Add-on') && (
            <AddOnCard />
          )}
        </div>
      </div>
    </section>
  )
}

export default OurServices
