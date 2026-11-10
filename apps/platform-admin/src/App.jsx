import { Link, Navigate, Routes, Route, useLocation } from "react-router-dom"
import { AdminLayout, ToastProvider, Loading } from "@campus/ui"
import { AuthProvider, useAuth } from "./auth.jsx"
import Login from "./pages/Login.jsx"
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
  const { user, signOut } = useAuth()
  return (
    <AdminLayout
      appName="Main Admin"
      navItems={navItems}
      LinkComponent={Link}
      activePath={pathname}
      user={{ name: user.username, role: user.role }}
      onLogout={signOut}
    >
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="universities" element={<Universities />} />
        <Route path="users" element={<Users />} />
        <Route path="invitations" element={<Invitations />} />
        <Route path="audit-logs" element={<AuditLogs />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </AdminLayout>
  )
}

function RequireAuth({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <Loading />
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<RequireAuth><Shell /></RequireAuth>} />
        </Routes>
      </ToastProvider>
    </AuthProvider>
  )
}
