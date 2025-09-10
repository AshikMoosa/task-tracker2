import { Heading, Flex, Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Header = ({ showForm, setShowForm }) => {
  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <Flex justify="space-between">
      <Heading>Task Tracker</Heading>
      <IconButton
        variant="solid"
        size="md"
        alignItems="center"
        onClick={handleClick}
        colorPalette={showForm ? "red" : "gray"}
      >
        {showForm ? <ChevronUp /> : <ChevronDown />}
      </IconButton>
    </Flex>
  );
};

export default Header;
