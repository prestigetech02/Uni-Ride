const styles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  danger: "bg-red-600 text-white hover:bg-red-700",
}

export function Button({ variant = "primary", loading = false, disabled, children, className = "", ...props }) {
  return (
    <button
      disabled={disabled || loading}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </button>
  )
}
