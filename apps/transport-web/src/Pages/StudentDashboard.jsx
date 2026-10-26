
import { Link } from 'react-router-dom'

const shuttles = [
  {
    id: 1,
    route: 'Main Gate → College of Science',
    time: '8:00 AM',
    seats: 6,
    fare: 320,
  },
  {
    id: 2,
    route: 'Main Gate → ICT Centre',
    time: '8:30 AM',
    seats: 5,
    fare: 250,
  },
  {
    id: 3,
    route: 'Main Gate → University Library',
    time: '9:00 AM',
    seats: 8,
    fare: 200,
  },
]

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <aside className="bg-blue-950 p-6 text-white md:min-h-screen md:w-64">
        <Link to="/" className="text-xl font-extrabold">
          🚌 Uni_Ride
        </Link>

        <p className="mt-2 text-xs text-blue-200">
          Student Portal
        </p>

        <nav className="mt-10 space-y-3">
          <a href="#dashboard" className="block rounded-lg bg-blue-700 p-3">
            Dashboard
          </a>
          <a href="#shuttles" className="block rounded-lg p-3 hover:bg-blue-900">
            Book a Shuttle
          </a>
          <a href="#bookings" className="block rounded-lg p-3 hover:bg-blue-900">
            My Bookings
          </a>
          <a href="#profile" className="block rounded-lg p-3 hover:bg-blue-900">
            Profile
          </a>
          <Link to="/login" className="block rounded-lg p-3 hover:bg-blue-900">
            Log Out
          </Link>
        </nav>
      </aside>

      <main id="dashboard" className="min-w-0 flex-1 p-5 sm:p-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">
              Good Morning, Precious 👋
            </h1>
            <p className="mt-2 text-slate-500">
              Plan your next trip and keep moving.
            </p>
          </div>

          <div className="rounded-full bg-white px-4 py-2 font-semibold text-blue-950 shadow-sm">
            Student
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ['Upcoming Bookings', '2'],
            ['Total Trips', '5'],
            ['Available Balance', '₦1,250'],
          ].map(([title, value]) => (
            <article key={title} className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{title}</p>
              <p className="mt-3 text-2xl font-extrabold text-blue-950">
                {value}
              </p>
            </article>
          ))}
        </section>

        <section id="shuttles" className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-blue-950">
              Available Shuttles
            </h2>
            <span className="text-sm text-blue-700">Sample trips</span>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {shuttles.map((shuttle) => (
              <article
                key={shuttle.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl">🚌</span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {shuttle.seats} seats left
                  </span>
                </div>

                <h3 className="mt-4 font-bold text-blue-950">
                  {shuttle.route}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Departure: {shuttle.time}
                </p>

                <p className="mt-3 text-lg font-extrabold text-blue-950">
                  ₦{shuttle.fare}
                </p>

                <button
                  type="button"
                  onClick={() => alert(`Selected: ${shuttle.route}`)}
                  className="mt-5 w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
                >
                  Book Now
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="bookings" className="mt-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-950">My Bookings</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your upcoming and previous trips will appear here.
            The current dashboard uses sample data.
          </p>
        </section>

        <section id="profile" className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-blue-950">My Profile</h2>
          <p className="mt-2 text-sm text-slate-500">
            Student account demonstration.
          </p>
        </section>
      </main>
    </div>
  )
}
