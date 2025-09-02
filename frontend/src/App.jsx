import "./App.css";
import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <h1>Test React</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
