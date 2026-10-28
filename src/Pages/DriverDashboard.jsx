
import { Link } from 'react-router-dom'

const passengers = [
  { id: 1, name: 'Precious Fapohunda', seat: '06', status: 'Booked' },
  { id: 2, name: 'James Okafor', seat: '07', status: 'Booked' },
  { id: 3, name: 'Peace Johnson', seat: '08', status: 'Pending' },
  { id: 4, name: 'Daniel Oladipo', seat: '09', status: 'Pending' },
]

const stats = [
  { label: 'Total Seats', value: '14' },
  { label: 'Booked Seats', value: '5' },
  { label: 'Available Seats', value: '9' },
]

export default function DriverDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F7F0] md:flex">

      {/* Sidebar */}
      <aside className="bg-[#064E3B] p-6 text-white md:min-h-screen md:w-64 md:shrink-0">

        <Link to="/" className="flex items-center gap-3">
          <img
            src="/cfluxride-logo.png"
            alt="CFluxRide logo"
            className="h-12 w-12 rounded-lg object-contain"
          />
          <span className="text-xl font-extrabold tracking-tight">
            CFluxRide
          </span>
        </Link>

        <p className="mt-3 text-xs font-medium uppercase tracking-widest text-green-200">
          Driver Portal
        </p>

        <nav className="mt-10 space-y-2">
          <a
            href="#trip"
            className="block rounded-xl bg-white/15 p-3 font-semibold text-[#FBBF24]"
          >
            Today's Trip
          </a>

          <a
            href="#passengers"
            className="block rounded-xl p-3 transition hover:bg-white/10"
          >
            Passenger List
          </a>

          <a
            href="#verification"
            className="block rounded-xl p-3 transition hover:bg-white/10"
          >
            Verify Ticket
          </a>

          <Link
            to="/login"
            className="mt-8 block rounded-xl p-3 text-green-100 transition hover:bg-white/10 hover:text-white"
          >
            Log Out
          </Link>
        </nav>

        <div className="mt-12 rounded-xl border border-white/15 bg-white/5 p-4">
          <p className="text-sm font-semibold text-[#FBBF24]">
            Safe journeys.
          </p>
          <p className="mt-2 text-xs leading-5 text-green-100">
            Every trip, connected with CFluxRide.
          </p>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">

        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#064E3B]">
              Driver Portal
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#064E3B] sm:text-4xl">
              Today's Trip
            </h1>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Manage your assigned shuttle and passenger details.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-green-100 bg-white p-3 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#064E3B] font-bold text-[#FBBF24]">
              D
            </div>
            <div>
              <p className="text-sm font-bold text-[#064E3B]">
                Driver
              </p>
              <p className="text-xs text-slate-500">
                Shuttle Operator
              </p>
            </div>
          </div>
        </header>

        {/* Trip Details */}
        <section
          id="trip"
          className="mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">
                YOUR ASSIGNED SHUTTLE
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-[#064E3B]">
                Shuttle 03
              </h2>

              <p className="mt-3 font-medium text-slate-700">
                Main Gate <span className="mx-2 text-[#FBBF24]">→</span>
                College of Science
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Departure: 8:00 AM
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-[#064E3B]">
              Assigned
            </span>
          </div>

          {/* Seat Statistics */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-green-100 bg-[#F8F7F0] p-5"
              >
                <p className="text-sm font-medium text-slate-600">
                  {stat.label}
                </p>

                <p className="mt-3 text-3xl font-extrabold text-[#064E3B]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Passenger List */}
        <section
          id="passengers"
          className="mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-[#064E3B]">
                Passenger List
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Passengers assigned to your trip.
              </p>
            </div>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800">
              {passengers.length} passengers
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-green-100 bg-[#F8F7F0] text-slate-600">
                  <th className="rounded-l-lg p-4">Passenger</th>
                  <th className="p-4">Seat</th>
                  <th className="rounded-r-lg p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {passengers.map((passenger) => (
                  <tr
                    key={passenger.id}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="p-4 font-semibold text-[#064E3B]">
                      {passenger.name}
                    </td>

                    <td className="p-4 font-medium text-slate-700">
                      {passenger.seat}
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                          passenger.status === 'Booked'
                            ? 'bg-green-100 text-[#064E3B]'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {passenger.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Ticket Verification */}
        <section
          id="verification"
          className="mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-extrabold text-[#064E3B]">
            Verify Ticket
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Verify passenger bookings before they board the shuttle.
          </p>

          <button
            type="button"
            onClick={() =>
              alert('Ticket verification will be implemented next.')
            }
            className="mt-6 rounded-xl bg-[#064E3B] px-6 py-3 font-bold text-white transition hover:bg-[#043D2E]"
          >
            Verify Booking ID
          </button>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-green-100 py-6 text-center text-sm text-slate-500">
          <span className="font-bold text-[#064E3B]">CFluxRide</span>
          {' '}— Connecting every campus journey.
        </footer>
      </main>
    </div>
  )
}
