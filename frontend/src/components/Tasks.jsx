import { Container, VStack } from "@chakra-ui/react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import Task from "./Task.jsx";

const Tasks = ({ task, handleUpdate, handleDelete }) => {
  // task.length = 0;
  if (!task || task.length === 0)
    return <Text color="green.500">No tasks for today!!</Text>;
  return (
    <VStack align="normal">
      {task.map((item) => (
        <Task
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </VStack>
  );
};

export default Tasks;
