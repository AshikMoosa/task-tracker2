import "./App.css";
import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import taskData from "./data/TaskData.js";

function App() {
  const [task, setTask] = useState(taskData);

  return (
    <Container border="1px solid" p="1em">
      <VStack align="normal">
        <Header headingText="Task Tracker" buttonText="Add" />
        <AddTask />
        <Tasks task={task} />
      </VStack>
    </Container>
  );
}

export default App;
