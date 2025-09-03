import { List } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { Flex, Text, IconButton } from "@chakra-ui/react";

const Task = ({ taskName, taskDeadline }) => {
  const handleDelete = () => {
    console.log("Delete task!!");
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      bg="gray.100"
      borderRadius="md"
    >
      <Flex direction="column">
        <Text>{taskName ? taskName : "Test Task"}</Text>
        <Text>{taskDeadline ? taskDeadline : "Test Deadline"}</Text>
      </Flex>
      <CloseButton
        onClick={handleDelete}
        alignItems="baseline"
        color="red.500"
      />
    </Flex>
  );
};

export default Task;
