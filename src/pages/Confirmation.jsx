import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck,
  faToolbox,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons'

function Confirmation() {
  const location = useLocation()
  const navigate = useNavigate()

  const booking = location.state?.booking

  if (!booking) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-blue-950">
          No booking details found
        </h2>

        <button
          onClick={() => navigate('/items')}
          className="mt-5 rounded-lg bg-blue-900 px-5 py-3 text-white"
        >
          Browse Equipment
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-lg">

        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-6xl text-green-600"
        />

        <h1 className="mt-5 text-3xl font-bold text-blue-950">
          Booking Confirmed!
        </h1>

        <p className="mt-3 text-gray-600">
          Your booking is confirmed! Thank you for choosing Rental Logbook.
        </p>

        <div className="mt-6 rounded-lg bg-blue-50 p-5 text-left">
          <h2 className="mb-4 font-bold text-blue-950">
            Booking Details
          </h2>

          <p className="mb-3">
            <FontAwesomeIcon icon={faToolbox} className="mr-2" />
            {booking.itemName}
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
            {booking.startDate} to {booking.returnDate}
          </p>

          <div className="flex justify-between border-t border-blue-200 pt-3 font-bold">
            <span>Total Amount</span>
            <span>₹{booking.totalCost}</span>
          </div>
        </div>

        <button
          onClick={() => navigate('/items')}
          className="mt-6 w-full rounded-lg bg-blue-900 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Browse More Equipment
        </button>

      </div>
    </div>
  )
}

export default Confirmation
