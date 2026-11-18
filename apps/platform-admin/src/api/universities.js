import { api } from "@campus/api"
import { USE_MOCK } from "../config.js"
import { MOCK_UNIVERSITIES } from "../mock.js"

let store = MOCK_UNIVERSITIES.map((u) => ({ ...u }))

export async function listUniversities() {
  if (USE_MOCK) return store.map((u) => ({ ...u }))
  const { data } = await api.get("/universities/")
  return Array.isArray(data) ? data : data.results || []
}

export async function createUniversity(payload) {
  if (USE_MOCK) {
    const item = { id: Date.now(), email: "", phone_number: "", address: "", ...payload }
    store = [...store, item]
    return item
  }
  const { data } = await api.post("/universities/", payload)
  return data
}

export async function updateUniversity(code, payload) {
  if (USE_MOCK) {
    store = store.map((u) => (u.code === code ? { ...u, ...payload } : u))
    return store.find((u) => u.code === code)
  }
  const { data } = await api.patch("/universities/" + code + "/", payload)
  return data
}
