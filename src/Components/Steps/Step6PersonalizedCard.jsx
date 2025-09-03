import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPersonalizedCard } from '../../Redux_toolkit/Features/CartSlice'
import StepProgressBar from './StepProgress'

const Step6PersonalizedCard = ({ onBack, step, totalSteps }) => {
  const dispatch = useDispatch()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!from.trim()) {
      setError('This field is required') // 👈 error message
      return
    }
    setError('') // clear error if valid

    dispatch(addPersonalizedCard({ from, to }))

    console.log('Saved to Redux:', { from, to })
    setFrom('')
    setTo('')
  }

  return (
    <div className='flex flex-col scrollbar-hide'>
      <StepProgressBar step={step} totalSteps={totalSteps} />
      <div className='space-y-6 p-4 sm:p-6 lg:p-8 overflow-y-auto' dir='ltr'>
        <h3 className='text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left'>
          Want to include a personalized card?
        </h3>

        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* From Field */}
          <div>
            <label className='block mb-2 text-sm sm:text-base font-medium'>
              From <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Your name (required)*'
              value={from}
              onChange={e => setFrom(e.target.value)}
              className={`w-full p-3 sm:p-4 border rounded-lg text-sm sm:text-base transition-all focus:outline-none focus:ring-1 
    ${
      error
        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]'
    }`}
            />
            {/* Show error only if form submitted without 'from' */}
            {error && (
              <p className='text-red-500 text-xs sm:text-sm mt-1'>{error}</p>
            )}
          </div>

          {/* To Field */}
          <div>
            <label className='block mb-2 text-sm sm:text-base font-medium'>
              To (optional)
            </label>
            <input
              type='text'
              placeholder="Recipient's name (optional)"
              value={to}
              onChange={e => setTo(e.target.value)}
              className='w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-sm sm:text-base transition-all'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='px-6 py-2.5 rounded-lg bg-[#D4AF37] text-white font-medium hover:bg-[#b9972f]'
          >
            Save & Continue
          </button>
        </form>
      </div>

      <div className='border-t border-gray-100 p-4 sm:p-6 bg-gray-50 flex justify-between'>
        <button
          onClick={onBack}
          className='px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium bg-gray-200 hover:bg-gray-300'
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Step6PersonalizedCard
