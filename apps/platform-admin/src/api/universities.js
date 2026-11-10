import { api } from "@campus/api"

export async function listUniversities() {
  const { data } = await api.get("/universities/")
  return Array.isArray(data) ? data : data.results || []
}

export async function createUniversity(payload) {
  const { data } = await api.post("/universities/", payload)
  return data
}

export async function updateUniversity(code, payload) {
  const { data } = await api.patch("/universities/" + code + "/", payload)
  return data
}
