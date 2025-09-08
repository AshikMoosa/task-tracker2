import { useContext } from "react";
import { Heading, Flex, Button } from "@chakra-ui/react";
import TaskContext from "../context/TaskContext.jsx";

const Header = () => {
  const { showForm, setShowForm } = useContext(TaskContext);

  const handleClick = () => {
    setShowForm(!showForm);
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
