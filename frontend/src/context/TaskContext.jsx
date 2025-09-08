import { createContext, useState } from "react";
import taskData from "../data/TaskData.js";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState(taskData); // Tasks stored in TaskData

  // Special Code for using localStorage
  // const [task, setTask] = useState(() => {
  //   const savedTasks = localStorage.getItem("tasks");
  //   return savedTasks ? JSON.parse(savedTasks) : taskData;
  // });
  const [showForm, setShowForm] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  // LocalStorage - This effect runs whenever the `tasks` state changes
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(task));
  // }, [task]);

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
        setShowForm,
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
