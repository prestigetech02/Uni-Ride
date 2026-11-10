import { api } from "@campus/api"

function asList(data) {
  return Array.isArray(data) ? data : data.results || []
}

export async function listRoutes() {
  const { data } = await api.get("/routes/routes/")
  return asList(data)
}

export async function createRoute(payload) {
  const { data } = await api.post("/routes/routes/", payload)
  return data
}

export async function updateRoute(id, payload) {
  const { data } = await api.patch("/routes/routes/" + id + "/", payload)
  return data
}

export async function deleteRoute(id) {
  await api.delete("/routes/routes/" + id + "/")
}

export async function createStop(payload) {
  const { data } = await api.post("/routes/stops/", payload)
  return data
}

export async function deleteStop(id) {
  await api.delete("/routes/stops/" + id + "/")
}
