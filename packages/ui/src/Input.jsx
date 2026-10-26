export function Input({ label, error, id, className = "", ref, ...props }) {
  const inputId = id || props.name
  return (
    <div className="mb-4">
      {label && <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={inputId}
        ref={ref}
        className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}
