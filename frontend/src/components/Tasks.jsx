import { useContext } from "react";
import { Text, VStack } from "@chakra-ui/react";
import Task from "./Task.jsx";
import TaskContext from "../context/TaskContext.jsx";

const Tasks = () => {
  const { task } = useContext(TaskContext);

  if (!task || task.length === 0)
    return <Text color="green.500">No tasks for today!!</Text>;
  return (
    <VStack align="normal">
      {task.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </VStack>
  );
};

export default Tasks;
