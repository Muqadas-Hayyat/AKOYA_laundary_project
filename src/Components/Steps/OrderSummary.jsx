import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  removeService,
  removeGarment,
  incrementQty,
  decrementQty,
  removeSteam,
  removeIncense,
  removeFragrance,
  removePackaging
} from '../../Redux_toolkit/Features/CartSlice'
import { toast,ToastContainer } from 'react-toastify'

const OrderSummary = () => {
  const dispatch = useDispatch()
  const {
    service,
    garments,
    steam,
    incense,
    fragrance,
    packaging,
    personalizedCard
  } = useSelector(state => state.cart)

  // Garments total
  const garmentsTotal = garments.reduce((acc, g) => acc + g.price * g.qty, 0)

  // Steam finishing total (per garment steam finishing price)
  const steamTotal = garments.reduce((acc, g) => {
    if (g.finishingSteamPrice) {
      return acc + g.finishingSteamPrice * g.qty
    }
    return acc
  }, 0)

  // Service total
  const serviceTotal = service?.price || 0

  // Incense total
  const incenseTotal = incense?.enabled ? Number(incense.price || 0) : 0

  // Fragrance total
  const fragranceTotal = fragrance?.enabled ? Number(fragrance.price || 0) : 0

  // Packaging total
  const packagingTotal = packaging?.enabled ? Number(packaging.price || 0) : 0

  // Grand total
  const total =
    garmentsTotal +
    steamTotal +
    incenseTotal +
    fragranceTotal +
    packagingTotal +
    serviceTotal

  const navigate = useNavigate()
const handleBookNow = () => {
  const loggedInUser = localStorage.getItem('loggedInUser')

  if (!loggedInUser) {
    // Save current page so user can come back after login
    localStorage.setItem('redirectAfterLogin', '/book-now')
    navigate('/login')
  } else {
    // ✅ User is logged in → Place order
    toast.success('Order Placed Successfully!',{
    position:"top-center"
    })

    // Clear redux cart (everything including personalized card)
    dispatch(removeService())
    garments.forEach(g => dispatch(removeGarment(g.id)))
    if (steam) dispatch(removeSteam())
    if (incense?.enabled) dispatch(removeIncense())
    if (fragrance?.enabled) dispatch(removeFragrance())
    if (packaging?.enabled) dispatch(removePackaging())
    if (personalizedCard?.from) {
      dispatch({ type: "cart/clearPersonalizedCard" }) // <-- add this in your CartSlice
    }

    // ✅ Wait 1.5s so toast is visible before redirect
    setTimeout(() => {
      navigate('/')
    },6000)
  }
}




  return (
    <div className='bg-white rounded-xl shadow-lg sticky top-20 max-h-[85vh] overflow-hidden flex flex-col'>
      <div className='p-4 sm:p-6 border-b border-gray-100'>
        <h3 className='text-lg sm:text-xl font-bold text-center text-[#D4AF37]'>
          Order Summary
        </h3>
      </div>

      <div className='flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6'>
        <div className='space-y-3'>
          {/* Service (only if selected) */}
          {service && (
            <div className='flex justify-between items-center border-b pb-2'>
              <span className='text-sm font-semibold'>Service Type:</span>
              <div className='flex items-center space-x-2'>
                <span>{service?.name}</span>
                <button
                  onClick={() => dispatch(removeService())}
                  className='w-[20px] h-[20px] text-[12px] flex justify-center items-center font-bold rounded-2xl text-red-500 hover:text-red-700 p-1 hover:bg-red-100 transition'
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Garments */}
          {garments.length > 0 && (
            <>
              <p className='text-[14px] text-black font-semibold'>Garments:</p>

              {garments.map(g => (
                <div key={g.id} className='mb-4'>
                  <div className='bg-white shadow-md hover:shadow-lg transition rounded-xl p-4 border border-gray-100'>
                    <div className='flex justify-between items-start mb-3'>
                      <h3 className='text-sm font-semibold text-black truncate mt-2'>
                        {g.name}
                      </h3>
                      <button
                        className='w-[20px] h-[20px] text-[12px] flex justify-center items-center rounded-2xl text-red-500 hover:text-red-700 p-1 hover:bg-red-100 transition font-bold'
                        onClick={() => dispatch(removeGarment(g.id))}
                      >
                        ✕
                      </button>
                    </div>

                    <div className='flex justify-between items-center'>
                      <div className='flex items-center space-x-2'>
                        <button
                          onClick={() => dispatch(decrementQty(g.id))}
                          className='w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-bold text-gray-700 transition'
                        >
                          -
                        </button>
                        <span className='text-sm font-medium text-gray-800 w-6 text-center'>
                          {g.qty}
                        </span>
                        <button
                          onClick={() => dispatch(incrementQty(g.id))}
                          className='w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-bold text-gray-700 transition'
                        >
                          +
                        </button>
                      </div>

                      <span className='text-sm font-semibold text-gray-900'>
                        <span>{g.price * g.qty} QAR</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Steam (only if selected) */}
          {steam && steamTotal > 0 && (
            <div className='flex justify-between items-center border-t pt-2 mt-2'>
              <div className='flex items-center space-x-2'>
                <span className='text-sm font-semibold text-gray-800'>
                  Steam Finishing:
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-sm font-semibold text-gray-900'>
                  +{steamTotal} QAR
                </span>
                <button
                  onClick={() => dispatch(removeSteam())}
                  className='w-[20px] h-[20px] text-[12px] flex justify-center items-center font-bold rounded-2xl text-red-500 hover:text-red-700 p-1 hover:bg-red-100 transition'
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Incense */}
          {incense && incense.enabled && (
            <div className='flex justify-between items-center border-t pt-2 mt-2'>
              <span className='text-sm font-semibold text-gray-800'>
                Incense{incense.type ? ` (${incense.type})` : ''}:
              </span>
              <div className='flex items-center space-x-2'>
                <span className='text-sm font-semibold text-gray-900'>
                  +{incense.price} QAR
                </span>
                <button
                  onClick={() => dispatch(removeIncense())}
                  className='w-[20px] h-[20px] text-[12px] flex justify-center items-center font-bold rounded-2xl text-red-500 hover:text-red-700 p-1 hover:bg-red-100 transition'
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Fragrance */}
          {fragrance && fragrance.enabled && (
            <div className='flex justify-between items-center border-t pt-2 mt-2'>
              <span className='text-sm font-semibold text-gray-800'>
                Fragrance{fragrance.type ? ` (${fragrance.type})` : ''}:
              </span>
              <div className='flex items-center space-x-2'>
                <span className='text-sm font-semibold text-gray-900'>
                  +{fragrance.price} QAR
                </span>
                <button
                  onClick={() => dispatch(removeFragrance())}
                  className='w-[20px] h-[20px] text-[12px] flex justify-center items-center font-bold rounded-2xl text-red-500 hover:text-red-700 p-1 hover:bg-red-100 transition'
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Packaging */}
          {packaging && packaging.enabled && (
            <div className='flex justify-between items-center border-t pt-2 mt-2'>
              <span className='text-sm font-semibold text-gray-800'>
                Packaging{packaging.type ? ` (${packaging.type})` : ''}:
              </span>
              <div className='flex items-center space-x-2'>
                <span className='text-sm font-semibold text-gray-900'>
                  {packaging.price === 0 ? 'Free' : `+${packaging.price} QAR`}
                </span>
                <button
                  onClick={() => dispatch(removePackaging())}
                  className='w-[20px] h-[20px] text-[12px] flex justify-center items-center font-bold rounded-2xl text-red-500 hover:text-red-700 p-1 hover:bg-red-100 transition'
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Personalized Card */}
      {personalizedCard.from && (
        <div className='border-b border-gray-100 pb-3 pl-7 pt-2 mt-2 '>
          <p className='font-medium text-sm mb-2 text-gray-700'>
            Personalized Card:
          </p>
          <div className='text-xs space-y-1 text-gray-600'>
            <p>From: {personalizedCard.from}</p>
            <p>To (optional): {personalizedCard.to}</p>
          </div>
        </div>
      )}

      {/* Total */}
      <div className='border-t border-gray-200 p-4 sm:p-6 bg-gray-50'>
        <div className='flex justify-between font-bold text-lg mb-4'>
          <span className='text-gray-700'>Total:</span>
          <span>{total} QAR</span>
        </div>

        {personalizedCard?.from && (
          <button
            onClick={handleBookNow}
            className='w-full py-3 bg-[#D4AF37] text-white font-bold rounded-lg hover:bg-[#b9972f] duration-150 hover:scale-105 transition mt-5'
          >
            Book Now
          </button>
        )}
      </div>
      <ToastContainer/>

    </div>
  )
}

export default OrderSummary
