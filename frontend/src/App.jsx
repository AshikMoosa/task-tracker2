import "./App.css";
import { Button, HStack } from "@chakra-ui/react";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header text="Task Tracker" />
      <h1>Test React</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
