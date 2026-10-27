import { useState } from "react"
import { Button, Input, useToast } from "@campus/ui"

export default function Settings() {
  const toast = useToast()
  const [platformName, setPlatformName] = useState("Campus Transport-Link")
  const [supportEmail, setSupportEmail] = useState("")

  function save(e) {
    e.preventDefault()
    toast.show("Settings saved", "success")
  }

  return (
    <div className="max-w-lg">
      <h1 className="mb-4 text-2xl font-bold">Platform settings</h1>
      <form onSubmit={save} className="rounded-xl border border-gray-200 bg-white p-6">
        <Input label="Platform name" value={platformName} onChange={(e) => setPlatformName(e.target.value)} />
        <Input label="Support email" value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} placeholder="support@campustransportlink.com" />
        <Button type="submit">Save settings</Button>
      </form>
    </div>
  )
}
