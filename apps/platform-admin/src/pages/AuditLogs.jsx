import { DataTable } from "@campus/ui"
import { USE_MOCK } from "../config.js"
import { MOCK_AUDIT_LOGS } from "../mock.js"

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
      <DataTable columns={columns} rows={USE_MOCK ? MOCK_AUDIT_LOGS : []} emptyMessage="No activity recorded yet" />
    </div>
  )
}
