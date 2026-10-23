import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="mb-4 text-3xl text-blue-900">
        <FontAwesomeIcon icon={icon} />
      </div>

      <h3 className="mb-2 text-xl font-bold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard