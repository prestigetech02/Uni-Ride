
import { useState } from "react";
import { Link } from "react-router-dom";

function StudentProfile() {
  const [editing, setEditing] = useState(false);
  const [student, setStudent] = useState({
    name: "Student Name",
    email: "student@example.com",
    phone: "",
    studentId: "",
    department: "Computer Science",
    level: "100 Level",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEditing(false);
    setMessage(
      "Changes are displayed for this session only. Connect the backend to save them permanently."
    );
  }

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
            My Profile
          </h1>
          <p className="mt-2 text-slate-500">
            View and manage your personal information.
          </p>
        </header>

        <section className="mt-8 overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
          <div className="bg-[#064E3B] p-6 text-white sm:p-8">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FBBF24] text-3xl font-extrabold text-[#064E3B]">
                {student.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{student.name}</h2>
                <p className="mt-1 text-green-100">
                  {student.department} · {student.level}
                </p>
                <p className="mt-1 text-sm text-amber-300">
                  Student Account
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-bold text-[#064E3B]">
                Personal Information
              </h3>

              <button
                type="button"
                onClick={() => {
                  setEditing(!editing);
                  setMessage("");
                }}
                className="rounded-lg border border-green-200 px-4 py-2 font-semibold text-[#064E3B] hover:bg-green-50"
              >
                {editing ? "Cancel Editing" : "Edit Profile"}
              </button>
            </div>

            {message && (
              <p className="mb-5 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
                {message}
              </p>
            )}

            {editing ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  ["name", "Full Name"],
                  ["email", "Email Address"],
                  ["phone", "Phone Number"],
                  ["studentId", "Student ID"],
                  ["department", "Department"],
                  ["level", "Academic Level"],
                ].map(([name, label]) => (
                  <div key={name}>
                    <label
                      htmlFor={name}
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      {label}
                    </label>
                    <input
                      id={name}
                      name={name}
                      type={name === "email" ? "email" : "text"}
                      value={student[name]}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[#064E3B] focus:ring-2 focus:ring-green-100"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="rounded-lg bg-[#064E3B] px-6 py-3 font-bold text-white hover:bg-[#043D2E]"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  ["Full Name", student.name],
                  ["Email Address", student.email],
                  ["Phone Number", student.phone || "Not provided"],
                  ["Student ID", student.studentId || "Not provided"],
                  ["Department", student.department],
                  ["Academic Level", student.level],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl bg-[#F7F9F6] p-4"
                  >
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="mt-2 break-words font-semibold text-[#064E3B]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <p className="mt-5 text-sm text-slate-500">
          Profile information shown here is sample data until your account
          is connected to the backend.
        </p>
      </div>
    </div>
  );
}

export default StudentProfile;
