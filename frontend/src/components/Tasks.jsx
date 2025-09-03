import { useState } from "react";
import { Container, VStack } from "@chakra-ui/react";
import Task from "./Task.jsx";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      deadline: "Sept 3rd at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Friends Party",
      deadline: "Sept 4th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping at Tesco",
      deadline: "Sept 5th at 10:30am",
      reminder: true,
    },
  ]);

  return (
    <VStack align="normal">
      {tasks.map((task, index) => (
        <Task key={index} taskName={task.text} taskDeadline={task.deadline} />
      ))}
    </VStack>
  );
};

export default Tasks;
