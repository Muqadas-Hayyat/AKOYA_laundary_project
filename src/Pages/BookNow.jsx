import { useState } from 'react'
import Step1Service from '../Components/Steps/Step1Service'
import Step2Clothes from '../Components/Steps/Step2Clothes'
import Step3Steam from '../Components/Steps/Step3Steam'
import OrderSummary from '../Components/Steps/OrderSummary'
import Step4Fragrance from '../Components/Steps/Step4Fragrance'
import Step5Packaging from '../Components/Steps/Step5Packaging'
import Step6PersonalizedCard from '../Components/Steps/Step6PersonalizedCard'

const BookNow = () => {
  const [step, setStep] = useState(1)

  return (
    <div
      className='border border-white min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8'
      style={{
        background:
          'linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)'
      }}
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left side (steps) */}
          <div className='lg:col-span-2 lg:mt-6 bg-white rounded-xl shadow-lg overflow-hidden'>
            {step === 1 && (
              <Step1Service onNext={() => setStep(2)} step={1} totalSteps={6} />
            )}

            {step === 2 && (
              <Step2Clothes
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
                step={2}
                totalSteps={6}
              />
            )}

            {step === 3 && (
              <Step3Steam
                step={3}
                totalSteps={6}
                onBack={() => setStep(2)} // ✅ go back to previous step
                onNext={() => setStep(4)}
              />
            )}

            {step === 4 && (
              <Step4Fragrance
                step={4}
                totalSteps={6}
                onBack={() => setStep(3)} // ✅ go back to step 3
                onNext={() => setStep(5)}
              />
            )}

            {step === 5 && (
              <Step5Packaging
                step={5}
                totalSteps={6}
                onBack={() => {
                  setStep(4)
                }}
                onNext={() => {
                 
                  setStep(6)
                }}
              />
            )}

            {step === 6 && (
              <Step6PersonalizedCard
               step={6}
                totalSteps={6}
                onBack={() => {
                  setStep(5)
                }}
              />
            )}
          </div>

          {/* Right side (summary) */}
          <div className='lg:col-span-1 lg:mt-6'>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookNow
