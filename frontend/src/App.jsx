import "./App.css";
import { Button, HStack } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";

function App() {
  return (
    <>
      <Header text="Task Tracker" />
      <AddTask />
    </>
  );
}

export default App;
