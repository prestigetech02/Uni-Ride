
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUpPage() {
  const [role, setRole] = useState('student')
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    driverId: '',
    email: '',
    phone: '',
    department: '',
    level: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError('Please complete all required fields.')
      return
    }

    if (role === 'student' && !formData.studentId.trim()) {
      setError('Please enter your student ID.')
      return
    }

    if (role === 'driver' && !formData.driverId.trim()) {
      setError('Please enter your driver ID.')
      return
    }

    if (formData.password.length < 8) {
      setError('Your password must be at least 8 characters.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Your passwords do not match.')
      return
    }

    // Frontend demonstration only; no account is saved yet.
    navigate(role === 'student' ? '/student' : '/driver')
  }

  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#064E3B] focus:ring-2 focus:ring-green-100'

  const labelClass =
    'mb-2 block text-sm font-semibold text-slate-700'

  return (
    <div className="min-h-screen bg-[#FFFEFA] p-4 sm:p-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]">

        {/* Branding panel */}
        <aside className="relative flex flex-col justify-between overflow-hidden bg-[#064E3B] p-8 text-white sm:p-10">
          <div className="absolute -right-20 top-24 h-64 w-64 rounded-full bg-emerald-400 opacity-20" />
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
                Campus Transport-Link
              </span>
            </span>
          </Link>

          <div className="relative z-10 my-10">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
              Join CFluxRide
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight">
              Your Campus.
              <br />
              Your Journey.
              <br />
              Your Ride.
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-green-50">
              Create your account to explore campus shuttles,
              organise your trips and make every journey easier.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <img
                src="/cfluxride-logo.png"
                alt="CFluxRide road and location pin logo"
                className="mx-auto max-h-48 w-full object-contain"
              />
            </div>

            <p className="mt-5 text-center text-sm font-semibold text-amber-300">
              Less wahala, more movement.
            </p>
          </div>

          <p className="relative z-10 text-sm text-green-100">
            Your campus journey starts here.
          </p>
        </aside>

        {/* Registration form */}
        <main className="p-6 sm:p-10 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-[#B77900]">
            Create an account
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#064E3B]">
            Get Started
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Fill in your details to join CFluxRide.
          </p>

          {/* Account role */}
          <div className="mt-7">
            <label className={labelClass}>
              I want to register as a
            </label>

            <div className="grid grid-cols-2 gap-3">
              {['student', 'driver'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setRole(item)
                    setError('')
                  }}
                  aria-pressed={role === item}
                  className={`rounded-xl border px-4 py-3 font-semibold capitalize transition ${
                    role === item
                      ? 'border-[#064E3B] bg-[#064E3B] text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-green-700'
                  }`}
                >
                  {item === 'student' ? '🎓 Student' : '🚌 Driver'}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">

            {/* Common information */}
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                className={inputClass}
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Role-specific information */}
            {role === 'student' ? (
              <>
                <div>
                  <label htmlFor="studentId" className={labelClass}>
                    Student ID / Matric Number *
                  </label>
                  <input
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Enter your student ID"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="department" className={labelClass}>
                      Department
                    </label>
                    <input
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="e.g. Computer Science"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="level" className={labelClass}>
                      Academic Level
                    </label>
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select level</option>
                      <option value="100">100 Level</option>
                      <option value="200">200 Level</option>
                      <option value="300">300 Level</option>
                      <option value="400">400 Level</option>
                      <option value="500">500 Level</option>
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <label htmlFor="driverId" className={labelClass}>
                  Driver ID *
                </label>
                <input
                  id="driverId"
                  name="driverId"
                  value={formData.driverId}
                  onChange={handleChange}
                  placeholder="Enter your assigned driver ID"
                  className={inputClass}
                  required
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  In the full application, driver accounts should be
                  verified before they can access driver features.
                </p>
              </div>
            )}

            {/* Passwords */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className={labelClass}>
                  Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className={labelClass}>
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  autoComplete="new-password"
                  minLength={8}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#FBBF24] py-3.5 font-bold text-[#064E3B] shadow-sm transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-[#064E3B] focus:ring-offset-2"
            >
              Create {role === 'student' ? 'Student' : 'Driver'} Account
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-bold text-[#064E3B] hover:text-[#B77900] hover:underline"
            >
              Log In
            </Link>
          </p>

          <p className="mt-4 text-center text-sm text-slate-500">
            <Link
              to="/"
              className="font-medium text-slate-500 hover:text-[#064E3B]"
            >
              ← Back to Home
            </Link>
          </p>
        </main>
      </div>
    </div>
  )
}
