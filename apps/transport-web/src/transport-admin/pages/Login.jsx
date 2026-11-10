import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Input } from "@campus/ui"
import { useAuth } from "../auth.jsx"

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    if (!username || !password) {
      setError("Enter your username and password")
      return
    }
    setBusy(true)
    setError("")
    try {
      await signIn({ username, password })
      navigate("/transport-admin")
    } catch (err) {
      setError(err.message || "Login failed")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6">
        <h1 className="mb-1 text-xl font-bold">Transport Admin</h1>
        <p className="mb-4 text-sm text-gray-500">Sign in to continue</p>
        <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
        <Button type="submit" loading={busy} className="w-full">Sign in</Button>
      </form>
    </div>
  )
}
