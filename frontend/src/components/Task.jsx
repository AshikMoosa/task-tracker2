import { useContext } from "react";
import { Flex, Text, CloseButton, IconButton } from "@chakra-ui/react";
import { Pencil } from "lucide-react";
import TaskContext from "../context/TaskContext.jsx";

const Task = ({ item }) => {
  const { startDeleteProcess, getAndPrepareTaskData } = useContext(TaskContext);

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
          onClick={() => getAndPrepareTaskData(item)}
        >
          <Pencil />
        </IconButton>
        <CloseButton
          onClick={() => startDeleteProcess(item.id)}
          color="red.500"
          alignItems="baseline"
        />
      </Flex>
    </Flex>
  );
};

export default Task;
