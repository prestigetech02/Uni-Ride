import { useState } from "react"
import { DataTable, Button, Input, Modal, ConfirmDialog, useToast } from "@campus/ui"

export default function RoutesPage() {
  const toast = useToast()
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [stops, setStops] = useState("")
  const [errors, setErrors] = useState({})
  const [target, setTarget] = useState(null)

  function submit(e) {
    e.preventDefault()
    const list = stops.split(",").map((s) => s.trim()).filter(Boolean)
    const next = {}
    if (!name.trim()) next.name = "Route name is required"
    if (list.length < 2) next.stops = "Enter at least two stops, separated by commas"
    setErrors(next)
    if (Object.keys(next).length) return
    setRows([...rows, { id: Date.now(), name: name.trim(), stops: list }])
    toast.show("Route added", "success")
    setName("")
    setStops("")
    setOpen(false)
  }

  function remove() {
    setRows(rows.filter((r) => r.id !== target.id))
    toast.show("Route removed", "error")
    setTarget(null)
  }

  const columns = [
    { key: "name", header: "Route" },
    { key: "count", header: "Stops", render: (r) => r.stops.length },
    { key: "stops", header: "Stop list", render: (r) => r.stops.join(" > ") },
    { key: "actions", header: "Actions", render: (r) => <Button variant="danger" onClick={() => setTarget(r)}>Remove</Button> },
  ]

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Routes and stops</h1>
        <Button onClick={() => setOpen(true)}>Add route</Button>
      </div>

      <DataTable columns={columns} rows={rows} emptyMessage="No routes yet" />

      <Modal open={open} onClose={() => setOpen(false)} title="Add route">
        <form onSubmit={submit}>
          <Input label="Route name" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} placeholder="e.g. Main Gate to Hostel" />
          <Input label="Stops (in order)" value={stops} onChange={(e) => setStops(e.target.value)} error={errors.stops} placeholder="Main Gate, Library, Hostel" />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!target}
        onClose={() => setTarget(null)}
        onConfirm={remove}
        title="Remove route?"
        message="Schedules using this route will be affected."
        confirmText="Remove"
      />
    </div>
  )
}
