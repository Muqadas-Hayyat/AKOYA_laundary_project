import React from 'react'
import AkoyaClubLeft from './AkoyaClubLeft'
import AkoyaClubRight from './AkoyaClubRight'

const AkoyaClub = () => {
  return (
    <section className='relative bg-[#1C1C1C] py-24 px-6 md:px-16 lg:px-24 overflow-hidden'>
      {/* <div className="absolute inset-0 opacity-10 bg-[url('./home/exclusive.jpg')]"></div> */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent'></div>
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* {image} */}

          <AkoyaClubLeft />

          {/* Text Content */}
          <AkoyaClubRight />
        </div>
      </div>
    </section>
  )
}

export default AkoyaClub
