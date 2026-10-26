import { Link, Routes, Route, useLocation } from "react-router-dom"
import { AdminLayout, ToastProvider } from "@campus/ui"
import Dashboard from "./pages/Dashboard.jsx"
import Universities from "./pages/Universities.jsx"
import AuditLogs from "./pages/AuditLogs.jsx"

function Shell() {
  const { pathname } = useLocation()
  return (
    <AdminLayout
      appName="Main Admin"
      navItems={[
        { label: "Dashboard", href: "/" },
        { label: "Universities", href: "/universities" },
        { label: "Audit logs", href: "/audit-logs" },
      ]}
      LinkComponent={Link}
      activePath={pathname}
      user={{ name: "Peter", role: "MAIN_ADMIN" }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
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
