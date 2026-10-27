import { useState } from "react"
import { DataTable, Button, Input, Modal, ConfirmDialog, StatusBadge, useToast } from "@campus/ui"

export default function Vehicles() {
  const toast = useToast()
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [plate, setPlate] = useState("")
  const [capacity, setCapacity] = useState("")
  const [errors, setErrors] = useState({})
  const [target, setTarget] = useState(null)

  function submit(e) {
    e.preventDefault()
    const next = {}
    if (!plate.trim()) next.plate = "Plate number is required"
    if (!(Number(capacity) > 0)) next.capacity = "Enter a seat capacity above 0"
    setErrors(next)
    if (Object.keys(next).length) return
    setRows([...rows, { id: Date.now(), plate: plate.trim(), capacity: Number(capacity), status: "ACTIVE" }])
    toast.show("Vehicle added", "success")
    setPlate("")
    setCapacity("")
    setOpen(false)
  }

  function remove() {
    setRows(rows.filter((r) => r.id !== target.id))
    toast.show("Vehicle removed", "error")
    setTarget(null)
  }

  const columns = [
    { key: "plate", header: "Plate number" },
    { key: "capacity", header: "Seats" },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    { key: "actions", header: "Actions", render: (r) => <Button variant="danger" onClick={() => setTarget(r)}>Remove</Button> },
  ]

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Vehicles</h1>
        <Button onClick={() => setOpen(true)}>Add vehicle</Button>
      </div>

      <DataTable columns={columns} rows={rows} emptyMessage="No vehicles yet" />

      <Modal open={open} onClose={() => setOpen(false)} title="Add vehicle">
        <form onSubmit={submit}>
          <Input label="Plate number" value={plate} onChange={(e) => setPlate(e.target.value)} error={errors.plate} />
          <Input label="Seat capacity" type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} error={errors.capacity} />
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
        title="Remove vehicle?"
        message="This vehicle will no longer be available for schedules."
        confirmText="Remove"
      />
    </div>
  )
}
