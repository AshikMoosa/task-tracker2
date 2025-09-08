import { createContext, useState } from "react";
import taskData from "../data/TaskData.js";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // const [task, setTask] = useState({
  //   id: 1,
  //   name: "Task from Context",
  //   day: "Sept 9 at 10pm",
  //   reminder: true,
  // });
  const [task, setTask] = useState(taskData); // Tasks stored in TaskData
  const [showForm, setShowForm] = useState(true);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTask([...task, newTask]);
    setTaskToUpdate(null);
    setShowForm(false);
    console.log(taskData);
  };

  const startDeleteProcess = (id) => {
    setTaskIdToDelete(id);
    setIsAlertOpen(true);
  };

  const handleConfirmDelete = () => {
    setTask(task.filter((item) => item.id !== taskIdToDelete));
    setIsAlertOpen(false);
    setTaskIdToDelete(null);
  };
  const handleCancelDelete = () => {
    setIsAlertOpen(false);
    setTaskIdToDelete(null);
  };

  const getAndPrepareTaskData = (item) => {
    setTaskToUpdate(item);
    setShowForm(true);
  };

  // This function is called from the TaskForm component to update the main state
  const updateTaskData = (updatedTask) => {
    setTask(
      task.map((item) => (item.id === updatedTask.id ? updatedTask : item))
    );
    setTaskToUpdate(null); // Clear the taskToUpdate state
    setShowForm(false); // Hide the form after updating
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        showForm,
        taskToUpdate,
        isAlertOpen,
        taskIdToDelete,
        toggleForm,
        addTask,
        startDeleteProcess,
        handleConfirmDelete,
        handleCancelDelete,
        getAndPrepareTaskData,
        updateTaskData,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
