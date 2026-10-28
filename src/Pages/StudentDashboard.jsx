
import { Link } from "react-router-dom";

const GREEN = "#064E3B";
const YELLOW = "#FBBF24";

const quickStats = [
  {
    title: "Total Bookings",
    value: "12",
    icon: "🎟️",
    note: "All your shuttle trips",
  },
  {
    title: "Upcoming Trips",
    value: "2",
    icon: "🚌",
    note: "Trips coming up",
  },
  {
    title: "Completed Trips",
    value: "10",
    icon: "✓",
    note: "Successfully completed",
  },
];

const recentBookings = [
  {
    id: "CFR-001",
    route: "Main Gate → College of Science",
    date: "Tomorrow",
    time: "8:00 AM",
    status: "Confirmed",
  },
  {
    id: "CFR-002",
    route: "Hostel → University Library",
    date: "Monday",
    time: "10:30 AM",
    status: "Pending",
  },
];

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F9F6] text-slate-800 md:flex">

      {/* Sidebar */}
      <aside className="flex w-full flex-col bg-[#064E3B] text-white md:fixed md:inset-y-0 md:w-64">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
          <img
            src="/cfluxride-logo.png"
            alt="CFluxRide logo"
            className="h-12 w-12 rounded-lg bg-white object-contain p-1"
          />

          <div>
            <h1 className="text-xl font-extrabold">CFluxRide</h1>
            <p className="text-xs text-green-100">
              Student Portal
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-2 overflow-x-auto p-4 md:flex-1 md:flex-col md:overflow-visible">
          <Link
            to="/student"
            className="flex shrink-0 items-center gap-3 rounded-xl bg-white/15 px-4 py-3 font-semibold text-white"
          >
            <span>▦</span>
            Dashboard
          </Link>

          <Link
            to="/student/book-shuttle"
            className="flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-green-100 transition hover:bg-white/10 hover:text-white"
          >
            <span>🚌</span>
            Book a Shuttle
          </Link>

          <Link
            to="/student/bookings"
            className="flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-green-100 transition hover:bg-white/10 hover:text-white"
          >
            <span>🎟️</span>
            My Bookings
          </Link>

          <Link
            to="/student/profile"
            className="flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-green-100 transition hover:bg-white/10 hover:text-white"
          >
            <span>👤</span>
            My Profile
          </Link>

          <Link
            to="/student/payments"
            className="flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-green-100 transition hover:bg-white/10 hover:text-white"
          >
            <span>💳</span>
            Payments
          </Link>
        </nav>

        {/* Sidebar bottom */}
        <div className="hidden border-t border-white/10 p-4 md:block">
          <Link
            to="/login"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-green-100 transition hover:bg-white/10"
          >
            <span>↪</span>
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 p-5 sm:p-8 md:ml-64">

        {/* Top Bar */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Student Portal / Dashboard
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-[#064E3B] sm:text-3xl">
              Dashboard
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your campus journeys in one place.
            </p>
          </div>

          <Link
            to="/student/profile"
            className="flex items-center gap-3 rounded-xl border border-green-100 bg-white p-2 pr-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#064E3B] text-lg font-bold text-[#FBBF24]">
              S
            </div>

            <div>
              <p className="font-bold text-[#064E3B]">
                Student
              </p>
              <p className="text-xs text-slate-500">
                View profile
              </p>
            </div>
          </Link>
        </header>

        {/* Welcome Banner */}
        <section className="relative mb-8 overflow-hidden rounded-2xl bg-[#064E3B] p-6 text-white shadow-sm sm:p-8">
          <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full bg-emerald-400/20" />
          <div className="absolute -bottom-16 right-32 h-40 w-40 rounded-full bg-amber-400/10" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-300">
              YOUR CAMPUS, CONNECTED
            </span>

            <h3 className="mt-4 text-2xl font-extrabold sm:text-3xl">
              Welcome back!
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-green-50 sm:text-base">
              Ready for your next journey? Book a shuttle, reserve your
              seat and keep your campus trips organised.
            </p>

            <Link
              to="/student/book-shuttle"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FBBF24] px-5 py-3 font-bold text-[#064E3B] transition hover:bg-amber-300"
            >
              Book a Shuttle
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-[#064E3B]">
            Your Activity
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {quickStats.map((stat) => (
              <article
                key={stat.title}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>

                    <p className="mt-3 text-3xl font-extrabold text-[#064E3B]">
                      {stat.value}
                    </p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-2xl">
                    {stat.icon}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {stat.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Upcoming Trip */}
        <section className="mb-8 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-[#064E3B]">
                Your Next Journey
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Here is a preview of your next shuttle trip.
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
              Confirmed
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-3xl">
              🚌
            </div>

            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Pickup point
              </p>

              <h4 className="mt-1 font-bold text-[#064E3B]">
                Main Gate
              </h4>

              <p className="my-2 text-sm text-slate-400">
                ↓
              </p>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Destination
              </p>

              <h4 className="mt-1 font-bold text-[#064E3B]">
                College of Science
              </h4>
            </div>

            <div className="rounded-xl bg-[#F7F9F6] p-4 sm:min-w-36">
              <p className="text-xs text-slate-500">Date</p>
              <p className="mt-1 font-bold text-[#064E3B]">Tomorrow</p>

              <p className="mt-3 text-xs text-slate-500">Departure</p>
              <p className="mt-1 font-bold text-[#064E3B]">8:00 AM</p>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4">
            <Link
              to="/student/bookings"
              className="font-semibold text-[#064E3B] transition hover:text-amber-600"
            >
              View booking details →
            </Link>
          </div>
        </section>

        {/* Recent Bookings */}
        <section className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-[#064E3B]">
                Recent Bookings
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Keep track of your shuttle reservations.
              </p>
            </div>

            <Link
              to="/student/bookings"
              className="rounded-lg border border-green-200 px-4 py-2 text-sm font-semibold text-[#064E3B] transition hover:bg-green-50"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {recentBookings.map((booking) => (
              <article
                key={booking.id}
                className="flex flex-col gap-3 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    {booking.id}
                  </p>

                  <h4 className="mt-1 font-bold text-[#064E3B]">
                    {booking.route}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {booking.date} · {booking.time}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {booking.status}
                </span>
              </article>
            ))}
          </div>

          <Link
            to="/student/bookings"
            className="mt-5 inline-block font-semibold text-[#064E3B] hover:text-amber-600"
          >
            Go to My Bookings →
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-8 flex flex-wrap justify-between gap-2 border-t border-green-100 pt-5 text-xs text-slate-500">
          <p>© 2026 CFluxRide</p>
          <p>Less wahala, more movement.</p>
        </footer>
      </main>
    </div>
  );
}

export default StudentDashboard;
