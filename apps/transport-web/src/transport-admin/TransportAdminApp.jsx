import { Link, Routes, Route, useLocation } from "react-router-dom"
import { AdminLayout, ToastProvider } from "@campus/ui"
import Dashboard from "./pages/Dashboard.jsx"
import DriverApplications from "./pages/DriverApplications.jsx"

const navItems = [
  { label: "Dashboard", href: "/transport-admin" },
  { label: "Driver applications", href: "/transport-admin/driver-applications" },
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
