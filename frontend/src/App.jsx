import "./App.css";
import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Tasks from "./components/Tasks.jsx";
import taskData from "./data/TaskData.js";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [task, setTask] = useState(taskData); // Tasks stored in TaskData
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const deleteTask = (id) => {
    console.log(`delete task ${id}`);
    if (window.confirm("Are you sure want to delete this task?")) {
      setTask(task.filter((item) => item.id !== id));
    }
  };

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTask([...task, newTask]);
    console.log(taskData);
  };

  return (
    <Container border="1px solid" p="1em">
      <VStack align="normal">
        <Header
          headingText="Task Tracker"
          buttonText={showForm ? "Close" : "Add"}
          onToggleForm={toggleForm}
          showForm={showForm}
        />
        {showForm && <TaskForm handleAdd={addTask} />}
        <Tasks task={task} handleDelete={deleteTask} />
      </VStack>
    </Container>
  );
}

export default App;
