import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCreditCard,
  faMoneyBillWave,
  faCheckCircle,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons'

function Payment() {
  const location = useLocation()
  const navigate = useNavigate()

  const booking = location.state?.booking

  const handlePayment = (e) => {
    e.preventDefault()

    if (!booking) {
      alert('Please select equipment and complete the booking details.')
      navigate('/items')
      return
    }

    navigate('/confirmation', { state: { booking } })
  }

  if (!booking) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-blue-950">
          No booking found
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
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-12">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg md:p-8">

        <div className="mb-6 text-center">
          <FontAwesomeIcon
            icon={faCreditCard}
            className="text-4xl text-blue-900"
          />

          <h1 className="mt-3 text-3xl font-bold text-blue-950">
            Payment
          </h1>

          <p className="mt-2 text-gray-600">
            Review your rental details before continuing.
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-blue-50 p-4">
          <h2 className="mb-3 font-bold text-blue-950">
            Rental Summary
          </h2>

          <p className="mb-2">
            <FontAwesomeIcon icon={faToolbox} className="mr-2" />
            {booking.itemName}
          </p>

          <div className="flex justify-between py-2 text-gray-600">
            <span>Start Date</span>
            <span>{booking.startDate}</span>
          </div>

          <div className="flex justify-between py-2 text-gray-600">
            <span>Return Date</span>
            <span>{booking.returnDate}</span>
          </div>

          <div className="flex justify-between py-2 text-gray-600">
            <span>Duration</span>
            <span>{booking.rentalDays} days</span>
          </div>

          <div className="flex justify-between py-2 text-gray-600">
            <span>Price per day</span>
            <span>₹{booking.pricePerDay}</span>
          </div>

          <div className="mt-3 flex justify-between border-t border-blue-200 pt-3 text-lg font-bold text-blue-950">
            <span>Total Amount</span>
            <span>₹{booking.totalCost}</span>
          </div>
        </div>

        <form onSubmit={handlePayment} className="space-y-5">
          <h2 className="font-bold text-gray-800">
            Select Payment Method
          </h2>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-4">
            <input
              type="radio"
              name="payment"
              value="upi"
              defaultChecked
              required
            />
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="text-xl text-blue-900"
            />
            <span>UPI</span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-4">
            <input
              type="radio"
              name="payment"
              value="card"
              required
            />
            <FontAwesomeIcon
              icon={faCreditCard}
              className="text-xl text-blue-900"
            />
            <span>Debit / Credit Card</span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-4">
            <input
              type="radio"
              name="payment"
              value="cash"
              required
            />
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="text-xl text-blue-900"
            />
            <span>Pay at Pickup</span>
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-900 py-3 font-semibold text-white hover:bg-blue-800"
          >
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            Confirm Booking
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Demo only — no actual payment will be processed.
        </p>
      </div>
    </div>
  )
}

export default Payment
