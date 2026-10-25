
import { Link } from 'react-router-dom'

const passengers = [
  { id: 1, name: 'Precious Fapohunda', seat: '06', status: 'Booked' },
  { id: 2, name: 'James Okafor', seat: '07', status: 'Booked' },
  { id: 3, name: 'Peace Johnson', seat: '08', status: 'Pending' },
  { id: 4, name: 'Daniel Oladipo', seat: '09', status: 'Pending' },
]

export default function DriverDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <aside className="bg-blue-950 p-6 text-white md:min-h-screen md:w-64">
        <Link to="/" className="text-xl font-extrabold">
          🚌 Uni_Ride
        </Link>

        <p className="mt-2 text-xs text-blue-200">Driver Portal</p>

        <nav className="mt-10 space-y-3">
          <a href="#trip" className="block rounded-lg bg-blue-700 p-3">
            Today's Trip
          </a>
          <a href="#passengers" className="block rounded-lg p-3 hover:bg-blue-900">
            Passenger List
          </a>
          <a href="#verification" className="block rounded-lg p-3 hover:bg-blue-900">
            Verify Ticket
          </a>
          <Link to="/login" className="block rounded-lg p-3 hover:bg-blue-900">
            Log Out
          </Link>
        </nav>
      </aside>

      <main className="min-w-0 flex-1 p-5 sm:p-8">
        <header>
          <p className="text-sm font-semibold text-blue-700">DRIVER PORTAL</p>
          <h1 className="mt-2 text-3xl font-extrabold text-blue-950">
            Today's Trip
          </h1>
          <p className="mt-2 text-slate-500">
            View your assigned shuttle and passenger details.
          </p>
        </header>

        <section id="trip" className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Assigned shuttle</p>
              <h2 className="mt-2 text-xl font-bold text-blue-950">
                Shuttle 03
              </h2>
              <p className="mt-2 text-slate-600">
                Main Gate → College of Science
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Departure: 8:00 AM
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Assigned
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['Total Seats', '14'],
              ['Booked Seats', '5'],
              ['Available Seats', '9'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-2 text-2xl font-bold text-blue-950">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="passengers" className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-950">Passenger List</h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="p-3">Passenger</th>
                  <th className="p-3">Seat</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {passengers.map((passenger) => (
                  <tr key={passenger.id} className="border-b border-slate-100">
                    <td className="p-3 font-medium text-blue-950">
                      {passenger.name}
                    </td>
                    <td className="p-3">{passenger.seat}</td>
                    <td className="p-3">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        passenger.status === 'Booked'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {passenger.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="verification" className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-950">Verify Ticket</h2>
          <p className="mt-2 text-sm text-slate-500">
            Ticket scanning and verification will be implemented in a later step.
          </p>
          <button
            type="button"
            onClick={() => alert('Ticket verification will be added next.')}
            className="mt-5 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Verify Booking ID
          </button>
        </section>
      </main>
    </div>
  )
}
