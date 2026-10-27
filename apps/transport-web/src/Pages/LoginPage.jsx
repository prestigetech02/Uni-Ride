
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [role, setRole] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.')
      return
    }

    setError('')

    // Temporary frontend demonstration, not real authentication.
    navigate(role === 'student' ? '/student' : '/driver')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">

        <div className="flex flex-col justify-between bg-blue-950 p-8 text-white sm:p-12">
          <Link to="/" className="text-xl font-extrabold">
            🚌 Uni_Ride
            <span className="mt-1 block text-sm font-normal text-blue-200">
              Campus Transport-Link
            </span>
          </Link>

          <div className="my-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Welcome aboard
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight">
              Move Smarter
              <br />
              On Campus.
            </h1>

            <p className="mt-5 leading-7 text-blue-100">
              Book your campus shuttle, manage your trips and
              make every journey easier.
            </p>

            <div className="mt-8 text-center text-7xl">🚌</div>
          </div>

          <p className="text-sm text-blue-200">
            Your campus journey starts here.
          </p>
        </div>

        <div className="p-8 sm:p-12">
          <h2 className="text-3xl font-extrabold text-blue-950">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Log in to your Uni_Ride account.
          </p>

          <div className="mt-8 grid grid-cols-2 rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`rounded-md py-3 text-sm font-semibold ${
                role === 'student'
                  ? 'bg-blue-700 text-white shadow'
                  : 'text-slate-600'
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => setRole('driver')}
              className={`rounded-md py-3 text-sm font-semibold ${
                role === 'driver'
                  ? 'bg-blue-700 text-white shadow'
                  : 'text-slate-600'
              }`}
            >
              Driver
            </button>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Log In as {role === 'student' ? 'Student' : 'Driver'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            New to Uni_Ride?{' '}
            <Link
              to="/"
              className="font-semibold text-blue-700 hover:underline"
            >
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
