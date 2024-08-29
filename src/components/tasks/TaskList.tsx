import { useState } from "react";
import TaskItem from "./TaskItem";
import { List } from "@mui/material";
import { Task } from "../../types/tasks/task";

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

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = () => {
  const [tasks, setTasks] = useState(dummyTasks);

  const handleEditTask = (targetTask: Task) => {
    const targetTaskIndex: number = tasks
      .map((task) => task.id)
      .indexOf(targetTask.id);

    const modifiedTasks = [...tasks];
    modifiedTasks.splice(targetTaskIndex, 1);

    setTasks(modifiedTasks);
    console.warn(`Removed task '${targetTask.title}'`);
  };

  const handleDeleteTask = (targetTask: Task) => {
    const targetTaskIndex: number = tasks
      .map((task) => task.id)
      .indexOf(targetTask.id);

    const modifiedTasks = [...tasks];
    modifiedTasks.splice(targetTaskIndex, 1);

    setTasks(modifiedTasks);
    console.warn(`Removed task '${targetTask.title}'`);
  };

  return (
    <List sx={{ display: "flex", flexDirection: "column" }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => handleEditTask(task)}
          onDelete={() => handleDeleteTask(task)}
        />
      ))}
    </List>
  );
};

export default TaskList;
