
import { useState } from "react";
import { Link } from "react-router-dom";

function BookShuttle() {
  const [form, setForm] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "",
    seats: "1",
  });

  const [message, setMessage] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.pickup === form.destination) {
      setMessage("Please choose different pickup and destination points.");
      return;
    }

    setMessage(
      "Demo request completed! No seat has been reserved yet. Connect the backend to check availability and save your booking."
    );
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#064E3B] focus:ring-2 focus:ring-green-100";

  return (
    <div className="min-h-screen bg-[#F7F9F6] p-5 sm:p-8">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/student"
          className="font-semibold text-[#064E3B] hover:text-amber-700"
        >
          ← Back to Dashboard
        </Link>

        <header className="mt-6">
          <p className="text-sm font-semibold text-amber-700">
            STUDENT PORTAL
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#064E3B]">
            Book a Shuttle
          </h1>
          <p className="mt-2 text-slate-500">
            Choose your journey details to get started.
          </p>
        </header>

        <section className="mt-8 overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
          <div className="bg-[#064E3B] p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-3xl">
                🚌
              </div>
              <div>
                <h2 className="text-xl font-bold">Plan Your Journey</h2>
                <p className="mt-1 text-sm text-green-100">
                  Enter your pickup and travel details below.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="pickup"
                  className="text-sm font-semibold text-slate-700"
                >
                  Pickup Point
                </label>
                <select
                  id="pickup"
                  name="pickup"
                  value={form.pickup}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select pickup point</option>
                  <option value="Main Gate">Main Gate</option>
                  <option value="Student Hostel">Student Hostel</option>
                  <option value="College of Science">College of Science</option>
                  <option value="University Library">University Library</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="destination"
                  className="text-sm font-semibold text-slate-700"
                >
                  Destination
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select destination</option>
                  <option value="Main Gate">Main Gate</option>
                  <option value="Student Hostel">Student Hostel</option>
                  <option value="College of Science">College of Science</option>
                  <option value="University Library">University Library</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="text-sm font-semibold text-slate-700"
                >
                  Travel Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="text-sm font-semibold text-slate-700"
                >
                  Departure Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Choose a time</option>
                  <option value="7:00 AM">7:00 AM</option>
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="seats"
                  className="text-sm font-semibold text-slate-700"
                >
                  Number of Seats
                </label>
                <select
                  id="seats"
                  name="seats"
                  value={form.seats}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="1">1 seat</option>
                  <option value="2">2 seats</option>
                  <option value="3">3 seats</option>
                  <option value="4">4 seats</option>
                </select>
              </div>
            </div>

            <div className="rounded-xl bg-amber-50 p-4">
              <p className="font-semibold text-[#064E3B]">
                Before you book
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Shuttle availability, seat limits and fares must be confirmed
                by the booking system before a real reservation is made.
              </p>
            </div>

            {message && (
              <p
                role="status"
                className="rounded-lg bg-green-50 p-4 text-sm leading-6 text-[#064E3B]"
              >
                {message}
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-lg bg-[#064E3B] px-6 py-3 font-bold text-white hover:bg-[#043D2E]"
              >
                Continue
              </button>

              <Link
                to="/student/bookings"
                className="rounded-lg border border-green-200 px-6 py-3 font-semibold text-[#064E3B] hover:bg-green-50"
              >
                My Bookings
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default BookShuttle;
