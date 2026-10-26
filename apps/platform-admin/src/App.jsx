import { Link, Routes, Route, useLocation } from "react-router-dom"
import { AdminLayout, ToastProvider } from "@campus/ui"
import Dashboard from "./pages/Dashboard.jsx"
import Universities from "./pages/Universities.jsx"
import Users from "./pages/Users.jsx"
import Invitations from "./pages/Invitations.jsx"
import AuditLogs from "./pages/AuditLogs.jsx"
import Settings from "./pages/Settings.jsx"

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Users", href: "/users" },
  { label: "Admin invitations", href: "/invitations" },
  { label: "Audit logs", href: "/audit-logs" },
  { label: "Settings", href: "/settings" },
]

function Shell() {
  const { pathname } = useLocation()
  return (
    <AdminLayout
      appName="Main Admin"
      navItems={navItems}
      LinkComponent={Link}
      activePath={pathname}
      user={{ name: "Peter", role: "MAIN_ADMIN" }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/users" element={<Users />} />
        <Route path="/invitations" element={<Invitations />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AdminLayout>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <Shell />
    </ToastProvider>
  )
}
