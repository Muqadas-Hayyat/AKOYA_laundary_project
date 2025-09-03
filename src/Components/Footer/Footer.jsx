import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className='bg-[#1C1C1C] text-white border-t border-[#D4AF37] mb-[-30px]'>
      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {/* Logo + Description + Socials */}
        <div data-aos="fade-up" data-aos-delay="0">
          <div className='flex items-center gap-2 mb-6'>
            <img
              alt='company logo'
              className='w-24 mt-4 mx-auto md:ml-4'
              src='./images/Akoya-logo.png'
            />
          </div>
          <p className='text-white/70 mb-4 leading-relaxed'>
            Luxury garment care redefined. Serving Doha's discerning clients
            with unparalleled quality and service.
          </p>
          <div className='flex gap-4 mt-6'>
            {/* Social icons */}
            <a
              href='#'
              className='text-white/70 hover:text-[#D4AF37] transition-colors'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M22.46 6c-.77.35-1.6.58-2.46.69...' />
              </svg>
            </a>
            <a
              href='#'
              className='text-white/70 hover:text-[#D4AF37] transition-colors'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M22.46 6c-.77.35-1.6.58-2.46.69...' />
              </svg>
            </a>
            <a
              href='#'
              className='text-white/70 hover:text-[#D4AF37] transition-colors'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M22.46 6c-.77.35-1.6.58-2.46.69...' />
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="300" >
          <h3 className='text-lg font-medium text-[#D4AF37] mb-6 tracking-wider'>
            OUR SERVICES
          </h3>
          <ul className='flex gap-y-3 flex-col'>
            {[
              'Premium Laundry',
              'Dry Cleaning',
              'Steam Pressing',
              'Fragrance Infusion',
              'Couture Care',
              'VIP Club'
            ].map((service, index) => (
              <Link to="/services">
              <li key={index}
                
                  className='text-white/70 hover:text-[#D4AF37] transition-all duration-300 transform hover:translate-x-2 flex items-center gap-4' 
                 
              >
                  <svg
                    className='w-3 h-3 text-[#D4AF37]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                  {service}
                
              </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h3 className='text-lg font-medium text-[#D4AF37] mb-6 tracking-wider'>
            CONTACT US
          </h3>

          <address className='not-italic text-white/70 space-y-4'>
            {/* Address */}
            <div className='flex items-start gap-3'>
              <FaMapMarkerAlt className='w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0' />
              <span>West Bay, Doha, Qatar</span>
            </div>

            {/* Phone */}
            <div className='flex items-center gap-3'>
              <FaPhoneAlt className='w-5 h-5 text-[#D4AF37] flex-shrink-0' />
              <span>+974 1234 5678</span>
            </div>

            {/* Email */}
            <div className='flex items-center gap-3'>
              <FaEnvelope className='w-5 h-5 text-[#D4AF37] flex-shrink-0' />
              <span>info@akoyalaundry.com</span>
            </div>
          </address>
        </div>

        {/* Newsletter */}
        <div data-aos="fade-up" data-aos-delay="900">
          <h3 className='text-lg font-medium text-[#D4AF37] mb-6 tracking-wider'>
            NEWSLETTER
          </h3>
          <p className='text-white/70 mb-6'>
            Subscribe for exclusive offers and garment care tips.
          </p>
          <form className='space-y-4'>
            <input
              type='email'
              placeholder='Your email address'
              className='w-full px-4 py-3 bg-[#2C2C2C] border border-[#D4AF37]/30 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-white placeholder-white/50'
            />
            <button className='w-full px-6 py-3 bg-[#D4AF37] text-[#1C1C1C] font-medium rounded transition  hover:scale-105 duration-100 delay-100 ease-in-out'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-[#D4AF37]/10 py-6'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm'>
          <div></div>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <p className='hover:text-[#D4AF37] transition-colors'>
              Privacy Policy
            </p>
            <p className='hover:text-[#D4AF37] transition-colors'>
              Terms of Service
            </p>
            <p className='hover:text-[#D4AF37] transition-colors'>Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
