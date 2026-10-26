import { Button } from "./Button.jsx"

export function Modal({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        {title && <h2 className="mb-4 text-lg font-semibold">{title}</h2>}
        {children}
      </div>
    </div>
  )
}

export function ConfirmDialog({ open, onClose, onConfirm, title = "Are you sure?", message, confirmText = "Confirm", loading = false }) {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      {message && <p className="mb-6 text-sm text-gray-600">{message}</p>}
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="danger" loading={loading} onClick={onConfirm}>{confirmText}</Button>
      </div>
    </Modal>
  )
}
