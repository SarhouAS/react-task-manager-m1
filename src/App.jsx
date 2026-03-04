import { useState } from "react"
import TaskForm from "./components/TaskForm"

export default function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => setTasks([task, ...tasks])

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
    </div>
  )
}