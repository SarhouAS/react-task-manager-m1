export default function TaskList({ tasks, onDelete }) {

  const handleDelete = (id) => {
    if (window.confirm("Supprimer cette tâche ?")) {
      onDelete(id)
    }
  }

  if (tasks.length === 0) {
    return <p>Aucune tâche.</p>
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDelete(task.id)}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  )
}