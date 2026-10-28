
import { Link } from "react-router-dom";

const transactions = [
  {
    id: "PAY-001",
    booking: "CFR-001",
    description: "Main Gate → College of Science",
    date: "Sample date",
    amount: "₦500",
    status: "Paid",
  },
  {
    id: "PAY-002",
    booking: "CFR-002",
    description: "Student Hostel → University Library",
    date: "Sample date",
    amount: "₦300",
    status: "Pending",
  },
];

function Payments() {
  return (
    <div className="min-h-screen bg-[#F7F9F6] p-5 sm:p-8">
      <div className="mx-auto max-w-5xl">
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
            Payments
          </h1>
          <p className="mt-2 text-slate-500">
            View your shuttle fares and payment records.
          </p>
        </header>

        <section className="mt-8 rounded-2xl bg-[#064E3B] p-6 text-white shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-3xl">
              ₦
            </div>
            <div>
              <p className="text-sm text-green-100">
                Payment Overview
              </p>
              <h2 className="mt-1 text-2xl font-extrabold">
                Your Transactions
              </h2>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-6 text-green-50">
            Review your payment history and check the status of your shuttle
            booking payments in one place.
          </p>
        </section>

        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-[#064E3B]">
              Recent Transactions
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Your payment records will appear here.
            </p>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <article
                key={transaction.id}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      {transaction.id}
                    </p>
                    <h3 className="mt-1 font-bold text-[#064E3B]">
                      {transaction.description}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Booking reference: {transaction.booking}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      transaction.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-xs text-slate-500">Transaction date</p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {transaction.date}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-500">Fare</p>
                    <p className="mt-1 text-xl font-extrabold text-[#064E3B]">
                      {transaction.amount}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="font-semibold text-[#064E3B]">
            Payment information
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The fares and transactions shown are examples only. Real fares,
            payment verification and transaction history must come from the
            backend and an approved payment provider.
          </p>
        </div>

        <footer className="mt-8 border-t border-green-100 pt-5 text-sm text-slate-500">
          © 2026 CFluxRide. Less wahala, more movement.
        </footer>
      </div>
    </div>
  );
}

export default Payments;
