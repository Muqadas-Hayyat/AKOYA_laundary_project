import React, { useState } from 'react'
import StepProgressBar from './StepProgress'
import {
  addSteam,
  removeSteam,
  addIncense,
  removeIncense
} from '../../Redux_toolkit/Features/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Step3Steam = ({ step, totalSteps, onBack, onNext }) => {
  const [steam, setSteam] = useState(null)
  const [incense, setIncense] = useState(null)
  const [oudType, setOudType] = useState(null)
  const [disclaimer, setDisclaimer] = useState(false)
  const [showIncenseWarning, setShowIncenseWarning] = useState(false)

  const dispatch = useDispatch()
  const garments = useSelector(state => state.cart.garments)

  const handleSelect = yes => {
    setSteam(yes)
    if (yes) dispatch(addSteam())
    else dispatch(removeSteam())
  }

  const handleIncenseSelect = yes => {
    setIncense(yes)

    if (yes) {
      // Restricted garments check
      const restricted = [
        'School Uniform',
        "Children's Abaya",
        "Children's Dress"
      ]

      const hasRestricted = garments.some(g =>
        restricted.some(r => g.name.toLowerCase().includes(r.toLowerCase()))
      )

      if (hasRestricted) {
        setShowIncenseWarning(true) // ✅ Show warning instead of alert
        setIncense(true) // Reset incense selection
        return
      }

      setShowIncenseWarning(false) // Clear any previous warnings
      // 🚫 Don't add incense yet, wait for Oud type selection
      // Cards will show, and on click user chooses Oud
    } else {
      setShowIncenseWarning(false) // Clear warning when incense is deselected
      setOudType(null) // Reset oud selection
      dispatch(removeIncense())
    }
  }

  const handleOudSelect = (type) => {
    setOudType(type)
    dispatch(addIncense({ price: 8, type: type }))
  }

  return (
    <div className='flex flex-col scrollbar-hide'>
      <StepProgressBar step={step} totalSteps={totalSteps} />
      <div className='space-y-6 p-4 sm:p-6 lg:p-8 overflow-y-auto' dir='ltr'>
        {/* Steam Question */}
        <div className='space-y-4'>
          <h3 className='text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left'>
            Do you want us to steam the garments?
          </h3>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <button
              type='button'
              onClick={() => handleSelect(true)}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border text-sm sm:text-base font-medium transition-all ${
                steam === true
                  ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              Yes
            </button>
            <button
              type='button'
              onClick={() => handleSelect(false)}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border text-sm sm:text-base font-medium transition-all ${
                steam === false
                  ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Incense Question */}
        <div className='space-y-4'>
          <h3 className='text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left'>
            Would you like your clothes to be incensed with Oud? (+8 QAR)
          </h3>

          {showIncenseWarning && (
            <div className='bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 shadow-sm'>
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0'>
                  <svg
                    className='w-6 h-6 text-yellow-600'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-yellow-800 mb-1'>
                    Important Notice
                  </h4>
                  <p className='text-sm text-yellow-700'>
                    We do not recommend perfuming clothes for children under 8
                    years old for their health and safety.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <button
              type='button'
              onClick={() => handleIncenseSelect(true)}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border text-sm sm:text-base font-medium transition-all ${
                incense === true
                  ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              Yes
            </button>
            <button
              type='button'
              onClick={() => handleIncenseSelect(false)}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border text-sm sm:text-base font-medium transition-all ${
                incense === false
                  ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              No
            </button>
          </div>

          {incense === true && (
            <div className='space-y-4'>
              <h4 className='text-base sm:text-lg font-medium text-gray-700 text-center sm:text-left'>
                Choose your preferred Oud type:
              </h4>
              <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
                {/* Premium Cambodian Oud */}
                <div
                  onClick={() => handleOudSelect('Premium Cambodian Oud')}
                  className={`p-4 border rounded-xl cursor-pointer transition-all ${
                    oudType === 'Premium Cambodian Oud'
                      ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className='space-y-3'>
                    <div className='aspect-video w-full rounded-lg overflow-hidden'>
                      <img
                        alt='Premium Cambodian Oud'
                        className='w-full h-full object-cover hover:scale-105 transition-transform'
                        src='./images/fragrance.jpg'
                        loading='lazy'
                      />
                    </div>
                    <div className='text-center'>
                      <h5 className='font-semibold text-sm text-gray-800 mb-1'>
                        Premium Cambodian Oud
                      </h5>
                      <p className='text-xs text-gray-600 leading-relaxed'>
                        Authentic Cambodian oud with rich, deep aroma
                      </p>
                    </div>

                    {oudType === 'Premium Cambodian Oud' && (
                      <div className='w-[80px] mx-auto mt-5 flex items-center gap-2 text-[#D4AF37]'>
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

                {/* Royal Premium Oud */}
                <div
                  onClick={() => handleOudSelect('Royal Premium Oud')}
                  className={`p-4 border rounded-xl cursor-pointer transition-all ${
                    oudType === 'Royal Premium Oud'
                      ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className='space-y-3'>
                    <div className='aspect-video w-full rounded-lg overflow-hidden'>
                      <img
                        alt='Royal Premium Oud'
                        className='w-full h-full object-cover hover:scale-105 transition-transform'
                        src='./images/fragrance.jpg'
                        loading='lazy'
                      />
                    </div>
                    <div className='text-center'>
                      <h5 className='font-semibold text-sm text-gray-800 mb-1'>
                        Royal Premium Oud
                      </h5>
                      <p className='text-xs text-gray-600 leading-relaxed'>
                        Royal premium oud for special occasions
                      </p>
                    </div>

                    {oudType === 'Royal Premium Oud' && (
                      <div className='w-[80px] mx-auto mt-5 flex items-center gap-2 text-[#D4AF37]'>
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
              </div>

              {/* Disclaimer */}
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm'>
                <div className='flex items-start gap-3'>
                  <input
                    id='incenseDisclaimer'
                    type='checkbox'
                    checked={disclaimer}
                    onChange={e => setDisclaimer(e.target.checked)}
                    className='mt-1 w-5 h-5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] focus:ring-2'
                  />
                  <div className='flex-1'>
                    <label
                      htmlFor='incenseDisclaimer'
                      className='text-sm text-blue-800 cursor-pointer font-medium'
                    >
                      I confirm that I do not have any allergy to Oud and its
                      components.
                    </label>
                    <p className='text-xs text-blue-600 mt-1'>
                      This confirmation is required for your safety
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='border-t border-gray-100 p-4 sm:p-6 bg-gray-50 flex justify-between'>
        {/* Back button always enabled */}
        <button
          onClick={onBack}
          className='px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium bg-gray-200 hover:bg-gray-300'
        >
          Back
        </button>

        {/* Next button logic */}
        <button
          onClick={onNext}
          disabled={
            (incense === null && steam === null) ||
            // If incense is selected
            (incense === true && (!oudType || !disclaimer)) ||
            // If incense is not selected → allowed
            false
          }
          className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium shadow-md
      ${
        (incense === null && steam === null) ||
        (incense === true && (!oudType || !disclaimer))
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

export default Step3Steam