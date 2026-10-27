import "../App.css";
import { Link } from 'react-router-dom';


const features = [
  {
    number: '01',
    title: 'Easy Booking',
    description: 'Choose your route and reserve a seat before leaving.',
    icon: '🎟️',
  },
  {
    number: '02',
    title: 'Secure Payments',
    description: 'View your fare and payment details before confirming.',
    icon: '🔒',
  },
  {
    number: '03',
    title: 'Digital Tickets',
    description: 'Keep your booking details ready for boarding.',
    icon: '📱',
  },
  {
    number: '04',
    title: 'Reliable Trips',
    description: 'View shuttle schedules and available seats.',
    icon: '🚌',
  },
]

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-3xl">🚌</span>
            <span className="text-lg font-extrabold leading-tight text-blue-950">
              Uni_Ride
              <span className="block text-xs font-medium text-slate-500">
                Campus Transport-Link
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#features" className="hover:text-blue-700">Features</a>
            <a href="#how-it-works" className="hover:text-blue-700">How It Works</a>
            <a href="#about" className="hover:text-blue-700">About</a>
          </div>

          <div className="flex items-center gap-3">
                    <Link
        to="/login"
        className="hidden rounded-lg border border-blue-700 px-4 py-2 text-sm font-semibold text-blue-700 sm:block"
        >
        Log In
        </Link>
            <Link
  to="/login"
  className="hidden rounded-lg border border-blue-700 px-4 py-2 text-sm font-semibold text-blue-700 sm:block"
>
  Get Started
</Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24"
        >
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              Your campus, connected
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl lg:text-6xl">
              Your Campus
              <br />
              Shuttle, Made Easy.
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-slate-600">
              Book your shuttle, reserve your seat and get your
              digital ticket. Campus transportation starts here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-800">
                Book a Shuttle
              </button>
              <a
                href="#how-it-works"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-blue-950 hover:bg-slate-100"
              >
                How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>✓ Check seat availability</span>
              <span>✓ Digital tickets</span>
            </div>
          </div>

          {/* Shuttle visual */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 p-8 text-white sm:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-800 opacity-60" />
            <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-blue-700 opacity-40" />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                Move smarter
              </p>

              <h2 className="mt-3 max-w-sm text-3xl font-bold">
                Every campus journey begins with a plan.
              </h2>

              <div className="my-10 flex justify-center">
                <span className="text-8xl sm:text-9xl" role="img" aria-label="Shuttle bus">
                  🚌
                </span>
              </div>

              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-blue-200">Your next journey</p>
                <p className="mt-1 font-bold">Main Gate → College of Science</p>
                <p className="mt-2 text-sm text-blue-100">
                  Find a shuttle that fits your schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-semibold text-blue-700">WHY UNI_RIDE?</p>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-950">
                Campus travel, simplified.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                Everything you need to organise your next campus trip
                in one convenient place.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <article
                  key={feature.number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <p className="mt-5 text-xs font-bold text-blue-700">
                    FEATURE {feature.number}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-blue-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-semibold text-blue-700">GETTING STARTED</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-950">
              Three steps to your next ride
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                ['1', 'Find a shuttle', 'Select your pickup point and destination.'],
                ['2', 'Reserve your seat', 'Choose a suitable shuttle and pay.'],
                ['3', 'Show your ticket', 'Present your digital ticket when boarding.'],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-xl bg-white p-6 shadow-sm">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                    {number}
                  </span>
                  <h3 className="mt-4 font-bold text-blue-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-blue-950 px-6 py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold">Uni_Ride</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
                Making campus transportation easier through organised
                shuttle booking, seat reservations and digital tickets.
              </p>
            </div>
            <p className="text-sm text-blue-200">
              Campus Transport-Link · Student & Driver Platform
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-6 py-5 text-center text-sm text-slate-400">
        © 2026 Uni_Ride. Campus journeys made easier.
      </footer>
    </div>
  )
}

export default LandingPage
