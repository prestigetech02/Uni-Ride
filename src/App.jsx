
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import StudentDashboard from './pages/StudentDashboard'
import DriverDashboard from './pages/DriverDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
