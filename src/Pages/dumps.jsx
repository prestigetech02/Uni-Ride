
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
    <div className="min-h-screen bg-[#FFFEFA] md:flex">

      {/* Sidebar */}
      <aside className="bg-[#064E3B] p-6 text-white md:min-h-screen md:w-64 md:shrink-0">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/cfluxride-logo.png"
            alt="CFluxRide logo"
            className="h-12 w-12 rounded-lg bg-white object-contain p-1"
          />
          <span className="text-xl font-extrabold">
            CFluxRide
          </span>
        </Link>

        <p className="mt-3 text-xs text-green-100">
          Student Portal
        </p>

        <nav className="mt-10 space-y-3">
          <a
            href="#dashboard"
            className="block rounded-xl border-l-4 border-amber-400 bg-white/10 p-3 font-semibold text-white"
          >
            <span className="mr-3">▦</span>
            Dashboard
          </a>

          <a
            href="#shuttles"
            className="block rounded-xl p-3 text-green-50 transition hover:bg-white/10 hover:text-amber-300"
          >
            <span className="mr-3">🚌</span>
            Book a Shuttle
          </a>

          <a
            href="#bookings"
            className="block rounded-xl p-3 text-green-50 transition hover:bg-white/10 hover:text-amber-300"
          >
            <span className="mr-3">🎟️</span>
            My Bookings
          </a>

          <a
            href="#profile"
            className="block rounded-xl p-3 text-green-50 transition hover:bg-white/10 hover:text-amber-300"
          >
            <span className="mr-3">👤</span>
            Profile
          </a>

          <Link
            to="/login"
            className="mt-8 block rounded-xl p-3 text-green-50 transition hover:bg-white/10 hover:text-amber-300"
          >
            <span className="mr-3">↪</span>
            Log Out
          </Link>
        </nav>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-bold text-amber-300">
            Less wahala,
          </p>
          <p className="text-sm font-bold text-white">
            more movement.
          </p>
          <p className="mt-2 text-xs leading-5 text-green-100">
            Your campus journeys, made easier with CFluxRide.
          </p>
        </div>
      </aside>

      {/* Main dashboard */}
      <main
        id="dashboard"
        className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10"
      >
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#B77900]">
              STUDENT DASHBOARD
            </p>

            <h1 className="mt-2 text-2xl font-extrabold text-[#064E3B] sm:text-3xl">
              Good Morning, Precious 👋
            </h1>

            <p className="mt-2 text-slate-500">
              Plan your next trip and keep moving.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-lg">
              👤
            </span>
            <div>
              <p className="text-sm font-bold text-[#064E3B]">
                Precious
              </p>
              <p className="text-xs text-slate-500">
                Student
              </p>
            </div>
          </div>
        </header>

        {/* Summary cards */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: 'Upcoming Bookings',
              value: '2',
              icon: '🎟️',
              description: 'Trips scheduled',
              accent: 'bg-green-100',
            },
            {
              title: 'Total Trips',
              value: '5',
              icon: '🚌',
              description: 'Trips completed',
              accent: 'bg-amber-100',
            },
            {
              title: 'Available Balance',
              value: '₦1,250',
              icon: '💳',
              description: 'Sample wallet balance',
              accent: 'bg-green-100',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.title}
                  </p>
                  <p className="mt-3 text-3xl font-extrabold text-[#064E3B]">
                    {item.value}
                  </p>
                </div>

                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.accent} text-2xl`}>
                  {item.icon}
                </span>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        {/* Available shuttles */}
        <section id="shuttles" className="mt-10 scroll-mt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-[#064E3B] sm:text-2xl">
                Available Shuttles
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Choose a shuttle for your next campus journey.
              </p>
            </div>

            <span className="rounded-full bg-amber-100 px-3 py-2 text-xs font-bold text-[#795000]">
              SAMPLE TRIPS
            </span>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {shuttles.map((shuttle) => (
              <article
                key={shuttle.id}
                className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between bg-[#064E3B] p-5 text-white">
                  <div>
                    <p className="text-xs font-medium text-green-100">
                      CFluxRide Shuttle
                    </p>
                    <p className="mt-1 text-lg font-extrabold">
                      Shuttle {String(shuttle.id).padStart(2, '0')}
                    </p>
                  </div>

                  <img
                      src="/cfluxride-logo.png"
                      alt="CFluxRide logo"
                      className="h-16 w-16 rounded-lg bg-white object-contain p-1"
                    />
                </div>

                <div className="p-5">
                  <h3 className="font-bold leading-6 text-[#064E3B]">
                    {shuttle.route}
                  </h3>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">
                        Departure
                      </span>
                      <span className="font-semibold text-slate-700">
                        {shuttle.time}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">
                        Availability
                      </span>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                        {shuttle.seats} seats left
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-xs text-slate-500">
                        Transport fare
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-[#064E3B]">
                        ₦{shuttle.fare}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        alert(`Selected: ${shuttle.route}`)
                      }
                      className="rounded-xl bg-[#FBBF24] px-5 py-3 text-sm font-bold text-[#064E3B] transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-[#064E3B] focus:ring-offset-2"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* My bookings */}
        <section
          id="bookings"
          className="mt-10 scroll-mt-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl">
              🎟️
            </span>
            <div>
              <h2 className="text-xl font-extrabold text-[#064E3B]">
                My Bookings
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Keep track of your campus trips.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-green-200 bg-green-50/50 p-6 text-center">
            <p className="font-semibold text-[#064E3B]">
              Your bookings will appear here.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Once booking is implemented, you will be able to
              view upcoming and previous trips in this section.
            </p>
          </div>
        </section>

        {/* Profile */}
        <section
          id="profile"
          className="mt-6 scroll-mt-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-lg font-extrabold text-[#064E3B]">
            My Profile
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Student account demonstration. Profile editing will
            be added in a future development step.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-green-100 py-6 text-xs text-slate-500">
          <p>© 2026 CFluxRide. All rights reserved.</p>
          <p className="font-medium text-[#064E3B]">
            Less wahala, more movement.
          </p>
        </footer>
      </main>
    </div>
  )
}
