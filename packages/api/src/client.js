import axios from "axios"
import { getAccess, getRefresh, setTokens, clearTokens } from "./tokens.js"
import { toApiError } from "./errors.js"

const baseURL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1"

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
})

let onAuthFailure = null
export function setAuthFailureHandler(fn) {
  onAuthFailure = fn
}

api.interceptors.request.use((config) => {
  const token = getAccess()
  if (token) config.headers.Authorization = "Bearer " + token
  return config
})

let refreshing = null

async function refreshAccess() {
  const refresh = getRefresh()
  if (!refresh) throw new Error("No refresh token")
  const res = await axios.post(baseURL + "/auth/token/refresh/", { refresh })
  setTokens({ access: res.data.access, refresh: res.data.refresh })
  return res.data.access
}

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config
    const status = error.response?.status
    const url = (original && original.url) || ""
    const isAuthCall = url.includes("/auth/login/") || url.includes("/auth/token/refresh/")

    if (status === 401 && original && !original._retry && !isAuthCall) {
      original._retry = true
      try {
        refreshing = refreshing || refreshAccess().finally(() => { refreshing = null })
        const access = await refreshing
        original.headers.Authorization = "Bearer " + access
        return api(original)
      } catch {
        clearTokens()
        if (onAuthFailure) onAuthFailure()
      }
    }
    return Promise.reject(toApiError(error))
  }
)
