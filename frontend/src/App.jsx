import "./App.css";
import { Button, HStack } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";

function App() {
  return (
    <Container border="1px solid" p="1em">
      <VStack align="normal">
        <Header headingText="Task Tracker" buttonText="Add" />
        <AddTask />
        <Tasks />
      </VStack>
    </Container>
  );
}

export default App;
