import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

export default function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => setTasks((prev) => [task, ...prev])
  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}