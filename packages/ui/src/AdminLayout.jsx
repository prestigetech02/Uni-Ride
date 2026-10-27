import { useState } from "react"

export function AdminLayout({
  appName = "Campus Transport-Link",
  navItems = [],
  activePath = "",
  LinkComponent = "a",
  user,
  onLogout,
  children,
}) {
  const [open, setOpen] = useState(false)
  const linkProp = LinkComponent === "a" ? "href" : "to"

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className={`${open ? "block" : "hidden"} fixed inset-y-0 left-0 z-40 w-60 border-r border-gray-200 bg-white p-4 lg:static lg:block`}>
        <div className="mb-6 text-lg font-bold">{appName}</div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = activePath === item.href
            return (
              <LinkComponent
                key={item.href}
                {...{ [linkProp]: item.href }}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${active ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`}
              >
                {item.label}
              </LinkComponent>
            )
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
          <button className="rounded px-3 py-1 text-sm text-gray-600 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">Menu</button>
          <div className="ml-auto flex items-center gap-4 text-sm">
            {user && <span className="text-gray-600">{user.name}{user.role ? " - " + user.role : ""}</span>}
            {onLogout && <button onClick={onLogout} className="text-blue-600 hover:underline">Log out</button>}
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
