import { Card, CardContent, Typography } from "@mui/material";
import { Task } from "../../types/tasks/task";
import { Button } from "@mui/material";

interface TaskItemProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
  const getDateString = (date: Date) => {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  return (
    <Card sx={{ margin: 3, textAlign: "right" }}>
      <Button
        variant="outlined"
        size="small"
        sx={{ marginTop: 2, marginRight: 1 }}
        onClick={onEdit}
      >
        Edit
      </Button>
      <Button
          variant="outlined"
          color="error"
          size="small"
          sx={{ marginTop: 2, marginRight: 2 }}
          onClick={onDelete}
        >
          Remove
        </Button>
      <CardContent sx={{ margin: 0, textAlign: "left" }}>
        <Typography variant="h5" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Priority: {task.priority}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Description: {task.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Tags: {task.tags}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Created: {getDateString(task.dateAdded)}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Completed: {getDateString(task.dateCompleted)}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Repeating? {task.isRepeating ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
