import React from 'react'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers,
  faMagnifyingGlass,
  faTrash,
  faEye,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const initialUsers = [
  {
    id: 1,
    name: 'Ananya Nair',
    email: 'ananya@example.com',
    phone: '9876543210',
    joinedDate: '2026-09-15',
  },
  {
    id: 2,
    name: 'Arjun Kumar',
    email: 'arjun@example.com',
    phone: '9876501234',
    joinedDate: '2026-09-20',
  },
  {
    id: 3,
    name: 'Meera Thomas',
    email: 'meera@example.com',
    phone: '9876512340',
    joinedDate: '2026-10-01',
  },
]

function ManageUsers() {
  const [users, setUsers] = useState(initialUsers)
  const [search, setSearch] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to remove this user from the demo list?'
    )

    if (confirmed) {
      setUsers((previous) =>
        previous.filter((user) => user.id !== id)
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-950">
            Manage Users
          </h1>

          <p className="mt-2 text-gray-600">
            View and manage registered users.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-xl text-blue-900"
            />

            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-xl font-bold text-blue-950">
                {users.length}
              </p>
            </div>
          </div>

          <div className="flex w-full items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 md:w-80">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name or email..."
              className="w-full outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl bg-white shadow-md">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Joined Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-blue-950">
                    {user.name}
                  </td>

                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.phone}</td>
                  <td className="p-4">{user.joinedDate}</td>

                  <td className="p-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="text-blue-700 hover:text-blue-900"
                        aria-label={`View ${user.name}`}
                        title="View details"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800"
                        aria-label={`Delete ${user.name}`}
                        title="Delete user"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-blue-950">
                  User Details
                </h2>

                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-500 hover:text-red-600"
                  aria-label="Close details"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <div className="space-y-3 text-gray-700">
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Joined:</strong> {selectedUser.joinedDate}</p>
              </div>

              <button
                onClick={() => setSelectedUser(null)}
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

export default ManageUsers
