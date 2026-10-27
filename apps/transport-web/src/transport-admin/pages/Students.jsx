import { useState } from "react"
import { DataTable, Button, Input, Select, ConfirmDialog, StatusBadge, useToast } from "@campus/ui"

const SAMPLE = [
  { id: 1, name: "Student One", email: "s1@school.edu", status: "ACTIVE" },
  { id: 2, name: "Student Two", email: "s2@school.edu", status: "ACTIVE" },
  { id: 3, name: "Student Three", email: "s3@school.edu", status: "INACTIVE" },
]

const statusOptions = [
  { value: "", label: "All statuses" },
  { value: "ACTIVE", label: "Active" },
  { value: "INACTIVE", label: "Inactive" },
]

export default function Students() {
  const toast = useToast()
  const [rows, setRows] = useState(SAMPLE)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [target, setTarget] = useState(null)

  function confirmToggle() {
    const next = target.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"
    setRows(rows.map((r) => (r.id === target.id ? { ...r, status: next } : r)))
    toast.show("Student " + next.toLowerCase(), "info")
    setTarget(null)
  }

  const shown = rows.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) &&
      (status === "" || r.status === status)
  )

  const columns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <Button variant={r.status === "ACTIVE" ? "danger" : "secondary"} onClick={() => setTarget(r)}>
          {r.status === "ACTIVE" ? "Deactivate" : "Activate"}
        </Button>
      ),
    },
  ]

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Students</h1>
      <DataTable
        columns={columns}
        rows={shown}
        emptyMessage="No students found"
        filters={
          <>
            <Input placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} className="w-64" />
            <Select options={statusOptions} value={status} onChange={(e) => setStatus(e.target.value)} />
          </>
        }
      />
      <ConfirmDialog
        open={!!target}
        onClose={() => setTarget(null)}
        onConfirm={confirmToggle}
        title="Change student status?"
        message="This changes whether the student can use the app."
        confirmText="Confirm"
      />
    </div>
  )
}
