import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faScrewdriverWrench,faSeedling,faVideo,faRulerVertical,} from '@fortawesome/free-solid-svg-icons'

// const equipmentIcons = {
//   drill: faScrewdriverWrench,
//   garden: faSeedling,
//   projector: faVideo,
//   ladder: faRulerVertical,
// }

function EquipmentCard({ item }) {
    const navigate = useNavigate()
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">

      {/* <div className="flex h-40 items-center justify-center bg-blue-50 text-5xl text-blue-900">
        <FontAwesomeIcon icon={equipmentIcons[item.icon] || faScrewdriverWrench} />
      </div> */}

      <div className="p-5">
        <p className="mb-2 text-sm text-gray-500">
          {item.category}
        </p>

        <h3 className="text-xl font-bold text-gray-800">
          {item.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm text-gray-600">
          {item.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="font-bold text-blue-900">
            ₹{item.price}
            <span className="text-sm font-normal text-gray-500">
              /day
            </span>
          </p>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              item.available
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {item.available ? 'Available' : 'Rented'}
          </span>
        </div>

        <button
          disabled={!item.available}
          onClick={() => navigate('/booking', { state: { item } })}
          className="mt-5 w-full rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {item.available ? 'Rent Now' : 'Currently Unavailable'}
          
        </button>
      </div>
    </div>
  )
}

export default EquipmentCard
