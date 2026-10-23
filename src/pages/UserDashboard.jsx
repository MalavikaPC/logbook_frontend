import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faToolbox,
  faClipboardList,
  faRotateLeft,
  faArrowRight,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons'

function UserDashboard() {
  const dashboardItems = [
    {
      title: 'Browse Equipment',
      description: 'Explore equipment available for rent.',
      icon: faToolbox,
      link: '/items',
      button: 'Browse Equipment',
    },
    {
      title: 'Rental History',
      description: 'View your rentals and their current status.',
      icon: faClipboardList,
      link: '/rental-history',
      button: 'View History',
    },
    {
      title: 'Book Equipment',
      description: 'Choose equipment and select your rental dates.',
      icon: faCalendarCheck,
      link: '/items',
      button: 'Book Now',
    },
    {
      title: 'Return Equipment',
      description: 'Check your active rentals and return equipment.',
      icon: faRotateLeft,
      link: '/rental-history',
      button: 'Manage Returns',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-2xl bg-blue-950 p-8 text-white md:p-12">
          <h1 className="text-3xl font-bold md:text-4xl">
            Welcome to Your Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-blue-100">
            Manage your equipment rentals, check booking details,
            and keep track of return dates in one place.
          </p>

          <Link
            to="/items"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-blue-950 hover:bg-blue-100"
          >
            Explore Equipment
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-bold text-blue-950">
            Quick Actions
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-3xl text-blue-900"
                />

                <h3 className="mt-4 text-lg font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm text-gray-600">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="mt-5 inline-flex items-center font-semibold text-blue-900 hover:text-blue-700"
                >
                  {item.button}
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

export default UserDashboard
