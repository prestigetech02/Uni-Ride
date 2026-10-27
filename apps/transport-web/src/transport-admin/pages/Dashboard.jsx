export default function Dashboard() {
  const cards = ["Pending driver applications", "Active trips today", "Open incidents"]
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-3">
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
