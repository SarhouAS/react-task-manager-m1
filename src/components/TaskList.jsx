export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) return <p>Aucune tâche.</p>

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onDelete(task.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  )
}