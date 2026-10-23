import './App.css'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Equipment from './pages/Equipment'
import Login from './pages/Login'
import Register from './pages/Register'
import Booking from './pages/Booking'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import RentalHistory from './pages/RentalHistory'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import ManageEquipment from './pages/admin/ManageEquipment'
import ManageUsers from './pages/admin/ManageUsers'
import ManageRentals from './pages/admin/ManageRentals'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Equipment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/rental-history" element={<RentalHistory />} />
          <Route path="/dashboard" element={<UserDashboard />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/equipment" element={<ManageEquipment />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/rentals" element={<ManageRentals />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
