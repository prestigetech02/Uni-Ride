import { Link, Navigate, Routes, Route, useLocation } from "react-router-dom"
import { AdminLayout, ToastProvider, Loading } from "@campus/ui"
import { AuthProvider, useAuth } from "./auth.jsx"
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import DriverApplications from "./pages/DriverApplications.jsx"
import Students from "./pages/Students.jsx"
import RoutesPage from "./pages/RoutesPage.jsx"
import Vehicles from "./pages/Vehicles.jsx"
import Schedules from "./pages/Schedules.jsx"
import Bookings from "./pages/Bookings.jsx"
import Incidents from "./pages/Incidents.jsx"
import Reports from "./pages/Reports.jsx"

const navItems = [
  { label: "Dashboard", href: "/transport-admin" },
  { label: "Driver applications", href: "/transport-admin/driver-applications" },
  { label: "Students", href: "/transport-admin/students" },
  { label: "Routes and stops", href: "/transport-admin/routes" },
  { label: "Vehicles", href: "/transport-admin/vehicles" },
  { label: "Schedules", href: "/transport-admin/schedules" },
  { label: "Bookings", href: "/transport-admin/bookings" },
  { label: "Incidents", href: "/transport-admin/incidents" },
  { label: "Reports", href: "/transport-admin/reports" },
]

function Shell() {
  const { pathname } = useLocation()
  const { user, signOut } = useAuth()
  return (
    <AdminLayout
      appName="Transport Admin"
      navItems={navItems}
      LinkComponent={Link}
      activePath={pathname}
      user={{ name: user.username, role: user.role }}
      onLogout={signOut}
    >
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="driver-applications" element={<DriverApplications />} />
        <Route path="students" element={<Students />} />
        <Route path="routes" element={<RoutesPage />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="schedules" element={<Schedules />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="incidents" element={<Incidents />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </AdminLayout>
  )
}

function RequireAuth({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <Loading />
  if (!user) return <Navigate to="/transport-admin/login" replace />
  return children
}

export default function TransportAdminApp() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<RequireAuth><Shell /></RequireAuth>} />
        </Routes>
      </ToastProvider>
    </AuthProvider>
  )
}
