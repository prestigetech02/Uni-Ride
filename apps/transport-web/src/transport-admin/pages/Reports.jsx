import { useState } from "react"
import { Input, Button, useToast } from "@campus/ui"

export default function Reports() {
  const toast = useToast()
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [error, setError] = useState("")

  function generate(e) {
    e.preventDefault()
    if (!from || !to) {
      setError("Choose both dates")
      return
    }
    if (from > to) {
      setError("Start date must be before end date")
      return
    }
    setError("")
    toast.show("Report will load from the API once connected", "info")
  }

  const cards = ["Total trips", "Total bookings", "Cancelled bookings", "Incidents"]

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Reports</h1>
      <form onSubmit={generate} className="mb-6 flex flex-wrap items-end gap-3 rounded-xl border border-gray-200 bg-white p-4">
        <Input label="From" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        <Input label="To" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        <div className="mb-4"><Button type="submit">Generate</Button></div>
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      </form>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-500">{c}</p>
            <p className="mt-1 text-2xl font-bold">--</p>
          </div>
        ))}
      </div>
    </div>
  )
}
