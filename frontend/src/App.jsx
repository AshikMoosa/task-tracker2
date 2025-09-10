import "./App.css";
import { useState } from "react";
import { Container, VStack, Separator } from "@chakra-ui/react";
import { TaskProvider } from "./context/TaskContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ConfirmationDialog from "./components/ConfirmationDialog.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Tasks from "./components/Tasks.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { useConfirmation } from "./hooks/useConfirmation.js";

function App() {
  const [showForm, setShowForm] = useState(false);
  // For confirmation dialog before deleting a task.
  const { prompt, isOpen, onConfirm, onCancel } = useConfirmation();

  return (
    <TaskProvider>
      <Router>
        <Container border="1px solid" p="1.5em">
          <VStack align="normal">
            <Header showForm={showForm} setShowForm={setShowForm} />
            <Separator />
            <ConfirmationDialog
              size="xs"
              open={isOpen}
              onOpenChange={onCancel}
              onConfirm={onConfirm}
              title="Delete Task"
              message="Are you sure you want to delete this task?"
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <TaskForm showForm={showForm} />
                    <Tasks onPromptDelete={prompt} />
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
    </TaskProvider>
  );
}

export default App;
