import { useState } from "react"
import { DataTable, Input, Select, StatusBadge } from "@campus/ui"

const roleOptions = [
  { value: "", label: "All roles" },
  { value: "STUDENT", label: "Student" },
  { value: "DRIVER", label: "Driver" },
  { value: "TRANSPORT_ADMIN", label: "Transport Admin" },
]

export default function Users() {
  const [rows] = useState([])
  const [search, setSearch] = useState("")
  const [role, setRole] = useState("")

  const shown = rows.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) &&
      (role === "" || r.role === role)
  )

  const columns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "role", header: "Role" },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
  ]

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Users</h1>
      <DataTable
        columns={columns}
        rows={shown}
        emptyMessage="No users found"
        filters={
          <>
            <Input placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} className="w-64" />
            <Select options={roleOptions} value={role} onChange={(e) => setRole(e.target.value)} />
          </>
        }
      />
    </div>
  )
}
