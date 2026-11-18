import { USE_MOCK } from "../config.js"
import { MOCK_UNIVERSITIES, MOCK_USERS, MOCK_INVITATIONS } from "../mock.js"

export default function Dashboard() {
  const cards = [
    { label: "Universities", value: USE_MOCK ? MOCK_UNIVERSITIES.length : "--" },
    { label: "Users", value: USE_MOCK ? MOCK_USERS.length : "--" },
    { label: "Pending invitations", value: USE_MOCK ? MOCK_INVITATIONS.filter((i) => i.status === "PENDING").length : "--" },
  ]
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c.label} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-500">{c.label}</p>
            <p className="mt-1 text-2xl font-bold">{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
