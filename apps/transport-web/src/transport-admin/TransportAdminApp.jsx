import { Link, Routes, Route, useLocation } from "react-router-dom"
import { AdminLayout, ToastProvider } from "@campus/ui"
import Dashboard from "./pages/Dashboard.jsx"
import DriverApplications from "./pages/DriverApplications.jsx"
import Students from "./pages/Students.jsx"
import RoutesPage from "./pages/RoutesPage.jsx"
import Vehicles from "./pages/Vehicles.jsx"
import Schedules from "./pages/Schedules.jsx"

const navItems = [
  { label: "Dashboard", href: "/transport-admin" },
  { label: "Driver applications", href: "/transport-admin/driver-applications" },
  { label: "Students", href: "/transport-admin/students" },
  { label: "Routes and stops", href: "/transport-admin/routes" },
  { label: "Vehicles", href: "/transport-admin/vehicles" },
  { label: "Schedules", href: "/transport-admin/schedules" },
]

function Shell() {
  const { pathname } = useLocation()
  return (
    <AdminLayout
      appName="Transport Admin"
      navItems={navItems}
      LinkComponent={Link}
      activePath={pathname}
      user={{ name: "Peter", role: "TRANSPORT_ADMIN" }}
    >
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="driver-applications" element={<DriverApplications />} />
        <Route path="students" element={<Students />} />
        <Route path="routes" element={<RoutesPage />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="schedules" element={<Schedules />} />
      </Routes>
    </AdminLayout>
  )
}

export default function TransportAdminApp() {
  return (
    <ToastProvider>
      <Shell />
    </ToastProvider>
  )
}
