
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
    <div className="flex min-h-screen items-center justify-center bg-[#FFFEFA] p-4 sm:p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl md:grid-cols-2">

        {/* Left branding panel */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-[#064E3B] p-8 text-white sm:p-12">

          <div className="absolute -right-16 top-20 h-56 w-56 rounded-full bg-emerald-400 opacity-20" />
          <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-amber-400 opacity-20" />

          <Link to="/" className="relative z-10 flex items-center gap-3">
            <img
              src="/cfluxride-logo.png"
              alt="CFluxRide logo"
              className="h-14 w-14 rounded-xl bg-white object-contain p-1"
            />

            <span className="text-xl font-extrabold">
              CFluxRide
              <span className="mt-1 block text-xs font-normal text-green-100">
                Campus transportation, simplified
              </span>
            </span>
          </Link>

          <div className="relative z-10 my-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
              Welcome aboard
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Move Smarter
              <br />
              On Campus.
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-green-50">
              Book your campus shuttle, manage your trips and
              make every journey easier with CFluxRide.
            </p>

            {/* Logo display area */}
            <div className="mt-8 flex min-h-44 items-center justify-center rounded-2xl bg-white p-5">
              <img
                src="/cfluxride-logo.png"
                alt="CFluxRide road and location pin symbol"
                className="max-h-40 w-full object-contain"
              />
            </div>

            <p className="mt-5 text-center text-sm font-medium text-amber-300">
              Less wahala, more movement.
            </p>
          </div>

          <p className="relative z-10 text-sm text-green-100">
            Your campus journey starts here.
          </p>
        </div>

        {/* Right login form */}
        <div className="p-8 sm:p-12">
          <div className="mb-8">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-[#064E3B]">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#064E3B]">
              Welcome Back
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Log in to your CFluxRide account.
            </p>
          </div>

          {/* Role selector */}
          <div className="grid grid-cols-2 rounded-xl bg-green-50 p-1">
            <button
              type="button"
              onClick={() => {
                setRole('student')
                setError('')
              }}
              aria-pressed={role === 'student'}
              className={`rounded-lg py-3 text-sm font-semibold transition ${
                role === 'student'
                  ? 'bg-[#064E3B] text-white shadow'
                  : 'text-slate-600 hover:bg-white'
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => {
                setRole('driver')
                setError('')
              }}
              aria-pressed={role === 'driver'}
              className={`rounded-lg py-3 text-sm font-semibold transition ${
                role === 'driver'
                  ? 'bg-[#064E3B] text-white shadow'
                  : 'text-slate-600 hover:bg-white'
              }`}
            >
              Driver
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Logging in as{' '}
            <span className="font-bold capitalize text-[#064E3B]">
              {role}
            </span>
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setError('')
                }}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#064E3B] focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setError('')
                }}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#064E3B] focus:ring-2 focus:ring-green-100"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#064E3B] py-3.5 font-bold text-white shadow-md transition hover:bg-[#043D2E] focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:ring-offset-2"
            >
              Log In as {role === 'student' ? 'Student' : 'Driver'}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">
              CFLUXRIDE
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <p className="text-center text-sm text-slate-500">
            Want to explore first?{' '}
            <Link
              to="/"
              className="font-semibold text-[#064E3B] underline-offset-4 hover:text-[#B77900] hover:underline"
            >
              Back to Home
            </Link>
          </p>

          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            By continuing, you agree to use CFluxRide responsibly
            and follow your campus transport guidelines.
          </p>
        </div>
      </div>
    </div>
  )
}
