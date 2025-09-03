import { Container, VStack } from "@chakra-ui/react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import Task from "./Task.jsx";

const Tasks = ({ task }) => {
  if (!task || task.length === 0) return <Text>No tasks for today!!</Text>;
  return (
    <VStack align="normal">
      {task.map((item, index) => (
        <Task key={index} taskName={item.text} taskDeadline={item.deadline} />
      ))}
    </VStack>
  );
};

export default Tasks;
