const ACCESS = "ctl_access"
const REFRESH = "ctl_refresh"

export function getAccess() {
  try { return sessionStorage.getItem(ACCESS) } catch { return null }
}

export function getRefresh() {
  try { return sessionStorage.getItem(REFRESH) } catch { return null }
}

export function setTokens({ access, refresh }) {
  try {
    if (access) sessionStorage.setItem(ACCESS, access)
    if (refresh) sessionStorage.setItem(REFRESH, refresh)
  } catch { /* storage unavailable */ }
}

export function clearTokens() {
  try {
    sessionStorage.removeItem(ACCESS)
    sessionStorage.removeItem(REFRESH)
  } catch { /* storage unavailable */ }
}
