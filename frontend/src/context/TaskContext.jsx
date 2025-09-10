import { createContext, useState, useEffect } from "react";
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]); // Tasks stored in TaskData
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`/tasks`);
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
    const response = await fetch(`/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json();

    setTask([...task, data]);
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`/tasks/${id}`, { method: "DELETE" });
      setTask(task.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`/tasks/${id}`, {
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

  return (
    <TaskContext.Provider
      value={{
        task,
        isLoading,
        addTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
