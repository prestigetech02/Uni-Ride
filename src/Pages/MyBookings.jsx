
import { useState } from "react";
import { Link } from "react-router-dom";

const bookings = [
  {
    id: "CFR-001",
    pickup: "Main Gate",
    destination: "College of Science",
    date: "Tomorrow",
    time: "8:00 AM",
    status: "Confirmed",
  },
  {
    id: "CFR-002",
    pickup: "Student Hostel",
    destination: "University Library",
    date: "Monday",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    id: "CFR-003",
    pickup: "College of Science",
    destination: "Main Gate",
    date: "Last week",
    time: "3:00 PM",
    status: "Completed",
  },
  {
    id: "CFR-004",
    pickup: "Main Gate",
    destination: "Student Hostel",
    date: "Last week",
    time: "5:00 PM",
    status: "Cancelled",
  },
];

const filters = ["All", "Upcoming", "Completed", "Cancelled"];

function MyBookings() {
  const [filter, setFilter] = useState("All");

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "All") return true;
    if (filter === "Upcoming") {
      return ["Confirmed", "Pending"].includes(booking.status);
    }
    return booking.status === filter;
  });

  const statusStyles = {
    Confirmed: "bg-green-100 text-green-800",
    Pending: "bg-amber-100 text-amber-800",
    Completed: "bg-blue-100 text-blue-800",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-[#F7F9F6] p-5 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/student"
          className="font-semibold text-[#064E3B] hover:text-amber-700"
        >
          ← Back to Dashboard
        </Link>

        <header className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-amber-700">
              STUDENT PORTAL
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-[#064E3B]">
              My Bookings
            </h1>
            <p className="mt-2 text-slate-500">
              View and track your shuttle reservations.
            </p>
          </div>

          <Link
            to="/student/book-shuttle"
            className="rounded-lg bg-[#064E3B] px-5 py-3 font-bold text-white hover:bg-[#043D2E]"
          >
            + Book a Shuttle
          </Link>
        </header>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === item
                  ? "bg-[#064E3B] text-white"
                  : "border border-green-100 bg-white text-slate-600 hover:bg-green-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="mt-6 space-y-4">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <article
                key={booking.id}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      BOOKING REFERENCE
                    </p>
                    <h2 className="mt-1 font-bold text-[#064E3B]">
                      {booking.id}
                    </h2>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      statusStyles[booking.status]
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-500">Pickup point</p>
                    <p className="mt-1 font-semibold text-[#064E3B]">
                      {booking.pickup}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Destination</p>
                    <p className="mt-1 font-semibold text-[#064E3B]">
                      {booking.destination}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Travel date</p>
                    <p className="mt-1 font-medium text-slate-700">
                      {booking.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Departure time</p>
                    <p className="mt-1 font-medium text-slate-700">
                      {booking.time}
                    </p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-2xl border border-green-100 bg-white p-10 text-center">
              <p className="font-semibold text-[#064E3B]">
                No bookings in this category.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Try another filter or book a shuttle for your next trip.
              </p>
            </div>
          )}
        </section>

        <p className="mt-6 text-sm text-slate-500">
          These are demonstration bookings. Live reservations will come from
          the backend.
        </p>
      </div>
    </div>
  );
}

export default MyBookings;
