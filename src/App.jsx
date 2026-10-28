
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'

import StudentDashboard from './Pages/StudentDashboard'
import StudentProfile from './Pages/StudentProfile'
import MyBookings from './Pages/MyBookings'
import BookShuttle from './Pages/BookShuttle'
import Payments from './Pages/Payments'

import DriverDashboard from './Pages/DriverDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Student pages */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/bookings" element={<MyBookings />} />
        <Route path="/student/book-shuttle" element={<BookShuttle />} />
        <Route path="/student/payments" element={<Payments />} />

        {/* Driver page */}
        <Route path="/driver" element={<DriverDashboard />} />

        {/* Redirect unknown URLs */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
