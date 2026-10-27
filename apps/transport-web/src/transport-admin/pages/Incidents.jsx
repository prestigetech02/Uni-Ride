import { useState } from "react"
import { DataTable, Button, Select, ConfirmDialog, StatusBadge, useToast } from "@campus/ui"

const SAMPLE = [
  { id: 1, driver: "Driver One", trip: "Main Gate to Hostel 08:00", issue: "Flat tyre", status: "OPEN" },
  { id: 2, driver: "Driver Two", trip: "Hostel to Faculty 09:30", issue: "Road blocked", status: "RESOLVED" },
]

const statusOptions = [
  { value: "", label: "All statuses" },
  { value: "OPEN", label: "Open" },
  { value: "RESOLVED", label: "Resolved" },
]

export default function Incidents() {
  const toast = useToast()
  const [rows, setRows] = useState(SAMPLE)
  const [filter, setFilter] = useState("")
  const [target, setTarget] = useState(null)

  function resolve() {
    setRows(rows.map((r) => (r.id === target.id ? { ...r, status: "RESOLVED" } : r)))
    toast.show("Incident marked as resolved", "success")
    setTarget(null)
  }

  const shown = rows.filter((r) => filter === "" || r.status === filter)

  const columns = [
    { key: "driver", header: "Reported by" },
    { key: "trip", header: "Trip" },
    { key: "issue", header: "Issue" },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    {
      key: "actions",
      header: "Actions",
      render: (r) =>
        r.status === "OPEN" ? (
          <Button onClick={() => setTarget(r)}>Resolve</Button>
        ) : (
          <span className="text-gray-400">-</span>
        ),
    },
  ]

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Incidents</h1>
      <DataTable
        columns={columns}
        rows={shown}
        emptyMessage="No incidents reported"
        filters={<Select options={statusOptions} value={filter} onChange={(e) => setFilter(e.target.value)} />}
      />
      <ConfirmDialog
        open={!!target}
        onClose={() => setTarget(null)}
        onConfirm={resolve}
        title="Mark as resolved?"
        message="Confirm that this incident has been handled."
        confirmText="Resolve"
      />
    </div>
  )
}
