import { useState } from "react";
import TaskItem from "./TaskItem";
import { List } from "@mui/material";
import { TaskEntity } from "../../types/tasks/task";
import { Button } from "@mui/material";
import TaskFormModal from "./TaskFormModal";

interface TaskListProps {
  tasks: TaskEntity[];
}

const TaskList: React.FC<TaskListProps> = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddTask = () => {
    setModalIsOpen(true);
  };

  const handleEditTask = (targetTask: TaskEntity) => {
    const targetTaskIndex: number = tasks
      .map((task) => task.id)
      .indexOf(targetTask.id);

    const modifiedTasks = [...tasks];
    modifiedTasks.splice(targetTaskIndex, 1);

    setTasks(modifiedTasks);
    console.warn(`Removed task '${targetTask.title}'`);
  };

  const handleDeleteTask = (targetTask: TaskEntity) => {
    const targetTaskIndex: number = tasks
      .map((task) => task.id)
      .indexOf(targetTask.id);

    const modifiedTasks = [...tasks];
    modifiedTasks.splice(targetTaskIndex, 1);

    setTasks(modifiedTasks);
    console.warn(`Removed task '${targetTask.title}'`);
  };

  return (
    <div>
      <TaskFormModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(!modalIsOpen)}
      />
      <Button
        variant="contained"
        onClick={handleAddTask}
      >
        Add Task
      </Button>
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
    </div>
  );
};

export default TaskList;
