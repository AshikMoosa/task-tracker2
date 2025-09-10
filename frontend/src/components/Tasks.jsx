import { useContext } from "react";
import { Text, VStack } from "@chakra-ui/react";
import Task from "./Task.jsx";
import TaskContext from "../context/TaskContext.jsx";
import LoadingSpinner from "../shared/LoadingSpinner.jsx";
const Tasks = ({ onPromptDelete }) => {
  const { isLoading, task } = useContext(TaskContext);

  if (!isLoading && (!task || task.length === 0))
    return <Text color="green.500">No tasks for today!!</Text>;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <VStack align="normal">
      {task.map((item) => (
        <Task key={item.id} item={item} onPromptDelete={onPromptDelete} />
      ))}
    </VStack>
  );
};

export default Tasks;
