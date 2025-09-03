import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSignup = e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords don't match!")
      return
    }

    const newUser = { email, password }

    // Save user in localStorage
    localStorage.setItem('registeredUser', JSON.stringify(newUser)) // ✅ same key used in Login
    localStorage.setItem('loggedInUser', JSON.stringify(newUser)) // ✅ auto-login

    toast.success('Account Created Successfully!')

    // Redirect to Book Now page
    navigate('/book-now')
  }

  return (
    <div className='min-h-screen pt-16 bg-gradient-to-b from-[#f9f7f4] to-[#f1ece5] flex items-center justify-center p-4 relative'>
      {/* Background glow */}
      <div className='absolute inset-0 opacity-10 pointer-events-none'>
        <div className='absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse'></div>
      </div>

      {/* Card */}
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
        {/* Header */}
        <div className='bg-[#1C1C1C] p-6 text-center'>
          <h2 className='text-2xl font-light text-[#D4AF37] tracking-wide'>
            AKOYA PREMIUM LAUNDRY
          </h2>
          <div className='mt-2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent'></div>
          <p className='mt-2 text-gray-300 text-sm'>
            Create your premium account
          </p>
        </div>

        {/* Form */}
        <div className='p-8'>
          <form onSubmit={handleSignup} className='space-y-5'>
            {/* Full Name */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Full Name
              </label>
              <input
                id='name'
                type='text'
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder='Enter your full name'
                required
                className='block w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200'
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email Address
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='your@email.com'
                required
                className='block w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200'
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='••••••••'
                required
                className='block w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200'
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Confirm Password
              </label>
              <input
                id='confirmPassword'
                type='password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder='••••••••'
                required
                className='block w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200'
              />
            </div>

            {/* Terms */}
            <div className='flex items-center mt-1'>
              <input
                id='terms'
                type='checkbox'
                required
                className='h-4 w-4 text-[#D4AF37] focus:ring-[#D4AF37] border-gray-300 rounded'
              />
              <label
                htmlFor='terms'
                className='ml-2 block text-sm text-gray-700'
              >
                I agree to the{' '}
                <a href='#' className='text-[#D4AF37] hover:underline'>
                  terms and conditions
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type='submit'
              className='w-full flex justify-center py-3 px-4 mt-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#D4AF37] to-[#F1C232] hover:from-[#C9A227] hover:to-[#E0B82D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105'
            >
              Create Account
            </button>
          </form>

          {/* Already have account */}
          <div className='mt-6 text-center text-sm'>
            <p className='text-gray-600'>
              Already have an account?{' '}
              <a
                href='/login'
                className='font-medium text-[#D4AF37] hover:text-yellow-600 border-b border-transparent hover:border-[#D4AF37] transition duration-200'
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
