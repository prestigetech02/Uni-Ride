import { Button, EmptyState } from "@campus/ui"

export default function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Main Admin</h1>
      <Button className="mt-4">Test button</Button>
      <EmptyState message="No universities yet" />
    </div>
  )
}
