const KINDS = {
  400: "validation",
  401: "unauthorized",
  403: "forbidden",
  404: "not_found",
  409: "conflict",
}

export function toApiError(error) {
  if (!error.response) {
    return { kind: "network", status: 0, message: "Cannot reach the server. Check your connection.", data: null }
  }
  const { status, data } = error.response
  const kind = KINDS[status] || (status >= 500 ? "server" : "error")
  const fallback = status >= 500 ? "Server error. Please try again." : "Request failed."
  const message = (data && (data.detail || data.message)) || fallback
  return { kind, status, message, data }
}
