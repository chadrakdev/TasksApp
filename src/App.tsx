import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Task Manager</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Tasks: {count}
        </button>
        <p>
          This is the landing for the Task Manager.
        </p>
      </div>
      <p className="read-the-docs">
        Created with React and TypeScript.
      </p>
    </>
  )
}

export default App
