export function Select({ label, options = [], className = "", ...props }) {
  return (
    <div className="mb-4">
      {label && <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>}
      <select
        className={"w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 " + className}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}
