import React from 'react'

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDays,
  faToolbox,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons'

function Booking() {
  const location = useLocation()
  const navigate = useNavigate()

  const item = location.state?.item

  const [startDate, setStartDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const today = new Date().toLocaleDateString('en-CA')

  const rentalDays =
    startDate && returnDate
      ? Math.ceil(
          (new Date(returnDate) - new Date(startDate)) /
            (1000 * 60 * 60 * 24)
        )
      : 0

  const totalCost =
    item && rentalDays > 0 ? item.price * rentalDays : 0

  const handleBooking = (e) => {
    e.preventDefault()

    if (!item) {
      alert('Please select equipment from the Equipment page.')
      navigate('/items')
      return
    }

    if (rentalDays <= 0) {
      alert('Return date must be after the start date.')
      return
    }

    const booking = {
      itemId: item.id,
      itemName: item.name,
      pricePerDay: item.price,
      startDate,
      returnDate,
      rentalDays,
      totalCost,
    }

    navigate('/payment', { state: { booking } })
  }

  if (!item) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-blue-950">
          No equipment selected
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
            icon={faCalendarDays}
            className="text-4xl text-blue-900"
          />

          <h1 className="mt-3 text-3xl font-bold text-blue-950">
            Book Equipment
          </h1>

          <p className="mt-2 text-gray-600">
            Choose your rental period.
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-blue-50 p-4">
          <FontAwesomeIcon
            icon={faToolbox}
            className="mr-3 text-blue-900"
          />

          <span className="font-semibold">{item.name}</span>

          <p className="mt-2 text-gray-600">
            ₹{item.price} per day
          </p>
        </div>

        <form onSubmit={handleBooking} className="space-y-5">
          <div>
            <label className="mb-2 block font-medium">
              Rental Start Date
            </label>

            <input
              type="date"
              value={startDate}
              min={today}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Expected Return Date
            </label>

            <input
              type="date"
              value={returnDate}
              min={startDate || today}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
              required
            />
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-3 font-bold text-gray-800">
              Rental Summary
            </h2>

            <div className="flex justify-between py-2 text-gray-600">
              <span>Rental duration</span>
              <span>{rentalDays > 0 ? `${rentalDays} days` : '—'}</span>
            </div>

            <div className="flex justify-between py-2 text-gray-600">
              <span>Price per day</span>
              <span>₹{item.price}</span>
            </div>

            <div className="mt-2 flex justify-between border-t pt-3 text-lg font-bold text-blue-950">
              <span>
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  className="mr-2"
                />
                Estimated Total
              </span>

              <span>₹{totalCost}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-900 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking
