import React from 'react'
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const ContactLeftCard = () => {
  return (
    <div data-aos="fade-right" data-aos-delay="0">
      <h3 className='text-xl font-medium text-[#1C1C1C] mb-6'>
        How to reach us
      </h3>
      <p className='text-[#2C2C2C] mb-8 leading-relaxed'>
        Our concierge team is available to assist you with any inquiries about
        our premium laundry services. Reach out via your preferred method and
        we'll respond promptly.
      </p>

      <div className='space-y-6'>
        {/* Location */}
        <div className='flex items-start'>
          <div className='bg-[#D4AF37]/10 p-3 rounded-lg mr-4'>
            <svg
              className='w-6 h-6 text-[#D4AF37]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </div>
          <div>
            <h4 className='text-lg font-medium text-[#1C1C1C]'>Location</h4>
            <p className='text-[#2C2C2C]'>West Bay, Doha, Qatar</p>
          </div>
        </div>

        {/* Phone */}
        <div className='flex items-start'>
          <div className='bg-[#D4AF37]/10 p-3 rounded-lg mr-4'>
            <svg
              className='w-6 h-6 text-[#D4AF37]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              />
            </svg>
          </div>
          <div>
            <h4 className='text-lg font-medium text-[#1C1C1C]'>Phone</h4>
            <p className='text-[#2C2C2C]'>+974 1234 5678</p>
          </div>
        </div>

        {/* Email */}
        <div className='flex items-start'>
          <div className='bg-[#D4AF37]/10 p-3 rounded-lg mr-4'>
            <svg
              className='w-6 h-6 text-[#D4AF37]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          </div>
          <div>
            <h4 className='text-lg font-medium text-[#1C1C1C]'>Email</h4>
            <p className='text-[#2C2C2C]'>info@akoyalaundry.com</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className='mt-10'>
        <h4 className='text-lg font-medium text-[#1C1C1C] mb-4'>Follow Us</h4>
        <div className='flex gap-2'>
          {/* Instagram */}
          <div className='w-10 h-10 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center transition transform hover:-translate-y-1 duration-200 delay-150 ease-in-out hover:bg-[#D4AF37]'>
            <FaInstagram className='text-xl' />
          </div>

          {/* Twitter */}

          <div className='w-10 h-10 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center transition transform hover:-translate-y-1 duration-200 delay-150 ease-in-out hover:bg-[#D4AF37]'>
            <FaTwitter className='text-xl' />
          </div>

          {/* Whatsapp */}

          <div className='w-10 h-10 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center transition transform hover:-translate-y-1 duration-200 delay-150 ease-in-out hover:bg-[#D4AF37]'>
            <FaWhatsapp className='text-xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLeftCard
