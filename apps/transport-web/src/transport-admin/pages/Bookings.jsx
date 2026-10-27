import { useState } from "react"
import { DataTable, Input, Select, StatusBadge } from "@campus/ui"

const SAMPLE = [
  { id: 1, student: "Student One", trip: "Main Gate to Hostel 08:00", status: "CONFIRMED" },
  { id: 2, student: "Student Two", trip: "Main Gate to Hostel 08:00", status: "CANCELLED" },
  { id: 3, student: "Student Three", trip: "Hostel to Faculty 09:30", status: "CONFIRMED" },
]

const trips = ["", ...new Set(SAMPLE.map((r) => r.trip))]
const tripOptions = trips.map((t) => ({ value: t, label: t || "All trips" }))
const statusOptions = [
  { value: "", label: "All statuses" },
  { value: "CONFIRMED", label: "Confirmed" },
  { value: "CANCELLED", label: "Cancelled" },
]

export default function Bookings() {
  const [search, setSearch] = useState("")
  const [trip, setTrip] = useState("")
  const [status, setStatus] = useState("")

  const shown = SAMPLE.filter(
    (r) =>
      r.student.toLowerCase().includes(search.toLowerCase()) &&
      (trip === "" || r.trip === trip) &&
      (status === "" || r.status === status)
  )
  const confirmed = shown.filter((r) => r.status === "CONFIRMED").length

  const columns = [
    { key: "student", header: "Student" },
    { key: "trip", header: "Trip" },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
  ]

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Bookings and passengers</h1>
      <p className="mb-4 text-sm text-gray-500">Confirmed passengers in this view: {confirmed}</p>
      <DataTable
        columns={columns}
        rows={shown}
        emptyMessage="No bookings found"
        filters={
          <>
            <Input placeholder="Search student" value={search} onChange={(e) => setSearch(e.target.value)} className="w-56" />
            <Select options={tripOptions} value={trip} onChange={(e) => setTrip(e.target.value)} />
            <Select options={statusOptions} value={status} onChange={(e) => setStatus(e.target.value)} />
          </>
        }
      />
    </div>
  )
}
