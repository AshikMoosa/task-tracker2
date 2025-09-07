import "./App.css";
import { useState } from "react";
import { Container, VStack, Separator } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ConfirmationDialog from "./components/ConfirmationDialog.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Tasks from "./components/Tasks.jsx";
import taskData from "./data/TaskData.js";
import About from "./pages/About.jsx";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router";

function App() {
  const [task, setTask] = useState(taskData); // Tasks stored in TaskData
  const [showForm, setShowForm] = useState(true);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTask([...task, newTask]);
    setTaskToUpdate(null);
    setShowForm(false);
    console.log(taskData);
  };

  const startDeleteProcess = (id) => {
    setTaskIdToDelete(id);
    setIsAlertOpen(true);
  };

  const handleConfirmDelete = () => {
    setTask(task.filter((item) => item.id !== taskIdToDelete));
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
  const updateTaskData = (updatedTask) => {
    setTask(
      task.map((item) => (item.id === updatedTask.id ? updatedTask : item))
    );
    setTaskToUpdate(null); // Clear the taskToUpdate state
    setShowForm(false); // Hide the form after updating
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
          <ConfirmationDialog
            isOpen={isAlertOpen}
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
            headerText="Delete Task"
            bodyText="Are you sure you want to delete this task? This action cannot be undone."
            size="xs"
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {showForm && (
                    <TaskForm
                      handleAdd={addTask}
                      handleUpdateData={updateTaskData}
                      taskToUpdate={taskToUpdate}
                    />
                  )}
                  <Tasks
                    task={task}
                    handleDelete={startDeleteProcess}
                    handleUpdate={getAndPrepareTaskData}
                  />
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
