import React, { useState } from 'react'
import { addPackaging } from '../../Redux_toolkit/Features/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import StepProgressBar from './StepProgress'

const Step5Packaging = ({step,totalSteps ,onBack, onNext }) => {   // 👈 receive props
  const dispatch = useDispatch()
  const selectedPackaging = useSelector(state => state.cart.packaging) 
  const [selectedPackage, setSelectedPackage] = useState(
    selectedPackaging?.enabled ? selectedPackaging.type : null
  )

  const packagingOptions = [
    {
      id: 1,
      name: 'Plastic Packaging',
      description: 'Standard plastic bag packaging',
      price: 0,
      priceText: 'Free',
      image: './images/professionalCollection.jpg'
    },
    {
      id: 2,
      name: 'Premium Fabric Packaging',
      description: 'Luxury fabric bag packaging',
      price: 15,
      priceText: '+15 QAR',
      image: './images/luxury.jpg'
    },
    {
      id: 3,
      name: 'Luxury Gift Box',
      description: 'Elegant gift box packaging',
      price: 30,
      priceText: '+30 QAR',
      image: './images/premium.jpg'
    }
  ]

  const handlePackageSelect = pkg => {
    setSelectedPackage(pkg.id)
    dispatch(
      addPackaging({
        enabled: true,
        price: pkg.price,
        type: pkg.name
      })
    )
  }

  return (
    <div className='flex flex-col scrollbar-hide'>
         <StepProgressBar step={step} totalSteps={totalSteps} />
     < div className='space-y-6 p-4 sm:p-6 lg:p-8 overflow-y-auto' dir='ltr'>
        <h3 className='text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left'>
          How would you like us to package your garments?
        </h3>

        <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {packagingOptions.map(pkg => (
            <div
              key={pkg.id}
              onClick={() => handlePackageSelect(pkg)}
              className={`p-4 sm:p-6 border rounded-xl cursor-pointer transition-all ${
                selectedPackage === pkg.id
                  ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className='space-y-4'>
                <div className='aspect-video w-full h-50 rounded-lg overflow-hidden'>
                  <img
                    alt={pkg.name}
                    className='w-full h-full object-cover transition-transform hover:scale-105'
                    loading='lazy'
                    src={pkg.image}
                  />
                </div>

                <div className='text-center space-y-2'>
                  <h4 className='font-medium text-sm sm:text-base'>
                    {pkg.name}
                  </h4>
                  <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                    {pkg.description}
                  </p>

                  <div className='mt-3'>
                    <p
                      className={`text-xs sm:text-sm font-medium ${
                        pkg.price === 0 ? 'text-green-600' : 'text-[#D4AF37]'
                      }`}
                    >
                      {pkg.priceText}
                    </p>
                  </div>
                </div>

                {/* Selected indicator */}
                {selectedPackage === pkg.id && (
                  <div className='w-[80px] mx-auto mt-3 flex items-center gap-2 text-[#D4AF37]'>
                    <svg
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <span className='text-xs font-medium'>Selected</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='border-t border-gray-100 p-4 sm:p-6 bg-gray-50 flex justify-between'>
        {/* Back button always enabled */}
        <button
          onClick={onBack}
          className='px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium bg-gray-200 hover:bg-gray-300'
        >
          Back
        </button>

        {/* Next button only enabled if a package is selected */}
        <button
          onClick={onNext}
          disabled={!selectedPackage} // 👈 disable until package selected
          className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium shadow-md
            ${
              !selectedPackage
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#D4AF37] text-white hover:bg-[#c9a227]'
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step5Packaging
