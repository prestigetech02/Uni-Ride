import { useEffect, useState } from "react"
import { DataTable, Button, Input, Select, Modal, ConfirmDialog, StatusBadge, useToast } from "@campus/ui"
import { listUniversities, createUniversity, updateUniversity } from "../api/universities.js"

const EMPTY = { name: "", code: "", email: "", phone_number: "", address: "", status: "ACTIVE" }

const statusOptions = [
  { value: "ACTIVE", label: "Active" },
  { value: "INACTIVE", label: "Inactive" },
  { value: "SUSPENDED", label: "Suspended" },
]

function fieldErrors(err) {
  const out = {}
  if (err.data && typeof err.data === "object") {
    for (const [key, value] of Object.entries(err.data)) {
      out[key] = Array.isArray(value) ? value[0] : String(value)
    }
  }
  return out
}

export default function Universities() {
  const toast = useToast()
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [saving, setSaving] = useState(false)
  const [target, setTarget] = useState(null)

  async function load() {
    setLoading(true)
    setLoadError(null)
    try {
      setRows(await listUniversities())
    } catch (err) {
      setLoadError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  function change(field, value) {
    setForm({ ...form, [field]: value })
  }

  async function submit(e) {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = "University name is required"
    if (!form.code.trim()) next.code = "Code is required"
    setErrors(next)
    if (Object.keys(next).length) return
    const payload = {}
    for (const [key, value] of Object.entries(form)) {
      if (String(value).trim() !== "") payload[key] = String(value).trim()
    }
    setSaving(true)
    try {
      await createUniversity(payload)
      toast.show("University added", "success")
      setForm(EMPTY)
      setOpen(false)
      load()
    } catch (err) {
      if (err.kind === "validation") setErrors(fieldErrors(err))
      else toast.show(err.message, "error")
    } finally {
      setSaving(false)
    }
  }

  async function confirmToggle() {
    const next = target.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"
    try {
      await updateUniversity(target.code, { status: next })
      toast.show("University set to " + next.toLowerCase(), "info")
      load()
    } catch (err) {
      toast.show(err.message, "error")
    } finally {
      setTarget(null)
    }
  }

  const columns = [
    { key: "name", header: "University" },
    { key: "code", header: "Code" },
    { key: "email", header: "Email", render: (r) => r.email || "-" },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <Button variant={r.status === "ACTIVE" ? "danger" : "secondary"} onClick={() => setTarget(r)}>
          {r.status === "ACTIVE" ? "Deactivate" : "Activate"}
        </Button>
      ),
    },
  ]

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Universities</h1>
        <Button onClick={() => setOpen(true)}>Add university</Button>
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        loading={loading}
        error={loadError}
        onRetry={load}
        emptyMessage="No universities yet"
      />

      <Modal open={open} onClose={() => setOpen(false)} title="Add university">
        <form onSubmit={submit}>
          <Input label="University name" value={form.name} onChange={(e) => change("name", e.target.value)} error={errors.name} />
          <Input label="Code" value={form.code} onChange={(e) => change("code", e.target.value)} error={errors.code} placeholder="e.g. UNILAG" />
          <Input label="Email (optional)" value={form.email} onChange={(e) => change("email", e.target.value)} error={errors.email} />
          <Input label="Phone (optional)" value={form.phone_number} onChange={(e) => change("phone_number", e.target.value)} error={errors.phone_number} />
          <Input label="Address (optional)" value={form.address} onChange={(e) => change("address", e.target.value)} error={errors.address} />
          <Select label="Status" options={statusOptions} value={form.status} onChange={(e) => change("status", e.target.value)} />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" loading={saving}>Save</Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!target}
        onClose={() => setTarget(null)}
        onConfirm={confirmToggle}
        title="Change university status?"
        message="Users at this university may be affected."
        confirmText="Confirm"
      />
    </div>
  )
}
