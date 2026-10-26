
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import StudentDashboard from './Pages/StudentDashboard'
import DriverDashboard from './Pages/DriverDashboard'

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
