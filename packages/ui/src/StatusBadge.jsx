const colors = {
  ACTIVE: "bg-green-100 text-green-800",
  APPROVED: "bg-green-100 text-green-800",
  CONFIRMED: "bg-green-100 text-green-800",
  RESOLVED: "bg-green-100 text-green-800",
  PENDING: "bg-yellow-100 text-yellow-800",
  SCHEDULED: "bg-blue-100 text-blue-800",
  OPEN: "bg-yellow-100 text-yellow-800",
  REJECTED: "bg-red-100 text-red-800",
  CANCELLED: "bg-red-100 text-red-800",
  INACTIVE: "bg-gray-200 text-gray-700",
}

export function StatusBadge({ status }) {
  const style = colors[status] || "bg-gray-100 text-gray-700"
  return (
    <span className={"rounded-full px-2 py-1 text-xs font-medium " + style}>
      {status}
    </span>
  )
}
