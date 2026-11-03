import { api } from "./client.js"
import { getAccess, getRefresh, setTokens, clearTokens } from "./tokens.js"

export async function login(credentials) {
  const { data } = await api.post("/auth/login/", credentials)
  setTokens({ access: data.access, refresh: data.refresh })
  return data
}

export async function registerStudent(payload) {
  const { data } = await api.post("/auth/register/", payload)
  return data
}

export async function getMe() {
  const { data } = await api.get("/auth/me/")
  return data
}

export async function logout() {
  const refresh = getRefresh()
  try {
    if (refresh) await api.post("/auth/logout/", { refresh })
  } finally {
    clearTokens()
  }
}

export function isLoggedIn() {
  return !!getAccess()
}
