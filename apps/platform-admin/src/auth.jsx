import { createContext, useContext, useEffect, useState } from "react"
import { login as apiLogin, getMe, logout as apiLogout, isLoggedIn, setAuthFailureHandler } from "@campus/api"

const AuthContext = createContext(null)
const ALLOWED_ROLE = "MAIN_ADMIN"

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(isLoggedIn())

  useEffect(() => {
    setAuthFailureHandler(() => setUser(null))
    if (!isLoggedIn()) return
    getMe()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  async function signIn(credentials) {
    await apiLogin(credentials)
    const me = await getMe()
    if (me.role !== ALLOWED_ROLE) {
      await apiLogout().catch(() => {})
      throw { message: "This account is not a Main Admin." }
    }
    setUser(me)
  }

  async function signOut() {
    await apiLogout().catch(() => {})
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
