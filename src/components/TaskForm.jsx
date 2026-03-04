import { useState } from "react"

export default function TaskForm({ onAdd }) {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onAdd({ id: Date.now(), text: value.trim() })
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nouvelle tâche..."
      />
      <button type="submit">Ajouter</button>
    </form>
  )
}