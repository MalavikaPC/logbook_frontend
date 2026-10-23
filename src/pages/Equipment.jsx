import React from 'react'
import { useState } from 'react'
import EquipmentCard from '../components/EquipmentCard'
import equipmentData from '../data/equipmentData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Equipment() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = [
    'All',
    ...new Set(equipmentData.map((item) => item.category)),
  ]

  const filteredEquipment = equipmentData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || item.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-12">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-3xl font-bold text-blue-950 md:text-4xl">
          Browse Equipment
        </h1>

        <p className="mt-3 text-gray-600">
          Find the equipment you need and check its daily rental price.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative md:col-span-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search equipment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-800"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-800"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))
          ) : (
            <p className="col-span-full py-10 text-center text-gray-500">
              No equipment found.
            </p>
          )}
        </div>

      </div>
    </div>
  )
}

export default Equipment


