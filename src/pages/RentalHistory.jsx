import React from 'react'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faToolbox,
  faCalendarDays,
  faRotateLeft,
  faClock,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'

function RentalHistory() {
  const [rentals, setRentals] = useState([
    {
      id: 1,
      itemName: 'Power Drill',
      startDate: '2026-10-20',
      returnDate: '2026-10-25',
      totalCost: 1250,
      status: 'Active',
    },
    {
      id: 2,
      itemName: 'Lawn Mower',
      startDate: '2026-10-10',
      returnDate: '2026-10-12',
      totalCost: 1000,
      status: 'Returned',
    },
  ])

  const handleReturn = (id) => {
    const confirmReturn = window.confirm(
      'Are you sure you want to return this equipment?'
    )

    if (!confirmReturn) return

    setRentals((previousRentals) =>
      previousRentals.map((rental) =>
        rental.id === id
          ? { ...rental, status: 'Returned' }
          : rental
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-950">
            Rental History
          </h1>

          <p className="mt-2 text-gray-600">
            View your rented equipment and track return status.
          </p>
        </div>

        {rentals.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <FontAwesomeIcon
              icon={faToolbox}
              className="text-4xl text-gray-400"
            />

            <p className="mt-4 text-gray-600">
              You have no rental history yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">

            {rentals.map((rental) => (
              <div
                key={rental.id}
                className="rounded-xl bg-white p-6 shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-blue-950">
                      <FontAwesomeIcon
                        icon={faToolbox}
                        className="mr-2"
                      />
                      {rental.itemName}
                    </h2>

                    <p className="mt-2 text-gray-500">
                      Booking ID: {rental.id}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      rental.status === 'Returned'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {rental.status}
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-gray-600">
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="mr-2 text-blue-900"
                    />
                    Start Date: {rental.startDate}
                  </p>

                  <p>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-2 text-blue-900"
                    />
                    Return Date: {rental.returnDate}
                  </p>

                  <p className="font-semibold text-blue-950">
                    Total Cost: ₹{rental.totalCost}
                  </p>
                </div>

                {rental.status === 'Active' ? (
                  <button
                    onClick={() => handleReturn(rental.id)}
                    className="mt-5 w-full rounded-lg bg-blue-900 py-3 font-semibold text-white hover:bg-blue-800"
                  >
                    <FontAwesomeIcon
                      icon={faRotateLeft}
                      className="mr-2"
                    />
                    Return Equipment
                  </button>
                ) : (
                  <div className="mt-5 rounded-lg bg-green-50 py-3 text-center font-semibold text-green-700">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2"
                    />
                    Equipment Returned
                  </div>
                )}
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  )
}

export default RentalHistory
