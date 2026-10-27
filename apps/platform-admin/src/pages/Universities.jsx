import { useState } from "react"
import { DataTable, Button, Input, Modal, ConfirmDialog, useToast } from "@campus/ui"

export default function Universities() {
  const toast = useToast()
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [target, setTarget] = useState(null)

  function submit(e) {
    e.preventDefault()
    if (!name.trim()) {
      setError("University name is required")
      return
    }
    setRows([...rows, { id: Date.now(), name: name.trim(), status: "ACTIVE" }])
    toast.show("University added", "success")
    setName("")
    setError("")
    setOpen(false)
  }

  function remove() {
    setRows(rows.filter((r) => r.id !== target.id))
    toast.show("University removed", "error")
    setTarget(null)
  }

  const columns = [
    { key: "name", header: "University" },
    { key: "status", header: "Status" },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <Button variant="danger" onClick={() => setTarget(row)}>Remove</Button>
      ),
    },
  ]

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Universities</h1>
        <Button onClick={() => setOpen(true)}>Add university</Button>
      </div>

      <DataTable columns={columns} rows={rows} emptyMessage="No universities yet" />

      <Modal open={open} onClose={() => setOpen(false)} title="Add university">
        <form onSubmit={submit}>
          <Input
            label="University name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={error}
            placeholder="e.g. University of Lagos"
          />
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
        title="Remove university?"
        message="This will remove the university from the list."
        confirmText="Remove"
      />
    </div>
  )
}
