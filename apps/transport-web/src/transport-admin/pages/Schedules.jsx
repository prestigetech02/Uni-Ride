import { useState } from "react"
import { DataTable, Button, Input, Select, Modal, ConfirmDialog, StatusBadge, useToast } from "@campus/ui"

const routeOptions = [
  { value: "", label: "Select route" },
  { value: "Main Gate to Hostel", label: "Main Gate to Hostel" },
  { value: "Hostel to Faculty", label: "Hostel to Faculty" },
]
const vehicleOptions = [
  { value: "", label: "Select vehicle" },
  { value: "LAG-101-AA", label: "LAG-101-AA" },
  { value: "LAG-202-BB", label: "LAG-202-BB" },
]
const driverOptions = [
  { value: "", label: "Select driver" },
  { value: "Driver One", label: "Driver One" },
  { value: "Driver Two", label: "Driver Two" },
]

const EMPTY = { route: "", vehicle: "", driver: "", date: "", time: "" }

export default function Schedules() {
  const toast = useToast()
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [target, setTarget] = useState(null)

  function change(field, value) {
    setForm({ ...form, [field]: value })
  }

  function submit(e) {
    e.preventDefault()
    const next = {}
    for (const key of Object.keys(EMPTY)) {
      if (!form[key]) next[key] = "Required"
    }
    setErrors(next)
    if (Object.keys(next).length) return
    setRows([...rows, { id: Date.now(), ...form, status: "SCHEDULED" }])
    toast.show("Schedule created", "success")
    setForm(EMPTY)
    setOpen(false)
  }

  function cancelTrip() {
    setRows(rows.map((r) => (r.id === target.id ? { ...r, status: "CANCELLED" } : r)))
    toast.show("Trip cancelled", "error")
    setTarget(null)
  }

  const columns = [
    { key: "route", header: "Route" },
    { key: "vehicle", header: "Vehicle" },
    { key: "driver", header: "Driver" },
    { key: "when", header: "Departure", render: (r) => r.date + " " + r.time },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    {
      key: "actions",
      header: "Actions",
      render: (r) =>
        r.status === "SCHEDULED" ? (
          <Button variant="danger" onClick={() => setTarget(r)}>Cancel trip</Button>
        ) : (
          <span className="text-gray-400">-</span>
        ),
    },
  ]

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Schedules</h1>
        <Button onClick={() => setOpen(true)}>New schedule</Button>
      </div>

      <DataTable columns={columns} rows={rows} emptyMessage="No schedules yet" />

      <Modal open={open} onClose={() => setOpen(false)} title="New schedule">
        <form onSubmit={submit}>
          <Select label="Route" options={routeOptions} value={form.route} onChange={(e) => change("route", e.target.value)} />
          {errors.route && <p className="-mt-3 mb-3 text-xs text-red-600">{errors.route}</p>}
          <Select label="Vehicle" options={vehicleOptions} value={form.vehicle} onChange={(e) => change("vehicle", e.target.value)} />
          {errors.vehicle && <p className="-mt-3 mb-3 text-xs text-red-600">{errors.vehicle}</p>}
          <Select label="Driver" options={driverOptions} value={form.driver} onChange={(e) => change("driver", e.target.value)} />
          {errors.driver && <p className="-mt-3 mb-3 text-xs text-red-600">{errors.driver}</p>}
          <Input label="Date" type="date" value={form.date} onChange={(e) => change("date", e.target.value)} error={errors.date} />
          <Input label="Time" type="time" value={form.time} onChange={(e) => change("time", e.target.value)} error={errors.time} />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!target}
        onClose={() => setTarget(null)}
        onConfirm={cancelTrip}
        title="Cancel this trip?"
        message="Students with bookings on this trip will be affected."
        confirmText="Cancel trip"
      />
    </div>
  )
}
