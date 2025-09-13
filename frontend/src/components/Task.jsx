import TaskContext from "../context/TaskContext.jsx";
import { Flex, Text, CloseButton, IconButton } from "@chakra-ui/react";
import { Pencil } from "lucide-react";
import { useContext } from "react";

const Task = ({ item, onPromptDelete }) => {
  const { deleteTask, setTaskToUpdate } = useContext(TaskContext);

  const handleDelete = async () => {
    try {
      await onPromptDelete({
        title: "Delete Task",
        message: `Are you sure you want to delete "${item.name}"? This cannot be undone.`,
      });
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
          onClick={() => {
            setTaskToUpdate(item);
          }}
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
