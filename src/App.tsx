import './App.css'
import StandardLayout from './components/layout/StandardLayout'
import TaskList from './components/tasks/TaskList'

const App = () => {

  return (
    <>
      <StandardLayout>
        <TaskList />
      </StandardLayout>
      
    </>
  )
}

export default App

// TODO: 
// - Create TaskList wrapper / container
// - Create Header Footer components
// - Define app routes and navigation