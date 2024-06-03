import React from 'react'
import Task from './reducers/Task'
import TaskList from './reducers/Tasklist'

function App() {
  return (
    <div>
      <h1>To do</h1>
      <Task/>
      <TaskList />
    </div>
  )
}

export default App
