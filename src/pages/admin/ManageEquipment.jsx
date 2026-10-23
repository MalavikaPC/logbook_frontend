import React from 'react'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faPenToSquare,faTrash, faToolbox, faXmark,} from '@fortawesome/free-solid-svg-icons'

const initialEquipment = [
  {
    id: 1,
    name: 'Power Drill',
    category: 'Tools',
    price: 250,
    description: 'Powerful drill for home and construction work.',
    available: true,
  },
  {
    id: 2,
    name: 'Lawn Mower',
    category: 'Garden Equipment',
    price: 500,
    description: 'Equipment for maintaining lawns and gardens.',
    available: true,
  },
  {
    id: 3,
    name: 'Projector',
    category: 'Electronics',
    price: 400,
    description: 'Projector suitable for meetings and presentations.',
    available: false,
  },
  {
    id: 4,
    name: 'Ladder',
    category: 'Construction',
    price: 150,
    description: 'Sturdy ladder for maintenance and repair work.',
    available: true,
  },
]

const emptyForm = {
  name: '',
  category: 'Tools',
  price: '',
  description: '',
}

function ManageEquipment() {
  const [equipment, setEquipment] = useState(initialEquipment)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const openAddForm = () => {
    setEditingId(null)
    setFormData(emptyForm)
    setShowForm(true)
  }

  const openEditForm = (item) => {
    setEditingId(item.id)
    setFormData({
      name: item.name,
      category: item.category,
      price: String(item.price),
      description: item.description,
    })
    setShowForm(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedItem = {
      ...formData,
      price: Number(formData.price),
    }

    if (editingId !== null) {
      setEquipment((previous) =>
        previous.map((item) =>
          item.id === editingId
            ? { ...item, ...updatedItem }
            : item
        )
      )
    } else {
      setEquipment((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...updatedItem,
          available: true,
        },
      ])
    }

    setShowForm(false)
    setEditingId(null)
    setFormData(emptyForm)
  }

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this equipment?'
    )

    if (confirmed) {
      setEquipment((previous) =>
        previous.filter((item) => item.id !== id)
      )
    }
  }

  const toggleAvailability = (id) => {
    setEquipment((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, available: !item.available }
          : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-950">
              Manage Equipment
            </h1>
            <p className="mt-2 text-gray-600">
              Add, edit, and manage rental equipment.
            </p>
          </div>

          <button
            onClick={openAddForm}
            className="rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Equipment
          </button>
        </div>

        {showForm && (
          <div className="mb-8 rounded-xl bg-white p-6 shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-blue-950">
                {editingId !== null ? 'Edit Equipment' : 'Add New Equipment'}
              </h2>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-red-600"
                aria-label="Close form"
              >
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">Equipment Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter equipment name"
                  className="w-full rounded-lg border border-gray-300 p-3"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 p-3"
                  required
                >
                  <option>Tools</option>
                  <option>Garden Equipment</option>
                  <option>Electronics</option>
                  <option>Construction</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">Price Per Day (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="1"
                  placeholder="Enter daily rental price"
                  className="w-full rounded-lg border border-gray-300 p-3"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Description</label>
                <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  className="w-full rounded-lg border border-gray-300 p-3"
                  required
                />
              </div>

              <div className="flex gap-3 md:col-span-2">
                <button
                  type="submit"
                  className="rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white hover:bg-blue-800"
                >
                  {editingId !== null ? 'Save Changes' : 'Add Equipment'}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-lg border border-gray-300 px-5 py-3"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="overflow-x-auto rounded-xl bg-white shadow-md">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="p-4">Equipment</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price / Day</th>
                <th className="p-4">Availability</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {equipment.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faToolbox}
                        className="text-xl text-blue-900"
                      />
                      <div>
                        <p className="font-semibold text-blue-950">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">{item.category}</td>
                  <td className="p-4 font-semibold">₹{item.price}</td>

                  <td className="p-4">
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        item.available
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {item.available ? 'Available' : 'Unavailable'}
                    </button>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-3">
                      <button
                        onClick={() => openEditForm(item)}
                        className="text-blue-700 hover:text-blue-900"
                        aria-label={`Edit ${item.name}`}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-800"
                        aria-label={`Delete ${item.name}`}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {equipment.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    No equipment added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default ManageEquipment
