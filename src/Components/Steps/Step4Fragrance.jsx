import React, { useState } from 'react'
import StepProgressBar from './StepProgress'
import {
  addFragrance,
  removeFragrance
} from '../../Redux_toolkit/Features/CartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Step4Fragrance = ({ step, totalSteps, onBack, onNext }) => {
  const [selected, setSelected] = useState(null) // yes or no
  const [fragranceType, setFragranceType] = useState(null)
  const [disclaimer, setDisclaimer] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const dispatch = useDispatch()
  const garments = useSelector(state => state.cart.garments)

  const handleYes = () => {
    setSelected(true)
    setShowWarning(false)

    // Check for restricted garments
    const restricted = [
      'Kids underwear',
      'Kids pants',
      'Children suit',
      'Abaya'
    ]
    const hasRestricted = garments.some(g =>
      restricted.some(r => g.name.toLowerCase().includes(r.toLowerCase()))
    )

    if (hasRestricted) {
      setShowWarning(true)
      setSelected(true)
      setFragranceType(null)
      dispatch(removeFragrance())
      return
    }
  }

  const handleNo = () => {
    setSelected(false)
    setFragranceType(null)
    setShowWarning(false)
    dispatch(removeFragrance())
  }

  const handleFragranceSelect = fragrance => {
    setFragranceType(fragrance.name)
    dispatch(addFragrance({ price: 5, type: fragrance.name }))
  }

  return (
    <div className='flex flex-col h-[600px]'>
      {/* Progress Bar */}
      <StepProgressBar step={step} totalSteps={totalSteps} />

      <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-hide space-y-6'>
        <div className='space-y-4'>
          {/* Title */}
          <h3 className='text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left'>
            Would you like your clothes to be perfumed?
          </h3>

          {/* Warning Banner */}
          {showWarning && (
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

          {/* Yes / No */}
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <button
              type='button'
              onClick={handleYes}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border text-sm sm:text-base font-medium transition-all ${
                selected === true
                  ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              Yes
            </button>
            <button
              type='button'
              onClick={handleNo}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border text-sm sm:text-base font-medium transition-all ${
                selected === false
                  ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              No
            </button>
          </div>

          {/* Fragrance List */}
          {selected === true && (
            <div className='space-y-6'>
              <h4 className='text-base sm:text-lg font-medium text-gray-700 text-center sm:text-left'>
                Choose your preferred fragrance:
              </h4>

              <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                {/* Women's */}
                <div className='space-y-4'>
                  <h5 className='font-semibold text-sm sm:text-base mb-3 text-center text-[#D4AF37] border-b border-gray-200 pb-2'>
                    Women's
                  </h5>
                  {[
                    {
                      name: 'Orchid - Soft Floral',
                      desc: 'Elegant feminine fragrance with soft orchid scent',
                      img: './images/orchard.jpg'
                    },
                    {
                      name: 'Moony - Airy Musk',
                      desc: 'Light and refreshing musky fragrance',
                      img: './images/moony.jpg'
                    }
                  ].map(f => (
                    <div
                      key={f.name}
                      onClick={() => handleFragranceSelect(f)}
                      className={`p-4 border rounded-xl cursor-pointer transition-all ${
                        fragranceType === f.name
                          ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <div className='space-y-3'>
                        <div className='aspect-video w-full h-80 rounded-lg overflow-hidden'>
                          <img
                            alt={f.name}
                            className='w-full h-full object-cover transition-transform hover:scale-105'
                            src={f.img}
                          />
                        </div>
                        <div className='text-center'>
                          <h6 className='font-semibold text-sm text-gray-800 mb-1'>
                            {f.name}
                          </h6>
                          <p className='text-xs text-gray-600 leading-relaxed'>
                            {f.desc}
                          </p>
                        </div>
                      </div>

                      {fragranceType === f.name && (
                        <div className='w-[80px] mx-auto mt-5 flex items-center gap-2 text-[#D4AF37]'>
                          <svg
                            className='w-4 h-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                          <span className='text-xs font-medium'>Selected</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Men's */}
                <div className='space-y-4'>
                  <h5 className='font-semibold text-sm sm:text-base mb-3 text-center text-[#D4AF37] border-b border-gray-200 pb-2'>
                    Men's
                  </h5>
                  {[
                    {
                      name: 'Elixir - Oud & Amber',
                      desc: 'Strong oriental fragrance with oud and amber blend',
                      img: './images/elixr.jpg'
                    },
                    {
                      name: 'Imperial - Oriental Bold',
                      desc: 'Luxurious imperial fragrance with captivating oriental scent',
                      img: './images/imperial.jpg'
                    }
                  ].map(f => (
                    <div
                      key={f.name}
                      onClick={() => handleFragranceSelect(f)}
                      className={`p-4 border rounded-xl cursor-pointer transition-all ${
                        fragranceType === f.name
                          ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <div className='space-y-3'>
                        <div className='aspect-video w-full h-80 rounded-lg overflow-hidden'>
                          <img
                            alt={f.name}
                            className='w-full h-full object-cover transition-transform hover:scale-105'
                            src={f.img}
                          />
                        </div>
                        <div className='text-center'>
                          <h6 className='font-semibold text-sm text-gray-800 mb-1'>
                            {f.name}
                          </h6>
                          <p className='text-xs text-gray-600 leading-relaxed'>
                            {f.desc}
                          </p>
                        </div>
                      </div>

                     {fragranceType === f.name && (
                        <div className='w-[80px] mx-auto mt-5 flex items-center gap-2 text-[#D4AF37]'>
                          <svg
                            className='w-4 h-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                          <span className='text-xs font-medium'>Selected</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm'>
                <div className='flex items-start gap-3'>
                  <input
                    id='fragranceDisclaimer'
                    type='checkbox'
                    checked={disclaimer}
                    onChange={e => setDisclaimer(e.target.checked)}
                    className='mt-1 w-5 h-5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] focus:ring-2'
                  />
                  <div className='flex-1'>
                    <label
                      htmlFor='fragranceDisclaimer'
                      className='text-sm text-blue-800 cursor-pointer font-medium'
                    >
                      I confirm that I do not have any allergy to the selected
                      perfume ingredients.
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

      {/* Footer Buttons */}
      <div className='border-t border-gray-100 p-4 sm:p-6 bg-gray-50'>
        <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-0'>
          <button
            type='button'
            onClick={onBack}
            className='w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base font-medium transition-all hover:bg-gray-50'
          >
            Back
          </button>
          <button
            type='button'
            onClick={onNext}
            disabled={
              selected === null || (selected && (!fragranceType || !disclaimer))
            }
            className='w-full sm:w-auto sm:ml-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all bg-[#D4AF37] text-white hover:bg-[#c9a227] shadow-md hover:shadow-lg disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step4Fragrance
