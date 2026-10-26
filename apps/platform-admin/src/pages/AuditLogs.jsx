import { DataTable } from "@campus/ui"

const columns = [
  { key: "actor", header: "Who" },
  { key: "action", header: "Action" },
  { key: "target", header: "Target" },
  { key: "time", header: "When" },
]

export default function AuditLogs() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Audit logs</h1>
      <DataTable columns={columns} rows={[]} emptyMessage="No activity recorded yet" />
    </div>
  )
}
