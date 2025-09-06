import "./App.css";
import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Container, VStack, Separator } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Tasks from "./components/Tasks.jsx";
import taskData from "./data/TaskData.js";
import About from "./pages/About.jsx";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router";

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
    <Router>
      <Container border="1px solid" p="1.5em">
        <VStack align="normal">
          <Header
            headingText="Task Tracker"
            buttonText={showForm ? "Close" : "Add"}
            onToggleForm={toggleForm}
            showForm={showForm}
          />
          <Separator />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {showForm && <TaskForm handleAdd={addTask} />}
                  <Tasks task={task} handleDelete={deleteTask} />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <Separator />
          <Footer />
        </VStack>
      </Container>
    </Router>
  );
}

export default App;
