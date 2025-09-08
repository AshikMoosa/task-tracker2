import { useContext } from "react";
import { Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import TaskContext from "../context/TaskContext.jsx";

const Header = () => {
  const { toggleForm, showForm } = useContext(TaskContext);

  const handleClick = () => {
    toggleForm();
  };

  return (
    <Flex justify="space-between">
      <Heading>Task Tracker</Heading>
      <Button onClick={handleClick} colorPalette={showForm ? "red" : "gray"}>
        {showForm ? "Close" : "Add"}
      </Button>
    </Flex>
  );
};

export default Header;
