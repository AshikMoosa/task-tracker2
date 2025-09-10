import TaskContext from "../context/TaskContext.jsx";
import { Flex, Text, CloseButton, IconButton } from "@chakra-ui/react";
import { Pencil } from "lucide-react";
import { useContext } from "react";

const Task = ({ item, onPromptDelete }) => {
  const { deleteTask } = useContext(TaskContext);

  const handleDelete = async () => {
    try {
      await onPromptDelete();
      deleteTask(item.id);
    } catch {
      console.log("Deletion was cancelled.");
    }
  };

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
          // onClick={() => getAndPrepareTaskData(item)}
        >
          <Pencil />
        </IconButton>
        <CloseButton
          onClick={handleDelete}
          color="red.500"
          alignItems="baseline"
        />
      </Flex>
    </Flex>
  );
};

export default Task;
