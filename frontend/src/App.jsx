import "./App.css";
import { Container, VStack, Separator } from "@chakra-ui/react";
import { TaskProvider } from "./context/TaskContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ConfirmationDialog from "./components/ConfirmationDialog.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Tasks from "./components/Tasks.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router";

function App() {
  return (
    <TaskProvider>
      <Router>
        <Container border="1px solid" p="1.5em">
          <VStack align="normal">
            <Header />
            <Separator />
            <ConfirmationDialog size="xs" />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <TaskForm />
                    <Tasks />
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
