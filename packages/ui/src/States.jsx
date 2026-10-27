export function Loading({ text = "Loading..." }) {
  return <div className="p-8 text-center text-gray-500">{text}</div>
}

export function EmptyState({ title = "Nothing here yet", message }) {
  return (
    <div className="p-8 text-center">
      <p className="font-medium text-gray-900">{title}</p>
      {message && <p className="mt-1 text-sm text-gray-500">{message}</p>}
    </div>
  )
}

export function ErrorState({ message = "Something went wrong", onRetry }) {
  return (
    <div className="p-8 text-center">
      <p className="font-medium text-red-600">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="mt-3 text-sm text-blue-600 underline">Try again</button>
      )}
    </div>
  )
}
