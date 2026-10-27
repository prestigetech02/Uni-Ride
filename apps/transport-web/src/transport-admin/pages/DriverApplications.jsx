import { useState } from "react"
import { DataTable, Button, ConfirmDialog, StatusBadge, Select, useToast } from "@campus/ui"

const SAMPLE = [
  { id: 1, name: "Driver One", email: "one@school.edu", status: "PENDING" },
  { id: 2, name: "Driver Two", email: "two@school.edu", status: "PENDING" },
  { id: 3, name: "Driver Three", email: "three@school.edu", status: "APPROVED" },
]

const statusOptions = [
  { value: "", label: "All statuses" },
  { value: "PENDING", label: "Pending" },
  { value: "APPROVED", label: "Approved" },
  { value: "REJECTED", label: "Rejected" },
]

export default function DriverApplications() {
  const toast = useToast()
  const [rows, setRows] = useState(SAMPLE)
  const [filter, setFilter] = useState("")
  const [target, setTarget] = useState(null)

  function setStatus(id, status) {
    setRows(rows.map((r) => (r.id === id ? { ...r, status } : r)))
  }

  function approve(row) {
    setStatus(row.id, "APPROVED")
    toast.show("Driver approved", "success")
  }

  function reject() {
    setStatus(target.id, "REJECTED")
    toast.show("Driver rejected", "error")
    setTarget(null)
  }

  const shown = rows.filter((r) => filter === "" || r.status === filter)

  const columns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    {
      key: "actions",
      header: "Actions",
      render: (r) =>
        r.status === "PENDING" ? (
          <div className="flex gap-2">
            <Button onClick={() => approve(r)}>Approve</Button>
            <Button variant="danger" onClick={() => setTarget(r)}>Reject</Button>
          </div>
        ) : (
          <span className="text-gray-400">-</span>
        ),
    },
  ]

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Driver applications</h1>
      <DataTable
        columns={columns}
        rows={shown}
        emptyMessage="No applications found"
        filters={<Select options={statusOptions} value={filter} onChange={(e) => setFilter(e.target.value)} />}
      />
      <ConfirmDialog
        open={!!target}
        onClose={() => setTarget(null)}
        onConfirm={reject}
        title="Reject application?"
        message="The driver will be told their application was rejected."
        confirmText="Reject"
      />
    </div>
  )
}
