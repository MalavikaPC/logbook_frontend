import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faToolbox,faUsers,faClipboardList,faArrowRight,faPlus,} from '@fortawesome/free-solid-svg-icons'

function AdminDashboard() {
  const adminCards = [
    {
      title: 'Manage Equipment',
      description: 'Add equipment, update rental prices, and manage availability.',
      icon: faToolbox,
      link: '/admin/equipment',
      button: 'Manage Equipment',
    },
    {
      title: 'Manage Users',
      description: 'View registered users and their account details.',
      icon: faUsers,
      link: '/admin/users',
      button: 'Manage Users',
    },
    {
      title: 'Manage Rentals',
      description: 'Review bookings, rental dates, and return status.',
      icon: faClipboardList,
      link: '/admin/rentals',
      button: 'Manage Rentals',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-2xl bg-blue-950 p-8 text-white md:p-12">
          <p className="font-semibold text-blue-200">
            RENTAL LOGBOOK
          </p>

          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            Admin Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-blue-100">
            Manage equipment, users, and rental activities from one place.
          </p>

          <Link
            to="/admin/equipment"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-blue-950 hover:bg-blue-100"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Manage Equipment
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-bold text-blue-950">
            Administration
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {adminCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <FontAwesomeIcon
                  icon={card.icon}
                  className="text-3xl text-blue-900"
                />

                <h3 className="mt-4 text-xl font-bold text-blue-950">
                  {card.title}
                </h3>

                <p className="mt-3 min-h-16 text-gray-600">
                  {card.description}
                </p>

                <Link
                  to={card.link}
                  className="mt-5 inline-flex items-center font-semibold text-blue-900 hover:text-blue-700"
                >
                  {card.button}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard
