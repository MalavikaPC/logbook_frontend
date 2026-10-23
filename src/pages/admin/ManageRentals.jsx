import React from 'react'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faEye,
  faRotateLeft,
  faXmark,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons'

const initialRentals = [
  {
    id: 1001,
    userName: 'Ananya Nair',
    itemName: 'Power Drill',
    startDate: '2026-10-20',
    returnDate: '2026-10-25',
    totalCost: 1250,
    status: 'Active',
    paymentStatus: 'Paid',
  },
  {
    id: 1002,
    userName: 'Arjun Kumar',
    itemName: 'Lawn Mower',
    startDate: '2026-10-10',
    returnDate: '2026-10-12',
    totalCost: 1000,
    status: 'Returned',
    paymentStatus: 'Paid',
  },
  {
    id: 1003,
    userName: 'Meera Thomas',
    itemName: 'Projector',
    startDate: '2026-10-22',
    returnDate: '2026-10-24',
    totalCost: 800,
    status: 'Active',
    paymentStatus: 'Pending',
  },
]

function ManageRentals() {
  const [rentals, setRentals] = useState(initialRentals)
  const [search, setSearch] = useState('')
  const [selectedRental, setSelectedRental] = useState(null)
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredRentals = rentals.filter((rental) => {
    const matchesSearch =
      `${rental.id} ${rental.userName} ${rental.itemName}`
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === 'All' || rental.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleReturn = (id) => {
    const confirmed = window.confirm(
      'Confirm that this equipment has been returned?'
    )

    if (!confirmed) return

    setRentals((previous) =>
      previous.map((rental) =>
        rental.id === id
          ? { ...rental, status: 'Returned' }
          : rental
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-950">
            Manage Rentals
          </h1>

          <p className="mt-2 text-gray-600">
            Monitor bookings, payments, and equipment returns.
          </p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Rentals</p>
            <p className="mt-2 text-2xl font-bold text-blue-950">
              {rentals.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Active Rentals</p>
            <p className="mt-2 text-2xl font-bold text-yellow-600">
              {rentals.filter((rental) => rental.status === 'Active').length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Returned Rentals</p>
            <p className="mt-2 text-2xl font-bold text-green-600">
              {rentals.filter((rental) => rental.status === 'Returned').length}
            </p>
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search booking ID, user, or equipment..."
              className="w-full outline-none"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-3"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Returned">Returned</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-xl bg-white shadow-md">
          <table className="w-full min-w-[950px] text-left">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="p-4">Booking ID</th>
                <th className="p-4">User</th>
                <th className="p-4">Equipment</th>
                <th className="p-4">Rental Dates</th>
                <th className="p-4">Total</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRentals.map((rental) => (
                <tr key={rental.id} className="border-b border-gray-200">
                  <td className="p-4 font-semibold">#{rental.id}</td>
                  <td className="p-4">{rental.userName}</td>
                  <td className="p-4">{rental.itemName}</td>

                  <td className="p-4 text-sm">
                    <div>{rental.startDate}</div>
                    <div className="text-gray-500">
                      to {rental.returnDate}
                    </div>
                  </td>

                  <td className="p-4 font-semibold">₹{rental.totalCost}</td>
                  <td className="p-4">{rental.paymentStatus}</td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        rental.status === 'Returned'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {rental.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setSelectedRental(rental)}
                        className="text-blue-700 hover:text-blue-900"
                        title="View rental details"
                        aria-label={`View booking ${rental.id}`}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>

                      {rental.status === 'Active' && (
                        <button
                          onClick={() => handleReturn(rental.id)}
                          className="text-green-700 hover:text-green-900"
                          title="Mark as returned"
                          aria-label={`Mark booking ${rental.id} as returned`}
                        >
                          <FontAwesomeIcon icon={faRotateLeft} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredRentals.length === 0 && (
                <tr>
                  <td colSpan="8" className="p-8 text-center text-gray-500">
                    No rental records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedRental && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
            <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-blue-950">
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    className="mr-2"
                  />
                  Rental Details
                </h2>

                <button
                  onClick={() => setSelectedRental(null)}
                  className="text-gray-500 hover:text-red-600"
                  aria-label="Close rental details"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <div className="space-y-3 text-gray-700">
                <p><strong>Booking ID:</strong> #{selectedRental.id}</p>
                <p><strong>User:</strong> {selectedRental.userName}</p>
                <p><strong>Equipment:</strong> {selectedRental.itemName}</p>
                <p><strong>Start Date:</strong> {selectedRental.startDate}</p>
                <p><strong>Return Date:</strong> {selectedRental.returnDate}</p>
                <p><strong>Total Cost:</strong> ₹{selectedRental.totalCost}</p>
                <p><strong>Payment:</strong> {selectedRental.paymentStatus}</p>
                <p><strong>Rental Status:</strong> {selectedRental.status}</p>
              </div>

              <button
                onClick={() => setSelectedRental(null)}
                className="mt-6 w-full rounded-lg bg-blue-900 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ManageRentals
