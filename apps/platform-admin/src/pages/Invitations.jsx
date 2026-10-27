import { useState } from "react"
import { DataTable, Button, Input, Modal, ConfirmDialog, StatusBadge, useToast } from "@campus/ui"

export default function Invitations() {
  const toast = useToast()
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [target, setTarget] = useState(null)

  function submit(e) {
    e.preventDefault()
    if (!email.includes("@")) {
      setError("Enter a valid email address")
      return
    }
    setRows([...rows, { id: Date.now(), email: email.trim(), status: "PENDING" }])
    toast.show("Invitation sent", "success")
    setEmail("")
    setError("")
    setOpen(false)
  }

  function revoke() {
    setRows(rows.filter((r) => r.id !== target.id))
    toast.show("Invitation revoked", "error")
    setTarget(null)
  }

  const columns = [
    { key: "email", header: "Email" },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    { key: "actions", header: "Actions", render: (r) => <Button variant="danger" onClick={() => setTarget(r)}>Revoke</Button> },
  ]

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin invitations</h1>
        <Button onClick={() => setOpen(true)}>Invite admin</Button>
      </div>

      <DataTable columns={columns} rows={rows} emptyMessage="No invitations yet" />

      <Modal open={open} onClose={() => setOpen(false)} title="Invite admin">
        <form onSubmit={submit}>
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} error={error} placeholder="admin@university.edu" />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Send invite</Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!target}
        onClose={() => setTarget(null)}
        onConfirm={revoke}
        title="Revoke invitation?"
        message="This admin will no longer be able to join."
        confirmText="Revoke"
      />
    </div>
  )
}
