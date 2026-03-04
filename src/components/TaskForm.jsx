import { useState } from "react"

export default function TaskForm({ onAdd }) {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value.trim()) {
      setError("La tâche ne peut pas être vide.")
      return
    }

    setError("")
    onAdd({
      id: Date.now(),
      text: value.trim()
    })

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

      {error && (
        <p style={{ color: "red", marginTop: "5px" }}>
          {error}
        </p>
      )}
    </form>
  )
}