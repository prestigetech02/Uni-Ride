import { useEffect, useState } from "react"
import { DataTable, Button, Input, Select, Modal, ConfirmDialog, StatusBadge, useToast } from "@campus/ui"
import { listRoutes, createRoute, updateRoute, deleteRoute, createStop, deleteStop } from "../api.js"

const EMPTY_ROUTE = { name: "", code: "", description: "", status: "ACTIVE" }
const EMPTY_STOP = { name: "", sequence: "1", is_pickup_point: true, is_dropoff_point: true }

const statusOptions = [
  { value: "ACTIVE", label: "Active" },
  { value: "INACTIVE", label: "Inactive" },
  { value: "SUSPENDED", label: "Suspended" },
]

function fieldErrors(err) {
  const out = {}
  if (err.data && typeof err.data === "object") {
    for (const [key, value] of Object.entries(err.data)) {
      out[key] = Array.isArray(value) ? value[0] : String(value)
    }
  }
  return out
}

export default function RoutesPage() {
  const toast = useToast()
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)
  const [routeOpen, setRouteOpen] = useState(false)
  const [routeForm, setRouteForm] = useState(EMPTY_ROUTE)
  const [routeErrors, setRouteErrors] = useState({})
  const [saving, setSaving] = useState(false)
  const [toggleTarget, setToggleTarget] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [stopsId, setStopsId] = useState(null)
  const [stopForm, setStopForm] = useState(EMPTY_STOP)
  const [stopErrors, setStopErrors] = useState({})
  const [stopTarget, setStopTarget] = useState(null)

  async function load(quiet) {
    if (!quiet) setLoading(true)
    setLoadError(null)
    try {
      setRows(await listRoutes())
    } catch (err) {
      setLoadError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function submitRoute(e) {
    e.preventDefault()
    const next = {}
    if (!routeForm.name.trim()) next.name = "Route name is required"
    if (!routeForm.code.trim()) next.code = "Code is required"
    setRouteErrors(next)
    if (Object.keys(next).length) return
    const payload = { name: routeForm.name.trim(), code: routeForm.code.trim(), status: routeForm.status }
    if (routeForm.description.trim()) payload.description = routeForm.description.trim()
    setSaving(true)
    try {
      await createRoute(payload)
      toast.show("Route added", "success")
      setRouteForm(EMPTY_ROUTE)
      setRouteOpen(false)
      load(true)
    } catch (err) {
      if (err.kind === "validation") setRouteErrors(fieldErrors(err))
      else toast.show(err.message, "error")
    } finally {
      setSaving(false)
    }
  }

  async function confirmToggle() {
    const next = toggleTarget.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"
    try {
      await updateRoute(toggleTarget.id, { status: next })
      toast.show("Route set to " + next.toLowerCase(), "info")
      load(true)
    } catch (err) {
      toast.show(err.message, "error")
    } finally {
      setToggleTarget(null)
    }
  }

  async function confirmDelete() {
    try {
      await deleteRoute(deleteTarget.id)
      toast.show("Route deleted", "success")
      load(true)
    } catch (err) {
      toast.show(err.message, "error")
    } finally {
      setDeleteTarget(null)
    }
  }

  function openStops(route) {
    setStopsId(route.id)
    setStopErrors({})
    setStopForm({ ...EMPTY_STOP, sequence: String((route.stops ? route.stops.length : 0) + 1) })
  }

  async function submitStop(e) {
    e.preventDefault()
    const next = {}
    if (!stopForm.name.trim()) next.name = "Stop name is required"
    if (!(Number(stopForm.sequence) > 0)) next.sequence = "Enter the stop order (1, 2, 3...)"
    setStopErrors(next)
    if (Object.keys(next).length) return
    setSaving(true)
    try {
      await createStop({
        route_id: stopsId,
        name: stopForm.name.trim(),
        sequence: Number(stopForm.sequence),
        is_pickup_point: stopForm.is_pickup_point,
        is_dropoff_point: stopForm.is_dropoff_point,
      })
      toast.show("Stop added", "success")
      setStopForm({ ...EMPTY_STOP, sequence: String(Number(stopForm.sequence) + 1) })
      load(true)
    } catch (err) {
      if (err.kind === "validation") setStopErrors(fieldErrors(err))
      else toast.show(err.message, "error")
    } finally {
      setSaving(false)
    }
  }

  async function confirmStopDelete() {
    try {
      await deleteStop(stopTarget.id)
      toast.show("Stop deleted", "success")
      load(true)
    } catch (err) {
      toast.show(err.message, "error")
    } finally {
      setStopTarget(null)
    }
  }

  const current = rows.find((r) => r.id === stopsId)
  const currentStops = current ? [...(current.stops || [])].sort((a, b) => a.sequence - b.sequence) : []

  const columns = [
    { key: "name", header: "Route" },
    { key: "code", header: "Code" },
    { key: "count", header: "Stops", render: (r) => (r.stops ? r.stops.length : 0) },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => openStops(r)}>Stops</Button>
          <Button variant="secondary" onClick={() => setToggleTarget(r)}>
            {r.status === "ACTIVE" ? "Deactivate" : "Activate"}
          </Button>
          <Button variant="danger" onClick={() => setDeleteTarget(r)}>Delete</Button>
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Routes and stops</h1>
        <Button onClick={() => setRouteOpen(true)}>Add route</Button>
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        loading={loading}
        error={loadError}
        onRetry={() => load()}
        emptyMessage="No routes yet"
      />

      <Modal open={routeOpen} onClose={() => setRouteOpen(false)} title="Add route">
        <form onSubmit={submitRoute}>
          <Input label="Route name" value={routeForm.name} onChange={(e) => setRouteForm({ ...routeForm, name: e.target.value })} error={routeErrors.name} />
          <Input label="Code" value={routeForm.code} onChange={(e) => setRouteForm({ ...routeForm, code: e.target.value })} error={routeErrors.code} placeholder="e.g. R1" />
          <Input label="Description (optional)" value={routeForm.description} onChange={(e) => setRouteForm({ ...routeForm, description: e.target.value })} error={routeErrors.description} />
          <Select label="Status" options={statusOptions} value={routeForm.status} onChange={(e) => setRouteForm({ ...routeForm, status: e.target.value })} />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setRouteOpen(false)}>Cancel</Button>
            <Button type="submit" loading={saving}>Save</Button>
          </div>
        </form>
      </Modal>

      <Modal open={!!current} onClose={() => setStopsId(null)} title={current ? "Stops for " + current.name : "Stops"}>
        {currentStops.length === 0 ? (
          <p className="mb-4 text-sm text-gray-500">No stops yet. Add the first one below.</p>
        ) : (
          <ul className="mb-4 divide-y divide-gray-100 text-sm">
            {currentStops.map((s) => (
              <li key={s.id} className="flex items-center justify-between py-2">
                <span>
                  {s.sequence}. {s.name}
                  <span className="ml-2 text-xs text-gray-500">
                    {s.is_pickup_point ? "Pickup " : ""}{s.is_dropoff_point ? "Drop-off" : ""}
                  </span>
                </span>
                <button className="text-red-600 hover:underline" onClick={() => setStopTarget(s)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        <form onSubmit={submitStop} className="border-t border-gray-200 pt-4">
          <Input label="Stop name" value={stopForm.name} onChange={(e) => setStopForm({ ...stopForm, name: e.target.value })} error={stopErrors.name} placeholder="e.g. Main Gate" />
          <Input label="Order on the route" type="number" value={stopForm.sequence} onChange={(e) => setStopForm({ ...stopForm, sequence: e.target.value })} error={stopErrors.sequence} />
          <label className="mb-2 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={stopForm.is_pickup_point} onChange={(e) => setStopForm({ ...stopForm, is_pickup_point: e.target.checked })} />
            Pickup point
          </label>
          <label className="mb-4 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={stopForm.is_dropoff_point} onChange={(e) => setStopForm({ ...stopForm, is_dropoff_point: e.target.checked })} />
            Drop-off point
          </label>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setStopsId(null)}>Close</Button>
            <Button type="submit" loading={saving}>Add stop</Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!toggleTarget}
        onClose={() => setToggleTarget(null)}
        onConfirm={confirmToggle}
        title="Change route status?"
        message="Schedules using this route may be affected."
        confirmText="Confirm"
      />
      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
        title="Delete route?"
        message="This permanently deletes the route. It may be refused if trips use it."
        confirmText="Delete"
      />
      <ConfirmDialog
        open={!!stopTarget}
        onClose={() => setStopTarget(null)}
        onConfirm={confirmStopDelete}
        title="Delete stop?"
        message="This removes the stop from the route."
        confirmText="Delete"
      />
    </div>
  )
}
