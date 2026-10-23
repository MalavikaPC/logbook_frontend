import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faToolbox } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-900 px-6 py-4 text-white md:px-12">
      <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
        <FontAwesomeIcon icon={faToolbox} />
        Rental Logbook
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        
        <Link to="/items" className="hover:text-blue-200">Equipment</Link>
        
        <Link to="/rental-history" className="hover:text-blue-600">
          Rental History
        </Link>
        <Link to="/login" className="hover:text-blue-200">Login</Link>
        <Link
          to="/register"
          className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-900"
        >
          Register
        </Link>

      </div>

      <button className="text-xl md:hidden" aria-label="Menu">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  )
}

export default Navbar