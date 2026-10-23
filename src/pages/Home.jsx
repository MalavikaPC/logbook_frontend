import React from 'react'

import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import {
  faCalendarCheck,
  faCreditCard,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <>
      <section className="flex min-h-[420px] flex-col items-center justify-center bg-blue-100 px-6 py-16 text-center">
        <h1 className="mb-5 text-4xl font-bold text-blue-950 md:text-5xl">
          Rent Equipment Easily
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-700">
          Browse equipment, book your preferred dates, and track
          your rentals in one convenient place.
        </p>

        <Link
          to="/items"
          className="rounded-lg bg-blue-900 px-7 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Explore Equipment
        </Link>
      </section>

      <section className="px-6 py-14 md:px-12">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
          Why Choose Rental Logbook?
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            icon={faToolbox}
            title="Easy Booking"
            description="Browse equipment and book the items you need."
          />

          <FeatureCard
            icon={faCalendarCheck}
            title="Rental Tracking"
            description="Track rental dates, returns, and due dates."
          />

          <FeatureCard
            icon={faCreditCard}
            title="Simple Payments"
            description="View rental costs and complete demo payments."
          />
        </div>
      </section>
    </>
  )
}

export default Home