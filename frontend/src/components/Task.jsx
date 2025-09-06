import { List } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { Flex, Text, IconButton } from "@chakra-ui/react";

const Task = ({ item, handleDelete, reminder = true }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      bg="gray.100"
      borderRadius="md"
      borderLeftWidth={reminder ? "4px" : "0px"}
      borderLeftColor={reminder ? "green.400" : "none"}
    >
      <Flex direction="column">
        <Text>{item.text ? item.text : "Test Task"}</Text>
        <Text>{item.day ? item.day : "Test Deadline"}</Text>
      </Flex>
      <CloseButton
        onClick={() => handleDelete(item.id)}
        alignItems="baseline"
        color="red.500"
      />
    </Flex>
  );
};

export default Task;
