import { useState } from "react";
import TaskItem from "./TaskItem";
import { List } from "@mui/material";
import { Task } from "../../types/tasks/task";

interface TaskListProps {
  data: Task[];
}

const TaskList: React.FC<TaskListProps> = ( {data} ) => {
  const [tasks, setTasks] = useState(data);

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
