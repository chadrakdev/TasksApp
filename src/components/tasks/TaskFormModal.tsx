import { Button, Modal } from "@mui/material";
import StandardLayout from "../layout/StandardLayout";
import TaskForm from "./TaskForm";

interface TaskFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaskFormModal: React.FC<TaskFormModalProps> = ({ isOpen, onClose }) => {
  // TODO: Render blank TaskForm for new task, pre-populated TaskForm for updating task
  return (
    <Modal open={isOpen}>
      <StandardLayout>
        <TaskForm onClose={onClose} />
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </StandardLayout>
    </Modal>
  );
};

export default TaskFormModal;
