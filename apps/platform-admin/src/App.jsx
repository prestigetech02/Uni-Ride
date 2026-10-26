import { useState } from "react"
import {
  AdminLayout, DataTable, Button, Input, ConfirmDialog,
  ToastProvider, useToast,
} from "@campus/ui"

const ALL_ROWS = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `Driver ${i + 1}`,
  email: `driver${i + 1}@school.edu`,
  status: i % 3 === 0 ? "PENDING" : i % 3 === 1 ? "APPROVED" : "REJECTED",
}))

const PAGE_SIZE = 5

function Demo() {
  const toast = useToast()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [target, setTarget] = useState(null)

  const filtered = ALL_ROWS.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  )
  const pageCount = Math.ceil(filtered.length / PAGE_SIZE)
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const columns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "status", header: "Status" },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <Button variant="danger" onClick={() => setTarget(row)}>Reject</Button>
      ),
    },
  ]

  return (
    <AdminLayout
      appName="Main Admin"
      navItems={[
        { label: "Dashboard", href: "/" },
        { label: "Universities", href: "/universities" },
        { label: "Audit logs", href: "/audit-logs" },
      ]}
      activePath="/"
      user={{ name: "Peter", role: "MAIN_ADMIN" }}
      onLogout={() => toast.show("Logged out", "info")}
    >
      <h1 className="mb-4 text-2xl font-bold">Driver applications</h1>
      <DataTable
        columns={columns}
        rows={rows}
        page={page}
        pageCount={pageCount}
        onPageChange={setPage}
        filters={
          <Input
            placeholder="Search by name"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="w-64"
          />
        }
      />
      <ConfirmDialog
        open={!!target}
        onClose={() => setTarget(null)}
        onConfirm={() => {
          toast.show(`${target.name} rejected`, "error")
          setTarget(null)
        }}
        title="Reject application?"
        message={target ? `This will reject ${target.name}.` : ""}
        confirmText="Reject"
      />
    </AdminLayout>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  )
}