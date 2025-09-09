import { createContext, useState, useEffect } from "react";
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]); // Tasks stored in TaskData
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`/task`);
      const data = await res.json();
      setTask(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (newTask) => {
    const response = await fetch(`/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json();

    setTask([...task, data]);
    setTaskToUpdate(null);
    setShowForm(false);
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`/task/${id}`, { method: "DELETE" });
      setTask(task.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`/task/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await response.json();

      setTask(
        task.map((item) => (item.id === id ? { ...item, ...data } : item))
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const startDeleteProcess = (id) => {
    setTaskIdToDelete(id);
    setIsAlertOpen(true);
  };

  const handleConfirmDelete = async () => {
    await deleteTask(taskIdToDelete);
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
  const updateTaskData = async (updatedTask) => {
    await updateTask(updatedTask.id, updatedTask);
    setTaskToUpdate(null);
    setShowForm(false);
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        showForm,
        taskToUpdate,
        isAlertOpen,
        taskIdToDelete,
        isLoading,
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
