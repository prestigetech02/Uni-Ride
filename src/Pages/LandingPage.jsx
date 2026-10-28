
import "../App.css";
import { Link } from "react-router-dom";

const GREEN = "#064E3B";
const YELLOW = "#FBBF24";

const features = [
  {
    number: "01",
    title: "Easy Booking",
    description: "Choose your route and reserve a seat before leaving.",
    icon: "🎟️",
  },
  {
    number: "02",
    title: "Secure Payments",
    description: "View your fare and payment details before confirming.",
    icon: "🔒",
  },
  {
    number: "03",
    title: "Digital Tickets",
    description: "Keep your booking details ready for boarding.",
    icon: "📱",
  },
  {
    number: "04",
    title: "Reliable Trips",
    description: "View shuttle schedules and available seats.",
    icon: "🚌",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFFEFA] text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-green-100 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            {/* Actual CFluxRide logo image */}
            <img
              src="/cfluxride-logo.png"
              alt="CFluxRide logo"
              className="h-12 w-14 object-contain"
            />

            <span className="text-xl font-extrabold leading-tight text-[#064E3B] sm:text-2xl">
              CFluxRide
              <span className="mt-1 block text-xs font-medium text-slate-500">
                Campus transportation, simplified
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a href="#home" className="transition hover:text-[#064E3B]">
              Home
            </a>
            <a href="#features" className="transition hover:text-[#064E3B]">
              Features
            </a>
            <a
              href="#how-it-works"
              className="transition hover:text-[#064E3B]"
            >
              How It Works
            </a>
            <a href="#about" className="transition hover:text-[#064E3B]">
              About
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="rounded-lg border border-[#064E3B] px-3 py-2 text-sm font-semibold text-[#064E3B] transition hover:bg-green-50 sm:px-4"
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="rounded-lg bg-[#064E3B] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#043D2E] sm:px-4"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-[#064E3B]">
              <span className="h-2 w-2 rounded-full bg-[#FBBF24]" />
              Your campus, connected
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#064E3B] sm:text-5xl lg:text-6xl">
              Your Campus
              <br />
              Shuttle, Made
              <span className="text-[#D99A00]"> Easy.</span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-slate-600">
              Book your shuttle, reserve your seat and get your
              digital ticket. Move around campus with less stress
              and more convenience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/login"
                className="rounded-lg bg-[#064E3B] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#043D2E]"
              >
                Book a Shuttle
              </Link>

              <a
                href="#how-it-works"
                className="rounded-lg border border-green-200 bg-white px-6 py-3 font-semibold text-[#064E3B] transition hover:bg-amber-50"
              >
                How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
              <span>
                <span className="mr-2 font-bold text-[#064E3B]">✓</span>
                Check seat availability
              </span>
              <span>
                <span className="mr-2 font-bold text-[#064E3B]">✓</span>
                Digital tickets
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative overflow-hidden rounded-3xl bg-[#064E3B] p-8 text-white shadow-xl sm:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-emerald-500 opacity-30" />

            <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-amber-400 opacity-20" />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                Move smarter
              </p>

              <h2 className="mt-3 max-w-sm text-3xl font-bold sm:text-4xl">
                Less wahala, more movement.
              </h2>

              {/* Logo display area */}
              <div className="my-8 flex min-h-48 items-center justify-center rounded-2xl bg-white p-5 sm:min-h-56">
                <img
                  src="/cfluxride-logo.png"
                  alt="CFluxRide road and location pin logo"
                  className="max-h-52 w-full object-contain"
                />
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-amber-300">
                  Your next journey
                </p>
                <p className="mt-1 font-bold">
                  Main Gate → College of Science
                </p>
                <p className="mt-2 text-sm text-green-50">
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
              <p className="font-semibold text-[#B77900]">
                WHY CFLUXRIDE?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#064E3B] sm:text-4xl">
                Campus travel, simplified.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                Everything you need to organise your next campus
                trip in one convenient place.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <article
                  key={feature.number}
                  className="rounded-2xl border border-green-100 bg-[#FFFEFA] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
                >
                  <span className="text-3xl">{feature.icon}</span>

                  <p className="mt-5 text-xs font-bold text-[#B77900]">
                    FEATURE {feature.number}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#064E3B]">
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
        <section
          id="how-it-works"
          className="bg-[#FFFEFA] px-6 py-16"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-semibold text-[#B77900]">
              GETTING STARTED
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#064E3B] sm:text-4xl">
              Three steps to your next ride
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Getting to your destination starts with a few simple steps.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                [
                  "1",
                  "Find a shuttle",
                  "Select your pickup point and destination.",
                ],
                [
                  "2",
                  "Reserve your seat",
                  "Choose a suitable shuttle and review your fare.",
                ],
                [
                  "3",
                  "Show your ticket",
                  "Present your digital ticket when boarding.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#064E3B] text-lg font-bold text-[#FBBF24]">
                    {number}
                  </span>

                  <h3 className="mt-4 font-bold text-[#064E3B]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/login"
              className="mt-10 inline-block rounded-lg bg-[#064E3B] px-6 py-3 font-semibold text-white transition hover:bg-[#043D2E]"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-[#064E3B] px-6 py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <img
                src="/cfluxride-logo.png"
                alt="CFluxRide logo"
                className="h-16 w-16 rounded-xl bg-white object-contain p-1"
              />

              <div>
                <h2 className="text-2xl font-bold">CFluxRide</h2>
                <p className="mt-1 text-sm text-amber-300">
                  Ride better with CFluxRide.
                </p>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-sm leading-6 text-green-50">
                Making campus transportation easier through organised
                shuttle booking, seat reservations and digital tickets.
              </p>

              <p className="mt-3 text-sm text-amber-300">
                Student & Driver Platform
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#03291F] px-6 py-5 text-center text-sm text-green-100">
        © 2026 CFluxRide. Less wahala, more movement.
      </footer>
    </div>
  );
}

export default LandingPage;
