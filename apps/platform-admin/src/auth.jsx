import { createContext, useContext, useEffect, useState } from "react"
import { login as apiLogin, getMe, logout as apiLogout, isLoggedIn, setAuthFailureHandler } from "@campus/api"
import { USE_MOCK } from "./config.js"

const AuthContext = createContext(null)
const ALLOWED_ROLE = "MAIN_ADMIN"
const MOCK_USER = { username: "demo.admin", role: "MAIN_ADMIN" }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(USE_MOCK ? MOCK_USER : null)
  const [loading, setLoading] = useState(USE_MOCK ? false : isLoggedIn())

  useEffect(() => {
    if (USE_MOCK) return
    setAuthFailureHandler(() => setUser(null))
    if (!isLoggedIn()) return
    getMe()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  async function signIn(credentials) {
    if (USE_MOCK) {
      setUser(MOCK_USER)
      return
    }
    await apiLogin(credentials)
    const me = await getMe()
    if (me.role !== ALLOWED_ROLE) {
      await apiLogout().catch(() => {})
      throw { message: "This account is not a Main Admin." }
    }
    setUser(me)
  }

  async function signOut() {
    if (!USE_MOCK) await apiLogout().catch(() => {})
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
