import "./App.css";
import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Tasks from "./components/Tasks.jsx";
import taskData from "./data/TaskData.js";

function App() {
  const [task, setTask] = useState(taskData);

  const deleteTask = (id) => {
    console.log(`delete task ${id}`);
    if (window.confirm("Are you sure want to delete this task?")) {
      setTask(task.filter((item) => item.id !== id));
    }
  };

  return (
    <Container border="1px solid" p="1em">
      <VStack align="normal">
        <Header headingText="Task Tracker" buttonText="Add" />
        <TaskForm />
        <Tasks task={task} handleDelete={deleteTask} />
      </VStack>
    </Container>
  );
}

export default App;
