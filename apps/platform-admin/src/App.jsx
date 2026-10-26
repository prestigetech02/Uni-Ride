import { useState } from "react"
import { Button, Input, Modal, ConfirmDialog, ToastProvider, useToast } from "@campus/ui"

function Demo() {
  const toast = useToast()
  const [open, setOpen] = useState(false)
  const [confirm, setConfirm] = useState(false)
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Main Admin</h1>
      <Input label="University name" placeholder="e.g. UNILAG" />
      <Input label="Email" error="Email is required" />
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Button variant="danger" onClick={() => setConfirm(true)}>Reject</Button>
        <Button variant="secondary" onClick={() => toast.show("Saved successfully", "success")}>Show toast</Button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Hello">
        <p className="text-sm">This is a modal.</p>
      </Modal>
      <ConfirmDialog open={confirm} onClose={() => setConfirm(false)} onConfirm={() => { setConfirm(false); toast.show("Rejected", "error") }}
        message="This will reject the application." confirmText="Reject" />
    </div>
  )
}

export default function App() {
  return <ToastProvider><Demo /></ToastProvider>
}
