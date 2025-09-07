import { CloseButton, IconButton } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import { Pencil, X } from "lucide-react";

const Task = ({ item, handleUpdate, handleDelete }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      bg="gray.100"
      borderRadius="md"
      borderLeftWidth={item.reminder ? "4px" : "0px"}
      borderLeftColor={item.reminder ? "green.400" : "none"}
    >
      <Flex direction="column">
        <Text>{item.name ? item.name : "Test Task"}</Text>
        <Text>{item.day ? item.day : "Test Deadline"}</Text>
      </Flex>
      <Flex alignItems="baseline">
        <IconButton
          variant="ghost"
          size="sm"
          alignItems="baseline"
          onClick={() => handleUpdate(item)}
        >
          <Pencil />
        </IconButton>
        <CloseButton
          onClick={() => handleDelete(item.id)}
          color="red.500"
          alignItems="baseline"
        />
      </Flex>
    </Flex>
  );
};

export default Task;
