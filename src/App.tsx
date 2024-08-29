import './App.css'
import StandardLayout from './components/layout/StandardLayout'
import TaskList from './components/tasks/TaskList'
import { Task } from './types/tasks/task';

const dummyTasks: Task[] = [
  {
    id: 1,
    title: "Create application",
    description: "An ASP.NET application",
    tags: "add, some, random, tags, here",
    dateAdded: new Date(),
    isCompleted: false,
    dateCompleted: new Date(),
    isRepeating: false,
    priority: 2,
  },
  {
    id: 2,
    title: "Configure services",
    description: "You need to do something, probably.",
    tags: "add, some, random, tags, here",
    dateAdded: new Date(),
    isCompleted: false,
    dateCompleted: new Date(),
    isRepeating: false,
    priority: 1,
  },
  {
    id: 3,
    title: "Define route mapping",
    description: "The necessary routes for navigation and redirects.",
    tags: "add, some, random, tags, here",
    dateAdded: new Date(),
    isCompleted: false,
    dateCompleted: new Date(),
    isRepeating: false,
    priority: 1,
  },
];

const App = () => {

  return (
    <>
      <StandardLayout>
        <TaskList data={dummyTasks} />
      </StandardLayout>
      
    </>
  )
}

export default App

// TODO: Define app routes and navigation